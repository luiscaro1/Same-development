exports.up = function(knex) {
    return knex.schema.createTable("Block", (table) => {
        table.uuid("bid").primary().unique();
        table.uuid("uid").references("uid").inTable("User");
        table.uuid("uid2").references("uid").inTable("User");
        table.boolean("is_blocked");
       
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Block");
};