const bcrypt = require("bcryptjs");


exports.seed = async function(knex) {
  await knex("client").insert([   
    
    {
      username: "dummy2", 
      password: bcrypt.hashSync("password2", 8),
      first_name: "Jane",
      last_name: "Doe",
      email: "janedoe@gmail.com",
      // type:"client"
    }
	])
};

