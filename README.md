# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an unhandled exception causes a server to crash. The example uses an HTTP server that attempts to access a non-existent property, leading to a crash.  The solution shows how to properly handle exceptions using `try...catch` blocks to prevent server crashes and gracefully handle errors.

## Bug

The `bug.js` file contains a simple HTTP server.  However, it includes a line that tries to access a non-existent property of the `server` object. This causes an unhandled exception, resulting in the server crashing.

## Solution

The `bugSolution.js` file demonstrates how to use a `try...catch` block to handle the potential error. This prevents the server from crashing and allows for more graceful error handling.