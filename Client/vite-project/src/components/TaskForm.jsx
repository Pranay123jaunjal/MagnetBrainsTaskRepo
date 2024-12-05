import React, { useState, useEffect } from 'react';
import { createTask, updateTask, fetchTaskDetails } from '../api';

const TaskForm = ({ taskId, onTaskSaved }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
  });

  useEffect(() => {
    if (taskId) {
      const loadTask = async () => {
        const { data } = await fetchTaskDetails(taskId);
        setForm(data);
      };
      loadTask();
    }
  }, [taskId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (taskId) {
        await updateTask(taskId, form);
      } else {
        await createTask(form);
      }
      onTaskSaved();
      alert('Task saved successfully!');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">{taskId ? 'Edit Task' : 'Create Task'}</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="block w-full p-2 border rounded mb-4"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="block w-full p-2 border rounded mb-4"
      />
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        className="block w-full p-2 border rounded mb-4"
        required
      />
      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="block w-full p-2 border rounded mb-4"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        {taskId ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
