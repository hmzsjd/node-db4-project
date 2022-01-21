/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.text("recipe_name", 128).notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.text("ingredient_name", 256).notNullable().unique();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.string("step_instructions").notNullable();
      table.integer("step_number").notNullable().unsigned();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("steps_ingredients", (table) => {
      table.increments("steps_ingredients_id");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); 
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); 
      table.float("quantity_KG").unsigned().notNullable()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = async function (knex) {
    await knex.schema
      .dropTableIfExists("steps_ingredients")
      .dropTableIfExists("steps")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes")
  };
  