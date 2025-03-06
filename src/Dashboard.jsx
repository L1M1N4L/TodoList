import React, { useState } from 'react';
import { Trash2, Check, Plus, Search, Menu, Settings } from 'lucide-react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <button className="icon-button">
            <Menu size={24} />
          </button>
          <h1>Tasks</h1>
        </div>
        <div className="header-right">
          <button className="icon-button">
            <Settings size={24} />
          </button>
        </div>
      </header>

      <div className="search-bar">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="todo-container">
        <div className="todo-card">
          <form onSubmit={addTask} className="todo-form">
            <div className="input-container">
              <Plus size={20} />
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                className="todo-input"
              />
            </div>
          </form>
          
          <div className="todo-list">
            {filteredTasks.map(task => (
              <div 
                key={task.id} 
                className={`todo-item ${task.completed ? 'completed' : ''}`}
              >
                <button 
                  onClick={() => toggleTask(task.id)} 
                  className="check-button"
                >
                  <Check size={20} />
                </button>
                <span className="todo-text">{task.text}</span>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="delete-button"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          
          {filteredTasks.length === 0 && (
            <div className="empty-state">
              <div className="empty-illustration"></div>
              <p>{searchTerm ? "No matching tasks found" : "No tasks yet. Add one to get started!"}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TodoList;