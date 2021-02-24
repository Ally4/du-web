module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        username: 'allyn',
        email: 'bomayee@bomayee.com',
        password: '$2b$12$zpMa04vkO8noNGE810K.E.6GJwlnKS13NUsw3YX.9OKfMpZXbF.yi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
