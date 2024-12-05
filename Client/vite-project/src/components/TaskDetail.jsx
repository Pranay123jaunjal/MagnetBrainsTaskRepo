import React, { useState, useEffect } from 'react';
import { fetchTaskDetails } from '../api';

const TaskDetail = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const loadTask = async () => {
      const { data } = await fetchTaskDetails(taskId);
      setTask(data);
    };
    loadTask();
  }, [taskId]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default TaskDetail;
