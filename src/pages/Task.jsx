import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Task.css';

const TaskTamer = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    day: '',
    date: '',
    month: ''
  });

  useEffect(() => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    setCurrentDate({
      day: days[now.getDay()],
      date: now.getDate(),
      month: months[now.getMonth()]
    });

    loadTasks();
  }, []);

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('dailyTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  const saveTasks = () => {
    localStorage.setItem('dailyTasks', JSON.stringify(tasks));
    showTemporaryMessage('Tasks saved successfully!');
  };

  const addTask = (text) => {
    if (!text.trim()) return;
    
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = {
      id: newId,
      text: text.trim(),
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const deleteAllTasks = () => {
    setTasks([]);
    showTemporaryMessage('All tasks deleted!');
    setShowDeleteModal(false);
  };

  const finishDay = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
    
    if (remainingTasks.length === 0) {
      setShowCongratsModal(true);
    }
  };

  const calculateProgress = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const showTemporaryMessage = (message) => {
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.className = 'temp-message';
    document.body.appendChild(msg);
    
    setTimeout(() => {
      msg.style.opacity = '0';
      setTimeout(() => msg.remove(), 500);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask(taskInput);
    }
  };

  return (
    <div className="task-tamer-container">
      <div className="header-section">
        <div className="date-box">
          <div className="day">{currentDate.day}</div>
          <div className="date-circle">{currentDate.date}</div>
          <div className="month">{currentDate.month}</div>
        </div>
        
        <div className="app-title">Task Tamer</div>
        
        <div className="progress-section">
          <div className="progress-label">Progression</div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="task-input-container">
        <input
          type="text"
          className="task-input"
          placeholder="Write your task here..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="add-task-btn"
          onClick={() => addTask(taskInput)}
        >
          +
        </button>
      </div>
      
      <div className="task-list-container">
        <div className="task-list-header">Things to be done</div>
        <div className="task-list">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              <div className="task-icon">🌿</div>
              <div 
                className="task-text"
                onClick={() => toggleTaskComplete(task.id)}
              >
                {task.text}
              </div>
              <button 
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(task.id);
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
          {tasks.length === 0 && (
            <div className="empty-state">No tasks yet. Add one above!</div>
          )}
        </div>
      </div>
      
      <div className="action-buttons">
        <button
          className="action-btn"
          onClick={saveTasks}
        >
          Save
        </button>
        <button
          className="action-btn danger-btn"
          onClick={() => setShowDeleteModal(true)}
        >
          DELETE ALL
        </button>
        <button
          className="action-btn"
          onClick={finishDay}
        >
          FINISH DAY
        </button>
      </div>
      
      {showCongratsModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>You did it! ✨</h2>
            <p>Great job completing your tasks today!</p>
            <button
              className="modal-btn cancel-btn"
              onClick={() => setShowCongratsModal(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Warning! ⚠️</h2>
            <p>This will permanently delete all your tasks. Are you sure?</p>
            <div className="modal-buttons">
              <button
                className="modal-btn confirm-btn"
                onClick={deleteAllTasks}
              >
                Delete All
              </button>
              <button
                className="modal-btn cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskTamer;