const db = require("../database/config")

function find(){
    return db("instructor")
    .select(  "first_name", "last_name", "email")
  }
  
  function findBy(filter) {
    return db("instructor")
    .select("id", "username", "password")
  }
  
  function findById(id) {
    return db("instructor")
    .select( "first_name", "last_name", "email")
    .where({id})
    .first()
  }

  async function add(data) {
    const [id] = await db("instructor").insert(data)
    return findById(id)
  }

  function findInsClasses(id){
      return db ("classes as c")
      .join("instructor as i", "c.instructo_id", "i.id")
      .select (
          'c.id as classId',"i.id as instructorId",
          'c.name as className','c.description','c.date','c.time',
          'c.intensity'
      )
      .where({ instructor_id: id})
      .first()
  }
  module.exports = {
      find, 
      findBy,
      findById,
      add,
      findInsClasses
  }