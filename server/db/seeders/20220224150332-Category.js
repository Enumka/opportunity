module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Здравоохранение', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Образование', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Наука', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Энергетическая промышленность', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Искусственный интеллект', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Робототехника', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ИТ-инфраструктура', createdAt: new Date(), updatedAt: new Date() },
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
