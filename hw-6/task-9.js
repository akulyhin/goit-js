import * as user from "./users.js";
const users = user.default;
// console.log(users);

const getNamesSortedByFriendsCount = users => {
    return users.sort((a,b) => a.friends.length - b.friends.length).map((lm) => lm.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]