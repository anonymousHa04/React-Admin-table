import React, { useState } from "react";
import Paginate from "./components/Paginate";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table/Table";
import { UsersContextProvider, useUsers } from "./contexts/UsersContext";

function MainContent() {
  const { users, loading, deleteUserById, editUser } = useUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination logic
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onEditCell = (userId, field, newValue) => {
    const updatedData = { [field]: newValue };
    editUser(userId, updatedData);
  };

  const toggleRowSelection = (userId) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const toggleSelectAll = () => {
    const currentIds = paginatedUsers.map((user) => user.id);
    if (currentIds.every((id) => selectedRows.includes(id))) {
      setSelectedRows(selectedRows.filter((id) => !currentIds.includes(id)));
    } else {
      setSelectedRows([...new Set([...selectedRows, ...currentIds])]);
    }
  };

  const handleDeleteSelected = () => {
    selectedRows.forEach(deleteUserById);
    setSelectedRows([]);
  };

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <Table
            users={paginatedUsers}
            onEditUser={editUser}
            onDeleteUser={deleteUserById}
            onEditCell={onEditCell}
            selectedRows={selectedRows}
            toggleRowSelection={toggleRowSelection}
            toggleSelectAll={toggleSelectAll}
          />
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            selectedRows={selectedRows}
            onDeleteSelected={handleDeleteSelected}
          />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <UsersContextProvider>
      <MainContent />
    </UsersContextProvider>
  );
}
