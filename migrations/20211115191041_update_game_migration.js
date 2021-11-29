exports.up = function (knex) {
  return knex.schema.table("Game", (table) => {
    table.string("banner_url");
  });
};

exports.down = function (knex) {
  return knex.schema.table("Game", (table) => {
    table.dropColumn("banner_url");
  });
};
