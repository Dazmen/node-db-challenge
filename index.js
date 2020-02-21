const express = require('express');
const server = express();
const projectRouter = require('./projects-router/projectRouter.js');

server.use(express.json());
server.use('/api/projects', projectRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}....`)
});