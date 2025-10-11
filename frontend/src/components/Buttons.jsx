import * as React from "react";
import Button from "@mui/material/Button";

export default function DisableElevation({ buttonName, onClick }) {
  return (
    <Button
      variant="contained"
      disableElevation
      onClick={onClick}
      sx={{
        backgroundColor: "#4F46E5", // Indigo-600
        color: "#ffffff",
        fontWeight: 600,
        fontSize: "0.875rem",
        textTransform: "none",
        px: 4,
        py: 1.5,
        borderRadius: "0.75rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#4338CA", // Slightly darker on hover
          boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
          transform: "translateY(-2px)",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        },
      }}
    >
      {buttonName}
    </Button>
  );
}
