exports.up = function (knex) {
  return knex.schema.table("User", (table) => {
    table
      .string("avatar_url")
      .defaultTo("ece5be008fe8db1646bdf6dc065bd78f.png");
  });
};

exports.down = function (knex) {
  return knex.schema.table("User", (table) => {
    table.dropColumn("avatar_url");
  });
};
