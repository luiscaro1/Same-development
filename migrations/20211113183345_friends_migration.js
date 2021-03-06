exports.up = function(knex) {
    return knex.schema.createTable("Friends", (table) => {
        table.uuid("fid").primary().unique().defaultTo(knex.raw('gen_random_uuid()')).notNullable();
        table.uuid("uid").references("uid").inTable("User");
        table.uuid("uid2").references("uid").inTable("User");
        table.boolean("is_friend");
       
      });
    };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Friends");
};