const db = require("../connection");

module.exports.getFieldDetails = () => {
  return new Promise((resolve, reject) => {
      db.query("SELECT * FROM field",function(err, result, fields){
          if(err){
              reject(err);
          }else{
              resolve(result);
          }
      })
  });
};
