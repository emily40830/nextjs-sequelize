'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let now = new Date();
    return queryInterface.bulkInsert('Jobs', [
      {
        title: 'Job Post Title One',
        slug: 'job-post-title-one',
        userId: 1,
        content: 'Text content job post one',
        emailTo: 'email1@email.com',
        reportManager: 'HR Manager',
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jobs', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
