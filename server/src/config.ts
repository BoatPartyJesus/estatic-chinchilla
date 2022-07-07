const config = {
  database: {
    host: process.env["DATABASE_HOST"],
    port: process.env["DATABASE_PORT"] ? parseInt(process.env["DATABASE_PORT"]) : 5432,
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"]
  }
}

export default config;