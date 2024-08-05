const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function list(table: string) {
  return prisma[table].findMany();
}

async function get(table: string, id: string) {
  return prisma[table].findUnique({
    where: { id },
  });
}

async function query(table: string, query: any) {
  return prisma[table].findMany({
    where: query,
  });
}

async function insert(table: string, data: any) {
  return prisma[table].create({
    data,
  });
}

async function update(table: string, id: string, data: any) {
  return prisma[table].update({
    where: { id },
    data,
  });
}

async function remove(table: string, id: string) {
  return prisma[table].delete({
    where: { id },
  });
}

export = {
  list,
  get,
  query,
  insert,
  update,
  remove,
};
