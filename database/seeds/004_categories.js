exports.seed = async function(knex) {
    await knex ("categories").truncate()
	await knex("categories").insert([
		{ name: "yoga", description:"a group activity"},
		{ name: "dance",description:"a group activity" },
	])
}