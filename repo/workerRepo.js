const db = require("../connection");

module.exports.getWorkerDetails = () => {
  return new Promise((resolve, reject) => {
      db.query("SELECT * FROM workers",function(err, result, fields){
          if(err){
              reject(err);
          }else{
              resolve(result);
          }
      })
  });
};
