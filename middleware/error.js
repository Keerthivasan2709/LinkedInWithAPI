// constom  error responce for errors 
const ErrorResponse = require("../utils/errorhandler")
const errorHandler = (err, req, res, next) => {
    let error = err
    if (err.code === 'P2002') {
      const message = `${err.meta.target} is already exist `;
      error = new ErrorResponse(message, 404);
    }
    
    
  
    res.status(error.statusCode || 500).json({
      status: false,
      error: error.message || 'Server Error'
    });
  };
  
  module.exports = errorHandler;
 