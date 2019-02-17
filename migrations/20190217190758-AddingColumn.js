

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Books', 'liked', {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  }),
  /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Books', 'liked'),
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
};
