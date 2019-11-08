var sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./places.sqlite', (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
    }
});

module.exports = db