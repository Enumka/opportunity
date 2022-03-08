module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      { name: 'технологии', createdAt: new Date(), updatedAt: new Date() },
      { name: 'знаменитости', createdAt: new Date(), updatedAt: new Date() },
      { name: 'стиль', createdAt: new Date(), updatedAt: new Date() },
      { name: 'финансы', createdAt: new Date(), updatedAt: new Date() },
      { name: 'спорт', createdAt: new Date(), updatedAt: new Date() },
      { name: 'культура', createdAt: new Date(), updatedAt: new Date() },
      { name: 'наука', createdAt: new Date(), updatedAt: new Date() },
      { name: 'путешествия', createdAt: new Date(), updatedAt: new Date() },
      { name: 'кино', createdAt: new Date(), updatedAt: new Date() },
      { name: 'авто', createdAt: new Date(), updatedAt: new Date() },
      { name: 'политика', createdAt: new Date(), updatedAt: new Date() },
      { name: 'еда', createdAt: new Date(), updatedAt: new Date() },
      { name: 'юмор', createdAt: new Date(), updatedAt: new Date() },
      { name: 'компьютерные игры', createdAt: new Date(), updatedAt: new Date() },
      { name: 'музыка', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ремонт', createdAt: new Date(), updatedAt: new Date() },
      { name: 'история', createdAt: new Date(), updatedAt: new Date() },
      { name: 'рецепты', createdAt: new Date(), updatedAt: new Date() },
      { name: 'девушки', createdAt: new Date(), updatedAt: new Date() },
      { name: 'интересные факты', createdAt: new Date(), updatedAt: new Date() },
      { name: 'саморазвитие', createdAt: new Date(), updatedAt: new Date() },
      { name: 'животные', createdAt: new Date(), updatedAt: new Date() },
      { name: 'красота', createdAt: new Date(), updatedAt: new Date() },
      { name: 'дети', createdAt: new Date(), updatedAt: new Date() },
      { name: 'космос', createdAt: new Date(), updatedAt: new Date() },
      { name: 'фантастика', createdAt: new Date(), updatedAt: new Date() },
      { name: 'искусство', createdAt: new Date(), updatedAt: new Date() },
      { name: 'кошки', createdAt: new Date(), updatedAt: new Date() },
      { name: 'макияж', createdAt: new Date(), updatedAt: new Date() },
      { name: 'книги', createdAt: new Date(), updatedAt: new Date() },
      { name: 'android', createdAt: new Date(), updatedAt: new Date() },
      { name: 'полезные', createdAt: new Date(), updatedAt: new Date() },
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
