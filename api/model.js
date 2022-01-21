const e = require("express");
const db = require("../data/db-config");

async function getRecipeById() { 

    const rows = await db('schemes as sc')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .groupBy('sc.scheme_id')
    .select('sc.*')
    .count('st.step_id as number_of_steps')
    return rows

    
}



module.exports = {
  getRecipeById
}
