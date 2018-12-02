const db = require("../connection");

module.exports.getFoodDetails = () => {
  return new Promise((resolve, reject) => {
      db.query("SELECT * FROM food",function(err, result, fields){
          if(err){
              reject(err);
          }else{
              resolve(result);
          }
      })
  });
};
