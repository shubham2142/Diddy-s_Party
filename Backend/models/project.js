const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  }],
});

module.exports = mongoose.model('Project', ProjectSchema);
