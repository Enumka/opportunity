module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Skills', [
      { name: 'HTML', createdAt: new Date(), updatedAt: new Date() },
      { name: 'CSS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'JavaScript', createdAt: new Date(), updatedAt: new Date() },
      { name: 'React', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Redux', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Node.js', createdAt: new Date(), updatedAt: new Date() },
      { name: 'TypeScript', createdAt: new Date(), updatedAt: new Date() },
      { name: 'PostgreSQL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bootstrap', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Express', createdAt: new Date(), updatedAt: new Date() },
      { name: 'PHP', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ruby', createdAt: new Date(), updatedAt: new Date() },
      { name: 'MongoDB', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rust', createdAt: new Date(), updatedAt: new Date() },
      { name: 'LESS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'SASS', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Git', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Figma', createdAt: new Date(), updatedAt: new Date() },

      { name: 'SQL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'C++', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Java', createdAt: new Date(), updatedAt: new Date() },
      { name: 'MVP', createdAt: new Date(), updatedAt: new Date() },
      { name: 'VR', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Webpack', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Parcel', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Angular', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Next.js', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nuxt.js', createdAt: new Date(), updatedAt: new Date() },

      { name: 'C#', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Unity', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ui', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tilda', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kotlin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Moxy', createdAt: new Date(), updatedAt: new Date() },
      { name: 'REST API', createdAt: new Date(), updatedAt: new Date() },
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
