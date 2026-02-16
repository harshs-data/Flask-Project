# 📝 Flask Todo List App

A simple, clean, and intuitive To-Do List application built with Python and Flask. Manage your daily tasks efficiently with ease.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-1.1.2-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Features

- **Add Tasks**: Quickly add new tasks with a title and description.
- **View Tasks**: See all your pending tasks in a structured list.
- **Update Tasks**: Modify task details as your plans change.
- **Delete Tasks**: Remove completed or unwanted tasks.
- **Persistent Storage**: Uses SQLite database to save your tasks.
- **Responsive Design**: Clean user interface built with HTML/CSS.

##  Tech Stack

- **Backend**: Python, Flask
- **Database**: SQLite, SQLAlchemy
- **Frontend**: HTML5, CSS3, Jinja2 Templates
- **Server**: Gunicorn (configured for production)

##  Project Structure

```
flask-project/
├── app.py              # Main application file
├── requirements.txt    # Project dependencies
├── todo.db             # SQLite database file
├── templates/          # HTML templates
│   ├── index.html      # Homepage (List/Add tasks)
│   ├── update.html     # Update task page
│   ├── about.html      # About page
│   └── contact.html    # Contact page
├── static/             # Static assets (CSS, JS, Images)
```

##  Installation

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/harshs-data/Flask-Project.git
    cd "flask project(Todo list)"
    ```

2.  **Create a virtual environment (Optional but recommended)**
    ```bash
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # macOS/Linux
    source venv/bin/activate
    ```

3.  **Install Dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the Application**
    ```bash
    python app.py
    ```

5.  **Access the App**
    Open your browser and navigate to:
    `http://127.0.0.1:8000`

##  Usage

- **Home Page**: The main dashboard where you can see all your tasks. Use the form at the top to add a new task.
- **Update**: Click the "Update" button next to a task to edit its title or description.
- **Delete**: Click the "Delete" button to remove a task permanently.

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

##  License

This project is licensed under the MIT License.