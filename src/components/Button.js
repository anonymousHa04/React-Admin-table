// Buttons.js
import React from "react";
import "./../styles/buttons.css";

const Buttons = ({ isEditing, onEdit, onDelete, onSave, userData }) => {
  return (
    <td>
      {isEditing ? (
        <button className="save" onClick={() => onSave(userData)}>Save</button>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button className="edit" onClick={onEdit}>Edit</button>
          <button className="delete" onClick={onDelete}>Delete</button>
        </div>
      )}
    </td>
  );
};

export default Buttons;
