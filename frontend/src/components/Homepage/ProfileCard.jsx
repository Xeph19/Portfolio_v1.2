import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";
import Rhe from "../../assets/ProfileRhe.jpg";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266,100%,90%,var(--card-opacity)) 4%, hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%, hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%, hsla(266,0%,60%,0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaa80 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffcc 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffcc 0%, #07c6ffff 50%, #c137ffcc 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
};

const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value, precision = 3) => parseFloat(value.toFixed(precision));
const adjust = (value, fromMin, fromMax, toMin, toMax) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent = ({
  avatarUrl = Rhe,
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "John Rhe M. Poblacion",
  title = "Developer",
  handle = "jrhe.18",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  /** --- Animation Handlers --- **/
  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;
    let rafId = null;

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;
      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(
          Math.hypot(percentY - 50, percentX - 50) / 50,
          0,
          1
        )}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([key, val]) =>
        wrap.style.setProperty(key, val)
      );
    };

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animate = (time) => {
        const elapsed = time - startTime;
        const progress = clamp(elapsed / duration);
        const eased = easeInOutCubic(progress);
        const currentX = adjust(eased, 0, 1, startX, targetX);
        const currentY = adjust(eased, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);
        if (progress < 1) rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) cancelAnimationFrame(rafId);
      },
    };
  }, [enableTilt]);

  /** --- Pointer Interactions --- **/
  const handlePointerMove = useCallback(
    (e) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        e.clientX - rect.left,
        e.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;
    wrap.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (e) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap || !animationHandlers) return;
      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        e.offsetX,
        e.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("active");
    },
    [animationHandlers]
  );

  /** --- Mobile Tilt Support --- **/
  const handleDeviceOrientation = useCallback(
    (event) => {
      if (!enableMobileTilt || !animationHandlers) return;
      const card = cardRef.current;
      const wrap = wrapRef.current;
      if (!card || !wrap) return;
      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;
      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 +
          (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, enableMobileTilt, mobileTiltSensitivity]
  );

  /** --- Lifecycle --- **/
  useEffect(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap || !animationHandlers) return;

    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);

    if (enableMobileTilt) {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    // Initial animation
    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      animationHandlers.cancelAnimation();
    };
  }, [
    animationHandlers,
    enableMobileTilt,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
    handleDeviceOrientation,
  ]);

  /** --- Styles --- **/
  const cardStyle = useMemo(
    () => ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient
        ? behindGradient ?? DEFAULT_BEHIND_GRADIENT
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`} style={cardStyle}>
      <section ref={cardRef} className="pc-card" aria-label={`${name}'s profile card`}>
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />

          {/* Avatar Section */}
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name} avatar`}
              loading="lazy"
              onError={(e) => (e.target.style.display = "none")}
            />

            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name} mini avatar`}
                      loading="lazy"
                      onError={(e) => (e.target.style.opacity = "0.5")}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Name & Title */}
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCardComponent);
