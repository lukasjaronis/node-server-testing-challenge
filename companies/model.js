const db = require('../data/db-Config.js');

module.exports = {
    insert,
    getAll,
    remove
};

function insert({ companyName, founder}) {
    return db('companies')
    .insert({ companyName, founder, })
}

function getAll() {
    return db('companies')
}

function remove(id) {
    return db('companies')
    .where({id})
    .del();
}