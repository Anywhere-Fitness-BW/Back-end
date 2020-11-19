
exports.seed = async function(knex) {
    return knex ("classes").del()
    .then(function () {
        return knex("classes").insert([
            {instructor_id:1,categories_id:1, name:"yoga",description:"a group activity", intensity:"light"},
            {instructor_id:1, categories_id:1,  name:"zumba",description:"a group activity", intensity:"medium" },
            {instructor_id:1,categories_id:1, name:"hip hop dance",description:"a group activity", intensity:"medium"},
            { instructor_id:1, categories_id:1,name:"beginers yoga",description:"a group activity", intensity:"very light"}
        ])
    })
}