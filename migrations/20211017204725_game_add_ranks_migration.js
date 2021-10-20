exports.up = function (knex) {
  return knex.schema.table("Game", (table) => {
    table.specificType("ranks", "text ARRAY");
  });
};

exports.down = function (knex) {
  return knex.schema.table("Game", (table) => {
    table.dropColumn("ranks");
  });
};
