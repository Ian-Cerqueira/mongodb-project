import { albuns_f } from "./albuns_array.js";

export let albuns_final = albuns_f;
let counter = 1;
albuns_final.forEach(element => {
    element['album_id'] = counter;
    counter = counter + 1;
});

db.albuns.insertMany(albuns_final);
