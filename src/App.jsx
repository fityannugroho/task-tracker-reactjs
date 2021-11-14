import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

const App = function () {
  // Form task hook
  const [showFormTask, setShowFormTask] = useState(false);

  // Task hook
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 7th at 2:30pm',
      reminder: false,
    },
  ]);

  /**
   * Add a task
   * @param {{ id: String, text: string, day: string, reminder: boolean }} task
   */
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  /**
   * Delete a task
   * @param {string} id
   */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Set reminder of task
   * @param {string} id
   */
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id
      ? { ...task, reminder: !task.reminder }
      : task)));
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowFormTask(!showFormTask)} showForm={showFormTask} />

      {/* Task Form */}
      {showFormTask && <TaskForm onAdd={addTask} />}

      {/* Task list */}
      {
        tasks.length > 0
          ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          : 'No Tasks'
      }
    </div>
  );
};

export default App;
