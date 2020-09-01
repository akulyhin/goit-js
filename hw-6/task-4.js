import * as user from "./users.js";
const users = user.default;
// console.log(users);

const getInactiveUsers = users => {
    return users.filter((lm) => lm.isActive === false);
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]