
exports.up = function (knex) {
  return knex.schema.createTable("Game", (table) => {

    table.uuid("gid").unique().primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string("name").unique().notNullable();
    table.specificType("platforms", "text ARRAY").notNullable();
    table.timestamps(true, true);
 
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Game");
};
