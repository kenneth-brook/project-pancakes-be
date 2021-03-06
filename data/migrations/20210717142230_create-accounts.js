exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema.createTable('accounts', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.text('userName', 128).unique().notNullable();
      tbl.text('password', 128).notNullable();
      tbl.text('profilePic', 128);
      tbl.text('fName', 128);
      tbl.text('lName', 128);
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('accounts');
  };
