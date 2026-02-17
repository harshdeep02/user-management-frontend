# User Management App

A React-based CRUD (Create, Read, Update, Delete) application for managing users.  
Built with scalability and extensibility in mind using a schema-driven form architecture.

---

## 🚀 Tech Stack

- React (Vite)
- Redux Toolkit (State Management)
- Axios (API Integration)
- Tailwind CSS (Styling)
- React Toastify (Notifications)
- JSON Server (Mock Backend)

---

## 📌 Features

### 1️⃣ User Form Fields

- First Name (Required)
- Last Name (Required)
- Phone Number (Required + Phone Validation)
- Email Address (Required + Email Validation)

Each field supports:
- Required validation
- Minimum length validation
- Pattern validation (Email format)
- Real-time error display

---

### 2️⃣ CRUD Operations

- ✅ Create new user
- ✅ Read (View all users)
- ✅ Update existing user
- ✅ Delete user

Async handling includes:
- Loading indicators
- Error handling
- Toast notifications for success/failure

---

### 3️⃣ Extensibility (Schema-Based Form Architecture)

The form is dynamically generated using a configuration schema file.

Example:

```js
// userFormSchema.js

export const userFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
];
```

### ➕ Adding a New Field

To add a new field (e.g., Date of Birth):

1. Add a new object inside `userFields`
2. No UI changes required
3. No Redux logic modification required

Example:

```js
{
  name: "dateOfBirth",
  label: "Date of Birth",
  type: "date",
  required: false
}
```

The form automatically renders the new field.

This ensures:
- High maintainability
- Minimal code changes
- Future scalability

---

### 4️⃣ UI/UX Highlights

- Clean card-based layout
- Modal-based form for create & edit
- Responsive table layout
- Loading state handling
- Empty state handling
- Toast notifications
- Responsive design

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/harshdeep02/user-management-frontend.git
cd user-management-frontend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm run dev
```

---

## 📡 Mock API Setup (JSON Server)

Since no backend API was provided, JSON Server is used as a mock API.

### Run JSON Server

Globally:

```bash
git clone https://github.com/harshdeep02/user-management-backend.git
cd backend
```
### Run Json Server

```bash
npm run dev
```

---

API Local Base URL:

```
http://localhost:3001/users
```

---

## 🔄 API Endpoints Used

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | /users         | Get all users     |
| POST   | /users         | Create user       |
| PUT    | /users/:id     | Update user       |
| DELETE | /users/:id     | Delete user       |

---

## 📂 Project Structure

```
backend/
 ├── Db/
 │    └── db.json
frontend/     
      └── src/
            ├── assets/...
            ├── Redux/
            │    ├── Actions/
            │    │      └── UserAction.js
            │    ├── Services/
            │    │      └── fetchUserApi.js
            │    ├── Slices/
            │    │      ├── FormSlice.js
            │    │      └── UserSlice.js
            │    └── Store.js
            ├── features/
            │    └── userFormSchema.js 
            ├── helper/
            │    └── validation.js 
            ├── components/
            │    ├── UserTable.jsx
            │    ├── FormModal.jsx
            │    ├── Header.jsx
            │    ├── LoadingButton.jsx
            │    └── Loader.jsx
            ├── App.jsx
            └── main.jsx
```

---

## 📌 Assumptions

- No authentication required
- JSON Server used for backend simulation
- Unique IDs generated automatically by JSON Server

---

## 🚀 Future Improvements

- Pagination
- Search & filtering
- Sorting functionality
- Role-based user management

---

## 🌍 Deployment

Frontend deployed using: 
- Netlify 
Backend deployed using:
- Render 

---

## 👨‍💻 Author

Harsh Deep
