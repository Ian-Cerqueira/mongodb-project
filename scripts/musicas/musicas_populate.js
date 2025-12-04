import { musicasf } from "./musicas_array.js";

let musicas_final = musicasf;
let counter = 1;
musicas_final.forEach(element => {
    element['musica_id'] = counter;
    counter = counter + 1;
});

console.log(JSON.stringify(musicas_final));