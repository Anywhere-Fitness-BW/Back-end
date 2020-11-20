const bcrypt = require("bcryptjs");


exports.seed = async function(knex) {
  await knex("client").insert([   
    
    {
      username: "dummy2", 
      password: bcrypt.hashSync("password2", 8),
      first_name: "Jane",
      last_name: "Doe",
      email: "janedoe@gmail.com",
      type:"client"
    },
    {
			username: "issac", 
			password: bcrypt.hashSync("password", 8),
			first_name: "John",
			last_name: "Doe",
			email: "johndoe1@gmail.com",
			type:"instructor"
		  },
		{
			username: "furnowest", 
			password: bcrypt.hashSync("password", 8),
			first_name: "Furno",
			last_name: "West",
			email: "furno2@gmail.com",
			type:"instructor"
		  },
		{
			username: "mirwes", 
			password: bcrypt.hashSync("password", 8),
			first_name: "Mirwes",
			last_name: "Doe",
			email: "mirwes3@gmail.com",
			type:"instructor"
		  },
	])
};

