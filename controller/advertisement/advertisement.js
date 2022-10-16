// export all the controller method 
const {createAds} = require('./addAdvertisment')
const {deleteAds} = require('./deleteAdvertisment')
const {followAds} = require('./followAdvertisment')
const {getAdvertisement} = require('./loadAdvertisement')
const {updateAds} = require('./updateAdvertisement')
const {unfollowAds}  = require('./unfollowAdvertisement')
//creating the controller object 
const obj = {
    createAds,
    deleteAds,
    followAds,
    getAdvertisement,
    updateAds,
    unfollowAds
}

//freezing the object 
Object.freeze(obj)

//exporting the module 
module.exports = obj 


