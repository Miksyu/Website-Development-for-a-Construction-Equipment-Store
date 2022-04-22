const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'root',
  database: 'technomart'
})

pool.connect( err => {
  if(err)
    throw err;
  console.log('Test connection')
})

module.exports = pool
