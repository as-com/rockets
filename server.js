require('dotenv').load();

cluster = require('cluster');
os      = require('os');
ws      = require('uws');
async   = require('async');
uuid    = require('uuid');
winston = require('winston');
restler = require('restler');

querystring = require('querystring');
http = require('http');

// Allows us to `require` .coffee files
require('coffee-script').register();

// Require all files in /src
require('./src')();

// Global log
log = new Log();

// Create a new master process if master or create a worker if it's a fork.
cluster.isMaster ? new Master() : new Worker();

// Manual GC every 15 seconds.
// Requires --expose-gc
// setInterval(global.gc, 15 * 1000);
