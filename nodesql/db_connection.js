let mysql = require('mysql');

let con = mysql.createConnection({
  host: 'localhost',
  user: 'tzuang_admin',
  password: 'tidecrestbike88',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});
