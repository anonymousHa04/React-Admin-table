// TableRow.js
import React, { useState } from "react";
import Buttons from "../Button";
import EditableCell from "./EditableCell";
import "../../styles/Table.css";

const TableRow = ({
  user,
  onEditUser,
  onDeleteUser,
  onEditCell,
  isSelected,
  onToggleSelect,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDeleteUser(user.id);
  };

  const handleSave = (updatedData) => {
    onEditUser(user.id, updatedData);
    setIsEditing(false);
  };

  const rowClassName = isSelected ? "table-row selected" : "table-row";

  return (
    <tr className={rowClassName}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          aria-label="Select row"
        />
      </td>
      <EditableCell
        value={user.name}
        isEditing={isEditing}
        onEditCell={onEditCell}
        userId={user.id}
        field="name"
      />
      <EditableCell
        value={user.email}
        isEditing={isEditing}
        onEditCell={onEditCell}
        userId={user.id}
        field="email"
      />
      <EditableCell
        value={user.role}
        isEditing={isEditing}
        onEditCell={onEditCell}
        userId={user.id}
        field="role"
      />
      <Buttons
        isEditing={isEditing}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSave={handleSave}
        userData={{ name: user.name, email: user.email }}
      />
    </tr>
  );
};

export default TableRow;
