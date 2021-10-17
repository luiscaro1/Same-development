exports.up = function (knex) {
  return knex.schema.table("Lobby", (table) => {
    table.string("platform").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table("Lobby", (table) => {
    table.dropColumn("platform");
  });
};
