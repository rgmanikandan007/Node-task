const express = require('express');
const app = express();
const port = 3000;

// Middleware for logging requests
const requestLogger = (req, res, next) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next(); // pass control to the next middleware or route handler
};

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // log the error stack
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message,
    });
};

// Use the logging middleware globally
app.use(requestLogger);

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example route that causes an error
app.get('/error', (req, res) => {
    throw new Error('This is a forced error');
});

// Use the error handler middleware at the end of all routes
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
