// to create a custom  error handler and set the responce status and message 
class ErrorHandler extends Error{
    constructor(message,status){
        super(message);
        this.status = status
    }
}
module.exports = ErrorHandler