// routes for advertisment module
const routes  = require('express').Router()

//importing the controller object 
const advertisement =  require('../controller/advertisement/advertisement')
const { protect } = require('../middleware/auth')

//mounting the routes 
routes.route('/follow').post(protect,advertisement.followAds)
routes.route('/unfollow').post(protect,advertisement.unfollowAds)
routes.route('/:id').delete(protect,advertisement.deleteAds)
                    .get(protect,advertisement.getAdvertisement);
routes.route('/').post(protect,advertisement.createAds)
                 .patch(protect,advertisement.updateAds);

// exporting the route object 

module.exports = routes



