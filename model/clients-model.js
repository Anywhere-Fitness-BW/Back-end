const db=require("../database/config")

function find(){
    return db("client")
    .select(  "first_name", "last_name", "email")
  }
  
  function findBy(filter) {
    return db("client").where(filter)
  }

  function findIC(){
    return db("classes")
    .select("id","date","description","time","intensity","date")
  }
  
  function findById(id) {
    return db("client")
    .select( "first_name", "last_name", "email")
    .where({id})
    .first()
  }
  
  async function insert(user) {
    return await db("client")
    .insert(user)
    .returning(["id", "username"])
  }
  
  function remove(id) {
    return db("client")
    .where({id})
    .del()
  }
  
  function update(changes, id) {
    return db("client")
    .where({id})
    .update(changes)
  }
  
  module.exports = {
    find, 
    findIC,
    findBy, 
    findById, 
    insert, 
    remove, 
    update
  }