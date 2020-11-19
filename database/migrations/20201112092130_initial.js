
exports.up = async function(knex) {
    await knex.schema.createTable("client", (table) => {
        table.increments("id")

        table.string("username").notNull().unique().comment('This is the username field')
        table.string("password").notNull().comment('This is the password field')
        table.string("first_name").notNull().comment('This is the first_name field')
        table.string("last_name").notNull().comment('This is the last_name field')
        table.string("email").notNull().unique().comment('This is the email field')

        table.string("type").notNull().comment('This is the comment field')})


      await knex.schema.createTable("instructor", (table) => {
        table.increments("id")
        table.text("username").notNull().unique()
        table.text("first_name").notNull()
        table.text("last_name").notNull()
        table.text("email").notNull().unique()
        table.text("password").notNull()
        table.text("type").notNull()
    })
    
    await knex.schema.createTable("categories", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description").notNull()

    })
      await knex.schema.createTable("classes", (table)=> {
        table.increments("id") 
        table
            .integer("instructor_id").unsigned()
            .references("id")
			.inTable("instructor")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
        table
            .integer("categories_id").unsigned()
            .references("id")
			.inTable("categories")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
    
        table
            .text("name")
            .notNull()
            .unique();

        table.text("description")
             .notNull()
             .defaultTo("current")

      table.time("time")
           .defaultTo("current")

     table.text("intensity")
          .notNull()

     table.date("date")
          .defaultTo(knex.raw("current_timestamp"))                
      })


     //table for signup for classes
    }
    

exports.down =async function(knex) {
    await knex.schema.dropTableIfExists("classes")
    await knex.schema.dropTableIfExists("categories")
    await knex.schema.dropTableIfExists("instructor")
    await knex.schema.dropTableIfExists("client")
   
    
};
