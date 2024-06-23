import mysql from "mysql2/promise";

const dbConnection = async () => {
  const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
    process.env;

  try {
    const connection = await mysql.createConnection({
      host: DATABASE_HOST,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
    });

    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
