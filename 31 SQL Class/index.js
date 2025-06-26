import { faker } from '@faker-js/faker';

let getRandomUser=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
console.log(getRandomUser());