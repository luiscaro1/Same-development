exports.up = function (knex) {
  return knex.schema.table("User", (table) => {
    table.string("bio");
  });
};

exports.down = function (knex) {
  return knex.schema.table("User", (table) => {
    table.removeColumn("bio");
  });
};
