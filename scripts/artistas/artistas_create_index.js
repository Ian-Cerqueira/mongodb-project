import { artistas_f } from "./artistas_array.js";

export let artistas_final = artistas_f;
let counter = 1;
artistas_final.forEach(element => {
    element['artista_id'] = counter;
    counter = counter + 1;
});

console.log(artistas_final.length);

//db.artistas.insertMany(artistas_final);
