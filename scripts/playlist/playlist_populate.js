import { playlists_f } from './playlist_array.js';

export let playlists_final = playlists_f;
let counter = 1;
playlists_final.forEach(element => {
    element['playlist_id'] = counter;
    counter = counter + 1;
});

db.playlists.insertMany(playlists_final);