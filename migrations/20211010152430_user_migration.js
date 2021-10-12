

exports.up = function (knex) {
  return knex.schema.createTable("User", (table) => {
    table.uuid("uid").unique().primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("user_name").unique().notNullable();
    table.boolean("is_active").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("User");
};
