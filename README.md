# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📝 To-Do List Application

A full-stack To-Do List application built with **React.js**, **Node.js**, **Express.js**, and **JSON Web Server**. This project includes user authentication (Login/Signup), and supports full CRUD operations for managing tasks. It also uses **localStorage** for data persistence.

---

## 🚀 Features

- ✅ User Signup & Login
- ✅ JSON Web Server API
- ✅ Add / Edit / Delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Responsive UI using CSS
- ✅ Data persistence using localStorage
- ✅ Organized file structure (Login, Signup, and To-Do in separate components)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js, JSON Server
- **Data Handling**: Axios, localStorage
- **Authentication**: Basic local auth (mock implementation)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Login/
│   │  ├──Login.jsx
│   │  ├──Login.css
│   ├── Signup
│   │  ├──Signup.jsx
│   │  ├──Signup.css
│   ├── Todo/
│   │   ├── TodoList.jsx
│   │   └── TodoList.css
├── TodoApp.jsx
└── main.jsx
```

## 📷 Screenshots

![Login Page](screenshots/login.png)
![Todo List](screenshots/todolist.png)
---

## 📌 Future Improvements

- Add JWT-based authentication
- Use MongoDB or Firebase for real-time data storage
- Add due dates and categories to tasks
- Add dark/light mode toggle

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Bharath Kumar K**  
🔗 [LinkedIn](https://www.linkedin.com/in/bharath-kmr)  
📧 bharth.kmrk@gmail.com
