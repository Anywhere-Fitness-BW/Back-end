exports.seed = async function(knex) {
    return knex ("classes").del()
    .then(function () {
        return knex("classes").insert([
            {instructor_id:1, name:"yoga",description:"group workout", intensity:"light"},
            {instructor_id:1, name:"zumba",description:"group dance", intensity:"medium" },
            {instructor_id:1, name:"hip hop dance",description:"dance workout", intensity:"medium"},
            {instructor_id:1, name:"beginers yoga",description:"group workout", intensity:"very light"}
        ])
    })
}