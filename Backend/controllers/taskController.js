const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res) => {
  const { title, description, priority, deadline, project } = req.body;
  try {
    const task = new Task({
      title,
      description,
      priority,
      deadline,
      status: 'ongoing',
      project,
      user: req.user,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  const { title, description, priority, deadline, status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, priority, deadline, status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
