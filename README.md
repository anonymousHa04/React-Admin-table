### README File

# User Management System - Admin UI

## Description

This project implements a User Management System UI that allows users to interact with a list of users (retrieved via an API). The interface provides various features for managing users, such as:

1. **Search** - A search bar to filter users based on any property (name, email, or role).
2. **Pagination** - Display users in pages of 10, with navigation buttons for first page, previous page, next page, and last page.
3. **Edit/Delete in Place** - Users can edit or delete rows in memory (no persistence), with in-place editing for the fields.
4. **Selection & Deletion** - Allows selecting one or more rows, which can be deleted using the 'Delete Selected' button.
5. **Row Selection** - A checkbox on the top left to select or deselect all rows on the current page.
6. **No external UI libraries** - The UI is built using basic HTML components like buttons, checkboxes, and text boxes.

## Features

- **Search bar**: Filters the list of users by name, email, or role. The placeholder text for the search bar starts with "Search".
- **Pagination**: Allows for easy navigation across different pages, with buttons for the first page, previous page, next page, last page, and individual page numbers. Pagination updates dynamically based on search results.
- **Edit/Delete**: In-place editing of any row, with options to save or delete users.
- **Delete selected**: A button that allows the deletion of multiple selected rows.
- **Select/Deselect all**: A checkbox on the top left to select or deselect all rows currently visible on the page.
- **Responsive**: The UI adjusts to various screen sizes.

## API

The application fetches the list of users from the following API endpoint:

**Endpoint**: `GET https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`

**Sample Response**:

```json
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]
```

## Instructions to Run

1. Clone the repository to your local machine.
2. Install dependencies (if using Node.js):
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Access the application on your local server (e.g., http://localhost:3000).

## Folder Structure

```
/admin-ui
├── /assets                # Images, icons, fonts, or other static assets
├── /components            # Reusable UI components like Button, Table, Pagination, etc.
│   ├── Button.js          # Custom button component
│   ├── Table.js           # Table component to display users
│   ├── Pagination.js      # Pagination component
│   └── SearchBar.js       # Search bar component
├── /services              # API requests (users API)
│   └── api.js             # Handles fetching data from the provided API
├── /styles                # Stylesheets for the app
│   ├── main.css           # Global styles
│   └── table.css          # Styles specific to the table component
├── /utils                 # Helper functions and utilities
│   ├── pagination.js      # Functions to handle pagination logic
│   └── search.js          # Functions to handle search/filtering logic
├── index.html             # Main HTML file
├── app.js                 # Main application logic
├── README.md              # Project description and instructions (this file)
└── package.json           # Project dependencies and script configurations
```

## Requirements

- No external UI libraries like Material UI or Bootstrap should be used for basic HTML components.
- Action buttons (edit, delete, save) must have specific class names (e.g., `edit`, `delete`).
- Navigation buttons (first page, previous page, next page, last page) must have class names (e.g., `first-page`, `previous-page`, `next-page`, `last-page`).
- Ensure no hardcoded port numbers or overriding of the `PORT` environment variable.

## Instructions to Pass Automated Tests

- **Search Bar**: The placeholder text for the search bar should begin with "Search".
- **Search Icon/Button**: The search icon or button should have the class `search-icon` and should trigger a search on pressing the ENTER key.
- **Action Buttons**: Action elements (like edit, delete, and save) should have specific class names (e.g., `edit`, `delete`, `save`).
- **Pagination Buttons**: Use `div` or `button` elements with class names like `first-page`, `previous-page`, `next-page`, and `last-page`. The pagination should correctly update when filtering or searching.
- **Editable Rows**: When the "edit" action is clicked, the row should become editable in place.
- **Delete Selected Button**: The button to delete selected rows should have the text "Delete Selected".

## Notes

- This project focuses on creating a user interface that meets functional and aesthetic requirements.
- Be sure to test the application thoroughly to ensure all functionality, such as searching, pagination, row selection, and editing/deleting, is working as expected.
