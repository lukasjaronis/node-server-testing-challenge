 
exports.up = function(knex) {
    return knex.schema.createTable("companies", tbl => {
      tbl.increments();
      tbl.string("companyName", 128).notNullable();
      tbl.string("founder", 128).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("companies");
  };