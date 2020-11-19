exports.seed = async function(knex) {
    await knex("instructor").truncate()
	await knex("instructor").insert([
		{ fullname: "jane doe1", username: "janedoe1", password: "abc123" },
		{ fullname: "jane doe2", username: "johndoe2", password: "abc123"},
	])
}