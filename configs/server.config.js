const prod = process.env.NODE_ENV;
console.log(prod);
if (prod != "production") {
    require("dotenv").config();
}


module.exports = {
  PORT: process.env.PORT,
};
