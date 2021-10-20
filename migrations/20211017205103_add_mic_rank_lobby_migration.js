exports.up = function (knex) {
  return knex.schema.table("Lobby", (table) => {
    table.bool("mic").notNullable().defaultTo(false);
    table.string("rank");
  });
};

exports.down = function (knex) {
  return knex.schema.table("Lobby", (table) => {
    table.dropColumn("mic");
    table.dropColumn("rank");
  });
};
