// middleware to handle async functions
const asynchandler = fn => (req,res,next)=>
    Promise.resolve(fn(req,res,next)).catch(next);

// exporting the asynchandler
module.exports = asynchandler