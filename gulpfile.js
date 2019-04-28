let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();

// tasks below
function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}