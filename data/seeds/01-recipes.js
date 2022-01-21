exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Rice'},
      { recipe_name: 'Brown Sauce'},
      { recipe_name: 'Hamburger Patties'}
      
    ]);
  };
  