require('dotenv').config();
console.log(process.env.DB_USERNAME, process.env.DATABASE);
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'instadev',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
