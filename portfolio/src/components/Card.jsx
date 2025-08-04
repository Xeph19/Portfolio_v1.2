import React from 'react';

function Card() {
  return (
    <div className="pt-16 pl-10 flex justify-bottom"> {/* pushes everything down */}
      <div className="card bg-base-100 w-96 shadow-sm mt-10"> {/* extra top margin on the card itself */}
        <figure className="mb-2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there are
            title and actions parts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
