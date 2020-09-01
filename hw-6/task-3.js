import * as user from "./users.js";
const users = user.default;
// console.log(users);

const getUsersWithGender = (users, gender) => {
    return users.filter((lm) => lm.gender === gender).map((lm) => lm.name);
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]