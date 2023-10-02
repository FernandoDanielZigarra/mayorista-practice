function requestLogger(req, res, next) {
    console.log(`[${new Date().toString()}] ${req.method} ${req.url}`);
    next();
  }
  
  module.exports = requestLogger;
  