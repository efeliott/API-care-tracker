require("dotenv").config();

module.exports = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "care_tracker",
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
  define: { timestamps: true },
};