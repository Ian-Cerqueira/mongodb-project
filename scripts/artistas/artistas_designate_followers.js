import { artistas_final } from "./artistas_create_index.js";
import { artistas_followers } from "./artistas_followers_array.js";

let artistas_designated = artistas_final;
let counter = 0;

artistas_designated.forEach(element => {
    element['seguidores'] = artistas_followers[counter];
    counter = counter + 1;
});

console.log(JSON.stringify(artistas_designated));
