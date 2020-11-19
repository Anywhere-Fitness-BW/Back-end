
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.string("username").notNull().unique().comment('This is the username field')
        table.string("password").notNull().comment('This is the password field')
        table.string("first_name").notNull().comment('This is the first_name field')
        table.string("last_name").notNull().comment('This is the last_name field')
        table.string("email").notNull().unique().comment('This is the email field')
        table.string("type").notNull().comment('This is the comment field')
      })
      await knex.schema.createTable("instructor", (table) => {
		table.increments("id")
        table.text("fullname").notNull()
        table.text("username").notNull().unique()
        table.text("password").notNull()
	})

     
      await knex.schema.createTable("classes", (table)=> {
        table.increments("id") 
        table
            .integer("instructor_id").notNull()
			.references("id")
			.inTable("instructor")
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
    await knex.schema.dropTableIfExists("users")
    await knex.schema.dropTableIfExists("instructor")
    await knex.schema.dropTableIfExists("classes")
    
};
