const db = require('../connection');

module.exports.animal = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM animal", function(err, result, fields) {
            if (err) {
                reject(err);
            }
            resolve(result);
          });
    });
}