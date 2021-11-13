

exports.up = function(knex) {
    return knex.schema.createTable("Feedback", (table) => {
        table.uuid("fid").primary().unique();
        table.string("email").references("email").inTable("User");
        table.string("websitedesign");
        table.integer("ratedesign").notNullable();
        table.string("websitefunctionality");
        table.integer("ratefunctionality").notNullable();
        table.string("gameavailable");
        table.integer("rategames").notNullable();
        table.string("generalinformation");
        table.integer("rateoverall").notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("Feedback");
};

