const db = require('../data/db-config.js');

module.exports = {
    addResource,//
    getResources,//
    addProject,//
    getProjects,//
    addTask,
    getTasks, 
};
function getTasks(projectID){
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .select('t.id as taskId',
         't.task',
         't.note',
         't.complete',
         'p.title',
         'p.description')
         .where({ 't.project_id': projectID })
};
function addTask(task, projectID){
    return db('tasks')
        .insert({...task, project_id: projectID})
};
function getProjects(){
    return db('projects')
};
function addProject(project){
    return db('projects')
        .insert(project);
}
function getResources(){
    return db('resources');
};
function addResource(resource){
    return db('resources')
        .insert(resource, 'id');
};
