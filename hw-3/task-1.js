'use strict';

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  const spreadUser = {
      ...user,
     mood: 'happy',
      hobby: 'skydiving',
       premium: false
    };

  console.log(spreadUser);

  const entries = Object.entries(spreadUser);

  for (let el of entries) {
      console.log(el);
  }
  