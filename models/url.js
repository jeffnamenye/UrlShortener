/*const bcrypt = require('bcrypt-nodejs');
// my url generator module
exports.Url_Short = (link)=>{
  var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
  var URL_text_length = 7;
  var URL_text = 'hoitytoity.com';

  for(var i = 0; i < URL_text_length; i++){
    URL_text += abc.charAt((Math.random()) * abc.length);

  }
  return URL_text;
};

// generates password hash
exports.generateHash = (payload) => {
  // generates password hash
  const hash = bcrypt.hashSync(payload, bcrypt.genSaltSync(8));
  // returns hashed password
  return hash;
};

// compares hashed password
exports.validateHash = (payload) => {
  // compares pasword returns in BOOLEAN
  const hash = bcrypt.compareSync(payload.password, this.localpassword);
  return hash;
};
