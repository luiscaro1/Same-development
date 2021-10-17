exports.up = function (knex) {
  return knex.schema.table("Lobby", (table) => {
    table.string("region").notNullable().defaultTo("Any");
  });
};

exports.down = function (knex) {
  return knex.schema.table("Lobby", (table) => {
    table.dropColumn("region");
  });
};
