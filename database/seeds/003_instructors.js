const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
    await knex("instructor").truncate()
	await knex("instructor").insert([
		{
			username: "dummy1", 
			password: bcrypt.hashSync("password1", 8),
			first_name: "John",
			last_name: "Doe",
			email: "johndoe1@gmail.com",
			type:"instructor"
		  },
		{
			username: "dummy4", 
			password: bcrypt.hashSync("password1", 8),
			first_name: "John",
			last_name: "Doe",
			email: "johndoe2@gmail.com",
			type:"instructor"
		  },
		{
			username: "dummy3", 
			password: bcrypt.hashSync("password1", 8),
			first_name: "John",
			last_name: "Doe",
			email: "johndoe3@gmail.com",
			type:"instructor"
		  },
		
	])
}