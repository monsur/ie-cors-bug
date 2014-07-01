This project reproduces the bug from http://connect.microsoft.com/IE/feedback/details/781303

The core issue in the bug is that IE doesn't seem to take the port into account when calculating whether a request is same-origin or cross-origin.

For example, if a page at http://localhost:1729 makes a request to a page at http://localhost:1728, this should be a cross-origin request, since the ports are different. Since it is a cross-origin request, it falls under the jurisdiction of CORS, and the request should not succeed unless there is a valid Access-Control-Allow-Origin header.

However, in IE, the request succeeds, even when there is no Access-Control-Allow-Origin header.