exports.seed = async function(knex) {
    await knex("instructor").truncate()
	await knex("instructor").insert([
		{ id: 1,fullname: "jane doe1", username: "janedoe1", password: "abc123" },
		{ id: 2,fullname: "jane doe2", username: "johndoe2", password: "abc123"},
	])
}