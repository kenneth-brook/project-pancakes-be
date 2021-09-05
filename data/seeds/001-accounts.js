exports.seed = function(knex, Promise) {
  return knex('accounts').truncate()
    .then(function () {
      return knex('accounts').insert([
        { userName: 'wombat72', password: 'Wizard72', profilePic: 'not suported yet', fName: 'Ken', lName: 'Brook' },
      ]);
    });
};
