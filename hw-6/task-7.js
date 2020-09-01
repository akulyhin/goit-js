import * as user from "./users.js";
const users = user.default;
// console.log(users);

const calculateTotalBalance = users => {
   return users.reduce((total, lm) => total + lm.balance, 0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916