const express = require('express');
const Projects = require('./projectHelpers.js');
const router = express.Router();

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not get resources list'})
        })
});
router.post('/resources', validateResource, (req, res) => {
    Projects.addResource(req.body)
        .then(resp => {
            console.log(resp)
            res.status(201).json({ message: "post successful"})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not post resource'})
        })
});
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not get projects'})
        })
});
router.post('/', validateProject, (req, res) => {
    Projects.addProject(req.body)
        .then(resp => {
            console.log(resp)
            res.status(201).json({ message: "post successful"})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not post project'})
        })
});
router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not fetch tasks'})
        })
});// add ID validation later
router.post('/:id/tasks', (req, res) => {
    Projects.addTask(req.body, req.params.id)
        .then(resp => {
            res.status(201).json({ message: "task posted"})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'could not post task'})
        })
})

module.exports = router;
function validateTask(req, res, next){
    const body = req.body;
    if(body.description){
        next();
    } else {
        res.status(400).json({error: 'please provide a valide task description'})
    }
}
function validateProject(req, res, next) {
    const body = req.body;
    if(body.title){
        next();
    } else {
        res.status(400).json({ error: 'please provide a valid title'})
    }
};
function validateResource(req, res, next){
    const body = req.body;
    if(body.name){
        next();
    } else {
        res.status(400).json({ error: 'please provide a valid body'})
    }
};