import * as user from "./users.js";
const users = user.default;
// console.log(users);

const getUsersWithFriend = (users, friendName) => {
    return users.filter((lm) => lm.friends.includes(friendName)).map((lm) => lm.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]