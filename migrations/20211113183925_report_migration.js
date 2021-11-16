exports.up = function(knex) {
    return knex.schema.createTable("Report", (table) => {
        table.uuid("rid").primary().unique().defaultTo(knex.raw('gen_random_uuid()'));
        table.uuid("uid").references("uid").inTable("User");
        table.uuid("uid2").references("uid").inTable("User");
        table.boolean("stalking");
        table.boolean("spamming");
        table.boolean("offensive");
        table.boolean("harrasment");
        table.boolean("discrimination");
        table.boolean("viruses");
        table.boolean("violationofIp");
        table.boolean("pretending");
      });
    };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Report");
};