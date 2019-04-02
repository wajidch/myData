'use strict';

require('dotenv').config();
const Hapi = require('hapi');
const glob = require('glob');
const path = require('path');
const validateToken = require('./src/utilities/auth').validateToken;
const config = require('./configs/config');
const documentation = require('./configs/documentation');
const db = require('./src/models/index');
// const cornForAbsent=require('./src/controllers/common/corn').cornForAbsent;
// const cornForWeekend=require('./src/controllers/common/corn').cornForWeekend;
const cluster = require('cluster');
const os = require('os');
var colors = require('colors/safe');
const server = new Hapi.Server();



if (cluster.isMaster) {
    var numWorkers = 1;

    console.log(colors.rainbow('Master cluster setting up ' + numWorkers + ' workers...'));
    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }
    cluster.on('online', function (worker) {
        console.log(colors.rainbow('Worker ' + worker.process.pid + ' is online'));
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log(colors.red('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal));
        console.log('Starting a new worker');
        cluster.fork();
    });
}
else {
    server.connection({ port: config.port, routes: { cors: true } });
    // cornForAbsent();
    //cornForWeekend();
    let registrationErrors = false;
    server.register([
        require('hapi-auth-jwt2'),
        require('inert'),
        require('vision'),
        { register: require('hapi-swagger'), options: documentation.swaggerOptions, },
        { register: require('good'), }], (err) => {
            if (err) {
                registrationErrors = true;
                throw err;
            } else {
                server.auth.strategy('jwt', 'jwt', 'optional', {
                    key: config.secretKey,
                    validateFunc: validateToken,
                    verifyOptions: { algorithms: ['HS256'] }
                });
                glob.sync('src/routes/*.js', {
                    root: __dirname
                }).forEach(file => {
                    const route = require(path.join(__dirname, file));
                    server.route(route);
                });
            }
        });


    if (!registrationErrors) {
        server.start(err => {
            if (err) throw err;
            server.inject({ url: '/', headers: { host: server.info.uri } });
            db.sequelize.authenticate().then(() => {
                console.log('Connection has been established successfully.', 'Environment:', config.environment);
            }).catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        });
    }
}