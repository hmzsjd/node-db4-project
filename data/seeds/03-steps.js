
exports.seed = function(knex, Promise) {
    return knex('steps').insert([

      { step_instructions: "Add 1 cup of rice to a pot that has a cover.", 
      step_number: 1, recipe_id: 1},
      { step_instructions: "Add twice as many cups liquid to the same pot. Water is typical, but for extra flavor, use stock or broth.", 
      step_number: 2, recipe_id: 1},
      { step_instructions: "If desired, dice onion or garlic and mix into rice.", 
      step_number: 3, recipe_id: 1},
      { step_instructions: "Cover the pot, put it on the stove and turn the heat on the highest level.", 
      step_number: 4, recipe_id: 1},
      { step_instructions: "As soon as you hear the water beginning to bubble and boil over, turn the heat down to low and allow it to simmer.", 
      step_number: 5, recipe_id: 1},
      { step_instructions: "Wait for twenty minutes or so until the liquid has evaporated and the rice will be ready.", 
      step_number: 6, recipe_id: 1},
      { step_instructions: "Chop and sauté the onions and put the aside for a while", 
      step_number: 1, recipe_id: 2},
      { step_instructions: "Melt the butter on a pan and add the flour to it", 
      step_number: 2, recipe_id: 2},
      { step_instructions: "Brown the flour on medium heat until the mixture is dark brown", 
      step_number: 3, recipe_id: 2},
      { step_instructions: "Add the bouillon in small batches while stirring with a whisker", 
      step_number: 4, recipe_id: 2},
      { step_instructions: "Let the sauce boil and thicken for few minutes", 
      step_number: 5, recipe_id: 2},
      { step_instructions: "Add the onions and ground some pepper in the sauce", 
      step_number: 6, recipe_id: 2},
      { step_instructions: "(Optional) Add preferred meat to the sauce or use as is", 
      step_number: 7, recipe_id: 2},
      { step_instructions: "Combine all ingredients except fat: mix well; shape into 6 patties.", 
      step_number: 1, recipe_id: 3},
      { step_instructions: "Heat fat in skillet.", 
      step_number: 2, recipe_id: 3},
      { step_instructions: "Brown patties on all sides; lower heat; cook to desired degree of doneness.", 
      step_number: 3, recipe_id: 3},
    
    ]);
  };
  