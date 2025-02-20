import React, { useState } from 'react';
import { Trash2, Check, Plus } from 'lucide-react';
import './styles/TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

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

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          <Plus size={16} /> Add
        </button>
      </form>

      <div className="todo-list">
        {tasks.map(task => (
          <div key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <span className="todo-text">{task.text}</span>
            <div className="todo-actions">
              <button onClick={() => toggleTask(task.id)} className="todo-check">
                <Check size={16} />
              </button>
              <button onClick={() => deleteTask(task.id)} className="todo-delete">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && <div className="todo-empty">No tasks yet. Add one to get started!</div>}
    </div>
  );
};

export default TodoList;
