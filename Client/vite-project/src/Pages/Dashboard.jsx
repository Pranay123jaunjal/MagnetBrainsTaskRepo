import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSaved = () => {
    setSelectedTask(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <TaskForm taskId={selectedTask} onTaskSaved={handleTaskSaved} />
      <TaskList onTaskSelected={setSelectedTask} />
    </div>
  );
};

export default Dashboard;
