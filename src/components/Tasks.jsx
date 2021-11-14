import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = function ({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
    </>
  );
};

// Property types validation
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(Task).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Tasks;
