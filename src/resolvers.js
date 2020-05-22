const users = [
    { id: 1, name: 'Lucas', email: 'lucas@mail.com'},
    { id: 2, name: 'Mendes', email: 'mendes@mail.com'}
];

module.exports = {
    Query: {
        users: () => users,
        user: (id) => console.log(id.toString())
    },

    Mutation: {
        createUser: () => {},
    }
}