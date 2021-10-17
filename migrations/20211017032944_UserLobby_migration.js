exports.up = function (knex) {
  return knex.schema.createTable("UserLobby", (table) => {
    table.uuid("gid").notNullable();
    table.foreign("gid").references("Game.gid");
    table.uuid("uid").notNullable();
    table.foreign("uid").references("User.uid");
    table.uuid("lid").notNullable();
    table.foreign("lid").references("Lobby.lid");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("UserLobby");
};
