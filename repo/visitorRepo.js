const db = require("../connection");

module.exports.getVisitorDetails = () => {
  return new Promise((resolve, reject) => {
      db.query("SELECT * FROM visitors",function(err, result, fields){
          if(err){
              reject(err);
          }else{
              resolve(result);
          }
      })
  });
};
