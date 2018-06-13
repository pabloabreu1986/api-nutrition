const httpStatus = require('http-status');

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const handler = (err, req, res, next) => {
    const response = {
        code: err.status || 500,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
        stack: err.stack,
    };
    
    if (process.env.NODE_ENV !== 'development') {
        delete response.stack;
    }

    res.status(err.status || 500);
    res.json(response);
    res.end();
};

exports.handler = handler;