import * as user from "./users.js";
const users = user.default;

const getUsersWithEyeColor = (users, color) => {
    return users.filter((lm) => lm.eyeColor === color);
  };
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]



