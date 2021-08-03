/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */
//  npm install connect-mongo@1.1.0 --save --save-exact
module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: 'c734c92f732bb8b3e494d65fcb356b58',
  
  adapter: 'connect-mongo',
  url: 'mongodb://meatShop101:HOizM2cLWMVRSEf4@meatshopcluster-shard-00-00.uib29.mongodb.net:27017,meatshopcluster-shard-00-01.uib29.mongodb.net:27017,meatshopcluster-shard-00-02.uib29.mongodb.net:27017/meatShopDB?ssl=true&replicaSet=atlas-uevrl7-shard-0&authSource=admin&retryWrites=true&w=majority',
  // url: 'mongodb+srv://meatShop101:HOizM2cLWMVRSEf4@meatshopcluster.uib29.mongodb.net/meatShopDB?retryWrites=true&w=majoritymongodb://meatShop101:<password>@meatshopcluster-shard-00-00.uib29.mongodb.net:27017,meatshopcluster-shard-00-01.uib29.mongodb.net:27017,meatshopcluster-shard-00-02.uib29.mongodb.net:27017/meatShopDB?ssl=true&replicaSet=atlas-uevrl7-shard-0&authSource=admin&retryWrites=true&w=majority',
  collection: 'sessions',
  
  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
