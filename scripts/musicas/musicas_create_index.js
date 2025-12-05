import { musicasf } from "./musicas_array.js";

export let musicas_final = musicasf;
let counter = 1;
musicas_final.forEach(element => {
    element['musica_id'] = counter;
    counter = counter + 1;
});

//db.musicas.insertMany(musicas_final);

console.log(JSON.stringify(musicas_final));