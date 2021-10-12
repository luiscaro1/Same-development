exports.up = function (knex) {
  return knex.schema.createTable("Post", (table) => {
    table.uuid("pid").unique().primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string("text");
    table.specificType("attachments", "json ARRAY");
    table.uuid("gid").notNullable();
    table.foreign("gid").references("Game.gid");
    table.uuid("uid").notNullable();
    table.foreign("uid").references("User.uid");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Post");
};
