load("artistas_create_index.js");
load("artistas_followers_array.js");

let artistas_designated = artistas_final;
let counter = 0;

artistas_designated.forEach(element => {
    element['seguidores'] = artistas_followers[counter];
    counter = counter + 1;
});

db.artistas.insertMany(artistas_designated);