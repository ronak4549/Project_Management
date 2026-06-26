# 📋 Project Management System

A modern **Project Management Application** built with **Laravel**, **React.js**, and **Inertia.js**. This application helps teams efficiently manage projects and tasks with features like task assignment, filtering, sorting, pagination, and a dashboard for tracking project progress.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Secure Authentication

### 📁 Project Management
- Create, Read, Update, and Delete (CRUD) Projects
- Project Listing with Pagination
- Search and Filter Projects
- Sort Projects by Different Fields

### ✅ Task Management
- Create, Read, Update, and Delete (CRUD) Tasks
- Create Tasks within a Project
- Assign Tasks to Users
- View Tasks Assigned to the Logged-in User
- Filter Tasks by Project
- Search, Sort, and Paginate Tasks

### 📊 Dashboard
- Project Overview
- Task Statistics
- Assigned Tasks Summary
- Quick Navigation

### 💻 User Experience
- Responsive User Interface
- Built with React.js and Inertia.js
- Fast Navigation without Full Page Reloads

---

## 🛠️ Tech Stack

- Laravel
- React.js
- Inertia.js
- PHP 8.x
- MySQL
- Vite
- Bootstrap / Tailwind CSS

---

## 📋 Requirements

Before installing, make sure you have:

- PHP >= 8.2
- Composer
- Node.js >= 18
- NPM
- MySQL
- Git

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/ronak4549/Project_Management.git
```

Navigate to the project folder:

```bash
cd Project_Management
```

---

## 2. Install PHP Dependencies

```bash
composer install
```

---

## 3. Install Frontend Dependencies

```bash
npm install
```

---

## 4. Create Environment File

Linux / macOS

```bash
cp .env.example .env
```

Windows

```bash
copy .env.example .env
```

---

## 5. Generate Application Key

```bash
php artisan key:generate
```

---

## 6. Configure Database

Update the `.env` file with your database credentials.

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=project_management
DB_USERNAME=root
DB_PASSWORD=
```

---

## 7. Run Migrations and Seed Data

```bash
php artisan migrate --seed
```

---

## 8. Start the Development Server

Run the Laravel development server:

```bash
php artisan serve
```

---

## 9. Start the Vite Development Server

```bash
npm run dev
```

---

## 🌐 Application URL

```
http://127.0.0.1:8000
```

---

# 🔑 Demo Login Credentials

### Administrator

| Field | Value |
|--------|-------|
| Email | admin@gmail.com |
| Password | admin123 |

---

# 📂 Project Structure

```
app/
bootstrap/
config/
database/
public/
resources/
routes/
storage/
tests/
```

---

# 📸 Screenshots

Add screenshots of your application in the `screenshots` folder.

Example:

```
screenshots/

login.png
dashboard.png
projects.png
tasks.png
```

```markdown
## Dashboard

![Dashboard](screenshots/dashboard.png)

## Projects

![Projects](screenshots/projects.png)

## Tasks

![Tasks](screenshots/tasks.png)
```

---

# ⚙️ Useful Artisan Commands

Generate Application Key

```bash
php artisan key:generate
```

Run Migrations

```bash
php artisan migrate
```

Seed Database

```bash
php artisan db:seed
```

Rollback Migrations

```bash
php artisan migrate:rollback
```

Clear Application Cache

```bash
php artisan optimize:clear
```

Start Development Server

```bash
php artisan serve
```

Run Vite

```bash
npm run dev
```

Build Production Assets

```bash
npm run build
```

---

# 🚀 Future Improvements

- Role-Based Access Control (RBAC)
- Project Members and Teams
- File Attachments
- Comments on Tasks
- Activity Logs
- Email Notifications
- Due Date Reminders
- Kanban Board
- Calendar View
- Task Labels and Priorities
- Time Tracking

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 👨‍💻 Author

**Ronak Prajapati**

- GitHub: https://github.com/ronak4549

---

# 📄 License

This project is licensed under the MIT License.
