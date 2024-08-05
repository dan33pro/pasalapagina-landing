const { Kysely, MysqlDialect } = require("kysely");
const { createPool } = require("mysql2");

const db = new Kysely({
  dialect: new MysqlDialect({
    pool: createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    }),
  }),
});

async function list(table: string) {
  return db.selectFrom(table).selectAll().execute();
}

async function get(table: string, id: string) {
  return db
    .selectFrom(table)
    .selectAll()
    .where("id", "=", id)
    .executeTakeFirst();
}

async function query(table: string, query: any) {
  const key = Object.keys(query)[0];
  const value = query[key];
  return db.selectFrom(table).selectAll().where(key, "=", value).execute();
}

async function insert(table: string, data: any) {
  return db.insertInto(table).values(data).execute();
}

async function update(table: string, id: string, data: any) {
  return db.updateTable(table).set(data).where("id", "=", id).execute();
}

async function remove(table: string, id: string) {
  return db.deleteFrom(table).where("id", "=", id).execute();
}

export = {
  list,
  get,
  query,
  insert,
  update,
  remove,
};
