const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(actor) {
  const [id] = await db('actors').insert(actor);
  return findById(id);
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('actors');
}

function findById(id) {
  return db('actors').where({ id }).first();
}
