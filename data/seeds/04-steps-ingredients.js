exports.seed = function (knex, Promise) {
  return knex("steps_ingredients").insert([
    { step_id: 1, ingredient_id: 1, quantity_KG: 0.200 },
    { step_id: 2, ingredient_id: 17, quantity_KG: 0.480 },
    { step_id: 2, ingredient_id: 2, quantity_KG: 0.480 },
    { step_id: 3, ingredient_id: 3, quantity_KG: 0.150 },
    { step_id: 3, ingredient_id: 4, quantity_KG: 0.050 },
    { step_id: 7, ingredient_id: 3, quantity_KG: 0.150 },
    { step_id: 8, ingredient_id: 6, quantity_KG: 0.075 },
    { step_id: 8, ingredient_id: 7, quantity_KG: 0.052 },
    { step_id: 10, ingredient_id: 8, quantity_KG: 1.000 },
    { step_id: 12, ingredient_id: 3, quantity_KG: 0.150},
    { step_id: 12, ingredient_id: 9, quantity_KG: 0.002 },
    { step_id: 14, ingredient_id: 11, quantity_KG: 0.100 },
    { step_id: 14, ingredient_id: 12, quantity_KG: 0.125 },
    { step_id: 14, ingredient_id: 13, quantity_KG: 0.680 },
    { step_id: 14, ingredient_id: 3, quantity_KG: 0.150 },
    { step_id: 14, ingredient_id: 10, quantity_KG: 0.002 },
    { step_id: 14, ingredient_id: 9, quantity_KG: 0.001 },
    { step_id: 14, ingredient_id: 14, quantity_KG: 0.002 },
    { step_id: 14, ingredient_id: 15, quantity_KG: 0.005 },
    { step_id: 15, ingredient_id: 16, quantity_KG: 0.030 },
  ]);
};
