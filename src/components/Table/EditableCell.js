// EditableCell.js
import React, { useState, useEffect } from "react";

const EditableCell = ({ value, isEditing, onEditCell, userId, field }) => {
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleBlur = () => {
    if (newValue !== value) {
      onEditCell(userId, field, newValue);
    }
  };

  return (
    <td>
      {isEditing ? (
        <input
          type="text"
          value={newValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
};

export default EditableCell;
