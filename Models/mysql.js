const mysql  = require('mysql');
let config   = require('../config');

const mysqlConfig = {
  host                  : config.mysql.hostname,
  user                  : config.mysql.username,
  password              : config.mysql.password,
  timezone              : 'utc', 
  multipleStatements    : true, 
  waitForConnections    : true,
  connectionLimit       : 50,
  maxIdle               : 50,
  queueLimit            : 0,
  enableKeepAlive       : true,
  keepAliveInitialDelay : 0,
  connectTimeout        : 8*1000 
};

const mysqlConn = mysql.createPool(mysqlConfig);
mysqlConn.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Database connected...');
  connection.release();
});
mysqlConn.on('error', (err) => {
  console.error('MySQL connection pool error:', err);
});

module.exports = {
  mysqlConn: mysqlConn
};
