import React from 'react';
import { useParams } from 'react-router-dom';
import TaskDetail from '../components/TaskDetail';

const TaskDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Task Details</h1>
      <TaskDetail taskId={id} />
    </div>
  );
};

export default TaskDetailPage;
