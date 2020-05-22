"use strict";
/*
//Test1
// src/server.ts
Object.defineProperty(exports, "__esModule", { value: true });
//test 2
const express = require("express");
const path = require("path");
const app = express();
app.set('port', process.env.PORT || 3200);
let http = require('http').Server(app);
// set up socket.io and bind it to our
// http server.
let io = require('socket.io')(http);
//next comment line: test to fix inde.html issue 
//let fs = require('fs'); 
//
// simple '/' endpoint sending a Hello World response
*/
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server.listen(process.env.PORT || 3200));
require('events').EventEmitter.defaultMaxListeners = 10000;


app.get('/', (req, res) => {
    //commented next: test to fix inde.html issue
    /*
    fs.readFile("client/index.html", null, function(error: any, data: any){
        if (error){
            express.response.writeHead(404)
            express.response.write('File not Found!')
        }
        else {
            express.response.write(data);
        }
        express.response.end();
    })
    */
    // tslint:disable-next-line: quotemark
    //uncomment res.send if what is above does not work
    //res.send(path.resolve('client/index.html'));
    //res.send("Serveur projet noé");
    
    //redirection on web
    res.writeHead(301,
    {Location: 'https://sleepy-taiga-76984.herokuapp.com/'}
    );
});
io.sockets.on("connection", function (socket) {
    console.log("a user connected");
    // whenever we receive a 'message' we log it out
    socket.on("message", function (message) {
        console.log(message); 
    });
});
// start our simple server up on localhost:3000
// tslint:disable-next-line: only-arrow-functions
/*
// src/server.ts
//test 1
import * as express from "express";

const app = express();
app.set("port", process.env.PORT || 3000);

var http = require("http").Server(app);

// simple '/' endpoint sending a Hello World
// response
app.get("/", (req: any, res: any) => {
  res.send("hello world");
});

// start our simple server up on localhost:3000
const server = http.listen(3200, function() {
  console.log("listening on *:3200");
});
*/ 
//# sourceMappingURL=server.js.map