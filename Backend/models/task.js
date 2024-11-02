const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  priority: String,
  deadline: Date,
  status: String,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Task', TaskSchema);
