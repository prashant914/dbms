const db = require("../connection");

module.exports.deleteAnimal = (animal_id) => {
  return new Promise((resolve, reject) => {
      db.query("DELETE  FROM animal where animal_id=" + animal_id,function(err, result, fields){
          if(err){
              reject(err);
          }else{
              resolve(result);
          }
      })
  });
};
