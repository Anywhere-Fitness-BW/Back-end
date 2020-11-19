
exports.seed = async function(knex) {
  // await knex("client").truncate() 
  await knex("instructor").truncate() 
  await knex("classes").truncate() 
};
