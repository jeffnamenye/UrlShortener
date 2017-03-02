//this sets up to link my url generator model
const est = require('../models/url');

//express as a parameter of express
module.exports = (express) =>{

  const router = express.Router();

  //post method
  router.post('url', (req, res) =>{
    //responds with links
    res.json(est.URL_Short(req.body.link));
  };
  //Returns data
  return router;

  };
