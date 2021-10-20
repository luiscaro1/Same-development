exports.up = function (knex) {
  return knex.schema.table("UserLobby", (table) => {
    table.unique(["uid", "gid", "lid"], { indexName: "ulid" });
  });
};

exports.down = function (knex) {
  return knex.schema.table("UserLobby", (table) => {
    table.dropColumn("ulid");
  });
};
