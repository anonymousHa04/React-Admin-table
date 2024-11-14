// TableHeader.js
import React from "react";

const TableHeader = ({ selectAll, onToggleSelectAll }) => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={onToggleSelectAll}
            aria-label="Select all rows"
          />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
