import { users_f } from "./users_array.js";

export let users_final = users_f;
let counter = 1;
users_final.forEach(element => {
    element['user_id'] = counter;
    counter = counter + 1;
});

console.log(users_final.length);

db.users.insertMany(users_final);