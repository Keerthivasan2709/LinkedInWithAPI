const {listdata} = require('./list')
const {pageDetails} = require('./pages')
const object = {
  
    listdata,
    pageDetails

}

//freezing the object for security 
Object.freeze(object)

module.exports = object 


