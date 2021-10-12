exports.up = function (knex) {
  return knex.schema.table("User", (table) => {
    table.string('avatar_url')
  });
};

exports.down = function (knex) {
  return knex.schema.table("User", (table) => {
    table.dropColumn("avatar_url");
  });
};
