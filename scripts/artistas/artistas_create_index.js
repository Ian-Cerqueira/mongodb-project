load("artistas_array.js");

let artistas_final = artistas_f;
let counter = 1;
artistas_final.forEach(element => {
    element['artista_id'] = counter;
    counter = counter + 1;
});

//db.artistas.insertMany(artistas_final);
