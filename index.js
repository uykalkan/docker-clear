#!/usr/bin/env node

var shell = require('shelljs');

const { stdout } = shell.exec('echo $(docker container ls -aq)', { silent: true })

if (stdout.length > 1) {
    shell.exec("docker container stop $(docker container ls -aq) && docker container rm $(docker container ls -aq)");
} else {
    console.log("Containers already deleted");
}