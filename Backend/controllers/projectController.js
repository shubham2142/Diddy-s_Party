const Project = require('../models/Project');

// Create Project
exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = new Project({
      name,
      description,
      user: req.user,
    });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    res.json(project);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
