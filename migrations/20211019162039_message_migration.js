exports.up = function (knex) {
  return knex.schema.createTable("Message", (table) => {
    table
      .uuid("mid")
      .unique()
      .primary()
      .defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("lid").references("lid").inTable("Lobby");
    table.uuid("uid").references("uid").inTable("User");
    table.string("content").notNullable();
    table.string("type").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Message");
};
