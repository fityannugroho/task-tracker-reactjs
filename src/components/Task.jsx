import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = function ({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes color="red" cursor="pointer" onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

// Default properties
Task.defaultProps = {
  task: 'Task Tracker',
};

// Property types validation
Task.propTypes = {
  task: PropTypes.shape,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
