# Introduction

This project reproduces the bug from http://connect.microsoft.com/IE/feedback/details/781303

The core issue in the bug is that IE doesn't seem to take the port into account when calculating whether a request is same-origin or cross-origin.

For example, if a page at http://localhost:1729 makes a request to a page at http://localhost:1728, this should be a cross-origin request, since the ports are different. Since it is a cross-origin request, it falls under the jurisdiction of CORS, and the request should not succeed unless there is a valid Access-Control-Allow-Origin header.

However, in IE, the request succeeds, even when there is no Access-Control-Allow-Origin header.

# Usage

In order to repo the bug, download this project and start the server by running `node app.js`. This starts up two servers, one running on port 1728 and the other running on port 1729.

Next, visit the page at http://localhost:1729/client.html. This page makes a cross-origin request to http://localhost:1728. Because the response from 1728 does not have an `Access-Control-Allow-Origin` header, you would expect the request to fail.

Instead, the request succeeds in IE. The request fails on all other browers.

# Results

Here are screenshots of the results from various browsers under Windows 8.1.

IE 11
![IE 11](http://i.imgur.com/S9wJLIg.png)

Chrome 35
![Chrome 35](http://i.imgur.com/5WiLMn1.png)

Firefox 30
![Firefox 30](http://i.imgur.com/KFIJn9K.png)

Opera 22
![Opera 22](http://i.imgur.com/NJGbyFy.png)
