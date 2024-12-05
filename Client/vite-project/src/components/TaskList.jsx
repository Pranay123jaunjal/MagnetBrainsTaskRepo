import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask } from '../api';

const TaskList = ({ onTaskSelected }) => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const loadTasks = async () => {
    try {
      const { data } = await fetchTasks();
      setTasks(data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleDelete = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(taskId);
      loadTasks();
    }
  };

  useEffect(() => {
    loadTasks();
  }, [page]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div key={task._id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{task.title}</h3>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
            <button
              onClick={() => onTaskSelected(task._id)}
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
