const faker = require('faker');

const database = {
  person: []
};

for (let i = 1; i <= 10; i++) {
  database.person.push({
    id: i,
    name: faker.name.findName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    
  });
}

console.log(JSON.stringify(database));