module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      { name: 'Администратор', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Инвестор', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Исполнитель', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
