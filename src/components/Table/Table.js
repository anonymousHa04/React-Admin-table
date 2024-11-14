import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({
  users,
  onEditUser,
  onDeleteUser,
  onEditCell,
  selectedRows,
  toggleRowSelection,
  toggleSelectAll,
}) => {
  // const [selectedRows, setSelectedRows] = useState([]);

  return (
    <table>
      {/* header for table */}
      <TableHeader
        selectAll={selectedRows.length === users.length}
        onToggleSelectAll={toggleSelectAll}
      />
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <TableRow
              key={user.id}
              user={user}
              isSelected={selectedRows.includes(user.id)}
              onToggleSelect={() => toggleRowSelection(user.id)}
              onEditUser={onEditUser}
              onDeleteUser={onDeleteUser}
              onEditCell={onEditCell}
            />
          ))
        ) : (
          <tr>
            <td colspan="4">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
