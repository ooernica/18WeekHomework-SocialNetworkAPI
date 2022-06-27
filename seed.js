const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
    Idea,
    User,
} = require('./models');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await Idea.deleteMany({});
    await User.deleteMany({});

    const usersToCreate = [
        {
            handle: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            handle: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            handle: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            handle: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            handle: faker.internet.userName(),
            email: faker.internet.email(),
        },
    ];
    console.log(usersToCreate)
    const users = await User.insertMany(usersToCreate);

    
    const ideasToCreate = [
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
        {
            ideaText: faker.lorem.sentence(),
            postedAt: faker.date.past(),
            handle: users[Math.floor(Math.random() * users.length)].handle,
        },
    ];
    console.log(ideasToCreate)
    const ideas = await Idea.insertMany(ideasToCreate);
    console.log('Database Successfully Seeded');

    process.exit(0);
};

seedDb();