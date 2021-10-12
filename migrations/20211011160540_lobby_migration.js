
exports.up = function (knex) {
  return knex.schema.createTable("Lobby", (table) => {
    table.uuid("lid").unique().primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string("description").notNullable();
    table.timestamps(true, true);
    table.uuid('gid').notNullable()
    table.foreign("gid").references('Game.gid');
    table.uuid('uid').notNullable()
    table.foreign("uid").references('User.uid');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Lobby");
};
