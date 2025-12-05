import { donos_playlits } from "./playlist_donos_array.js";
import { playlists_final } from "./playlist_create_index.js";

let playlist_desi_donos = playlists_final;
let counter = 0;

playlist_desi_donos.forEach(element => {
    element['dono'] = donos_playlits[counter];
    counter = counter + 1;
});

