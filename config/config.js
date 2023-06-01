require('dotenv').config()

module.exports = {
  'development': {
    'username': process.env.MYSQL_USER,
    'password': process.env.MYSQL_PASSWORD,
    'database': process.env.MYSQL_DB,
    'host': process.env.MYSQL_HOST,
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': process.env.PROD_MYSQL_USER,
    'password': process.env.PROD_MYSQL_PASSWORD,
    'database': process.env.PROD_MYSQL_DB,
    'host': process.env.PROD_MYSQL_HOST,
    'dialect': 'mysql'
  }
}