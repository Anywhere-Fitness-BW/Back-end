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
			
		  },
		{
			username: "dummy4", 
			password: bcrypt.hashSync("password1", 8),
			first_name: "John",
			last_name: "Doe",
			email: "johndoe2@gmail.com",
			
		  },
		{
			username: "dummy3", 
			password: bcrypt.hashSync("password1", 8),
			first_name: "John",
			last_name: "Doe",
			email: "johndoe3@gmail.com",
			
		  },
		// { fist_name: "jane doe1", username: "janedoe1", password: "abc123" },
		// { fullname: "jane doe2", username: "johndoe2", password: "abc123"},
	])
}