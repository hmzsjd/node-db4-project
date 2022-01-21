
exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
      { ingredient_name: "Uncooked Rice" },
      { ingredient_name: "Chicken Stock" },
      { ingredient_name: "Onion" },
      { ingredient_name: "Garlic" },
      { ingredient_name: "Lime" },
      { ingredient_name: "Butter" },
      { ingredient_name: "Flour" },
      { ingredient_name: "Bouillon" },
      { ingredient_name: "Black Pepper" },
      { ingredient_name: "Salt" },
      { ingredient_name: "Bread Crumbs" },
      { ingredient_name: "Milk" },
      { ingredient_name: "Ground Beef" },
      { ingredient_name: "Cayenne Pepper" },
      { ingredient_name: "Worcestershire Sauce" },
      { ingredient_name: "Oil" },
      { ingredient_name: "Water" }

    ]);
  };
  