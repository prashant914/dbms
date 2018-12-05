const db = require("../connection");

module.exports.deleteWorker = (worker_id) => {
  return new Promise((resolve, reject) => {
      db.query("DELETE  FROM workers where worker_id=" + worker_id,function(err, result, fields){
          if(err){
              reject(err);
          }else{
              resolve(result);
          }
      })
  });
};
