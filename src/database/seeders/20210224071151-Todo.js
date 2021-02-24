module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Todos',
    [
      {
        id: 1,
        title: 'Nyasha na baba',
        description: 'kera habaye nyasha na baba, nyasha na baba barakundanaga cyane kbs',
        priority: 'high',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Todos', null, {}),
};