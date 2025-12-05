load("playlist_array.js");

let playlists_final = playlists_f;
let counter = 1;
playlists_final.forEach(element => {
    element['playlist_id'] = counter;
    counter = counter + 1;
});
