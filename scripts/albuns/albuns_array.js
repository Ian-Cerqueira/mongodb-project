const albuns_f = [
  {
    "Titulo": "Folklore",
    "musicas": ["Cardigan", "The 1", "Exile", "Betty", "August"],
    "dono": ["Taylor Swift"],
    "data": "2020-07-24",
    "generos": ["Indie Folk", "Alternative Rock"],
    "capa": "https://example.com/covers/folklore.jpg"
  },
  {
    "Titulo": "Red (Taylor's Version)",
    "musicas": ["All Too Well (10 Minute Version)", "Red", "I Knew You Were Trouble", "22"],
    "dono": ["Taylor Swift"],
    "data": "2021-11-12",
    "generos": ["Pop", "Country", "Rock"],
    "capa": "https://example.com/covers/red_tv.jpg"
  },
  {
    "Titulo": "Midnights",
    "musicas": ["Anti-Hero", "Lavender Haze", "Karma", "Bejeweled", "Midnight Rain"],
    "dono": ["Taylor Swift"],
    "data": "2022-10-21",
    "generos": ["Synth-Pop", "Electronica"],
    "capa": "https://example.com/covers/midnights.jpg"
  },

  {
    "Titulo": "My Beautiful Dark Twisted Fantasy",
    "musicas": ["Dark Fantasy", "Power", "All of the Lights", "Runaway", "Monster"],
    "dono": ["Kanye West"],
    "data": "2010-11-22",
    "generos": ["Hip Hop", "Art Pop"],
    "capa": "https://example.com/covers/mbdtf.jpg"
  },
  {
    "Titulo": "The College Dropout",
    "musicas": ["Jesus Walks", "All Falls Down", "Through the Wire", "Slow Jamz"],
    "dono": ["Kanye West"],
    "data": "2004-02-10",
    "generos": ["Hip Hop", "Chipmunk Soul"],
    "capa": "https://example.com/covers/college_dropout.jpg"
  },
  {
    "Titulo": "Yeezus",
    "musicas": ["Black Skinhead", "Bound 2", "New Slaves", "Blood on the Leaves"],
    "dono": ["Kanye West"],
    "data": "2013-06-18",
    "generos": ["Industrial Hip Hop", "Experimental"],
    "capa": "https://example.com/covers/yeezus.jpg"
  },

  {
    "Titulo": "Sgt. Pepper's Lonely Hearts Club Band",
    "musicas": ["Lucy in the Sky with Diamonds", "A Day in the Life", "With a Little Help from My Friends"],
    "dono": ["The Beatles"],
    "data": "1967-05-26",
    "generos": ["Psychedelic Rock", "Pop"],
    "capa": "https://example.com/covers/sgt_pepper.jpg"
  },
  {
    "Titulo": "Revolver",
    "musicas": ["Eleanor Rigby", "Taxman", "Yellow Submarine", "Tomorrow Never Knows"],
    "dono": ["The Beatles"],
    "data": "1966-08-05",
    "generos": ["Psychedelic Rock", "Pop Rock"],
    "capa": "https://example.com/covers/revolver.jpg"
  },
  {
    "Titulo": "The Beatles (White Album)",
    "musicas": ["Back in the U.S.S.R.", "While My Guitar Gently Weeps", "Helter Skelter", "Blackbird"],
    "dono": ["The Beatles"],
    "data": "1968-11-22",
    "generos": ["Rock", "Pop", "Experimental"],
    "capa": "https://example.com/covers/white_album.jpg"
  },

  {
    "Titulo": "The Wall",
    "musicas": ["Another Brick in the Wall, Pt. 2", "Comfortably Numb", "Hey You", "Mother"],
    "dono": ["Pink Floyd"],
    "data": "1979-11-30",
    "generos": ["Progressive Rock", "Rock Opera"],
    "capa": "https://example.com/covers/the_wall.jpg"
  },
  {
    "Titulo": "Wish You Were Here",
    "musicas": ["Shine On You Crazy Diamond", "Wish You Were Here", "Have a Cigar"],
    "dono": ["Pink Floyd"],
    "data": "1975-09-12",
    "generos": ["Progressive Rock"],
    "capa": "https://example.com/covers/wish_you_were_here.jpg"
  },

  {
    "Titulo": "good kid, m.A.A.d city",
    "musicas": ["Bitch, Don't Kill My Vibe", "Swimming Pools (Drank)", "Money Trees", "Poetic Justice"],
    "dono": ["Kendrick Lamar"],
    "data": "2012-10-22",
    "generos": ["Hip Hop", "West Coast Hip Hop"],
    "capa": "https://example.com/covers/gkmc.jpg"
  },
  {
    "Titulo": "DAMN.",
    "musicas": ["HUMBLE.", "DNA.", "ELEMENT.", "LOVE.", "LOYALTY."],
    "dono": ["Kendrick Lamar"],
    "data": "2017-04-14",
    "generos": ["Hip Hop", "Rap"],
    "capa": "https://example.com/covers/damn.jpg"
  },

  {
    "Titulo": "Renaissance",
    "musicas": ["Break My Soul", "Cuff It", "Alien Superstar", "Virgo's Groove"],
    "dono": ["Beyoncé"],
    "data": "2022-07-29",
    "generos": ["Dance", "House", "Disco"],
    "capa": "https://example.com/covers/renaissance.jpg"
  },
  {
    "Titulo": "B'Day",
    "musicas": ["Déjà Vu", "Irreplaceable", "Ring the Alarm", "Beautiful Liar"],
    "dono": ["Beyoncé"],
    "data": "2006-09-01",
    "generos": ["R&B", "Funk", "Pop"],
    "capa": "https://example.com/covers/bday.jpg"
  },

  {
    "Titulo": "In Rainbows",
    "musicas": ["15 Step", "Bodysnatchers", "Nude", "Weird Fishes/Arpeggi"],
    "dono": ["Radiohead"],
    "data": "2007-10-10",
    "generos": ["Art Rock", "Alternative Rock"],
    "capa": "https://example.com/covers/in_rainbows.jpg"
  },
  {
    "Titulo": "Kid A",
    "musicas": ["Everything in Its Right Place", "The National Anthem", "How to Disappear Completely"],
    "dono": ["Radiohead"],
    "data": "2000-10-02",
    "generos": ["Electronic", "Experimental Rock"],
    "capa": "https://example.com/covers/kid_a.jpg"
  },
  {
    "Titulo": "The Bends",
    "musicas": ["High and Dry", "Fake Plastic Trees", "Just", "Street Spirit (Fade Out)"],
    "dono": ["Radiohead"],
    "data": "1995-03-13",
    "generos": ["Alternative Rock", "Britpop"],
    "capa": "https://example.com/covers/the_bends.jpg"
  },

  {
    "Titulo": "Hunky Dory",
    "musicas": ["Changes", "Oh! You Pretty Things", "Life on Mars?", "Queen Bitch"],
    "dono": ["David Bowie"],
    "data": "1971-12-17",
    "generos": ["Glam Rock", "Pop Rock"],
    "capa": "https://example.com/covers/hunky_dory.jpg"
  },
  {
    "Titulo": "Blackstar",
    "musicas": ["Blackstar", "Lazarus", "Sue (Or in a Season of Crime)", "I Can't Give Everything Away"],
    "dono": ["David Bowie"],
    "data": "2016-01-08",
    "generos": ["Art Rock", "Jazz Rock"],
    "capa": "https://example.com/covers/blackstar.jpg"
  },
  {
    "Titulo": "Heroes",
    "musicas": ["Heroes", "Beauty and the Beast", "Joe the Lion"],
    "dono": ["David Bowie"],
    "data": "1977-10-14",
    "generos": ["Art Rock", "Ambient"],
    "capa": "https://example.com/covers/heroes.jpg"
  },

  {
    "Titulo": "Homework",
    "musicas": ["Da Funk", "Around the World", "Burnin'", "Revolution 909"],
    "dono": ["Daft Punk"],
    "data": "1997-01-20",
    "generos": ["French House", "Techno"],
    "capa": "https://example.com/covers/homework.jpg"
  },
  {
    "Titulo": "Alive 2007",
    "musicas": ["Robot Rock / Oh Yeah", "Touch It / Technologic", "One More Time / Aerodynamic"],
    "dono": ["Daft Punk"],
    "data": "2007-11-19",
    "generos": ["Electronic", "Live"],
    "capa": "https://example.com/covers/alive2007.jpg"
  },

  {
    "Titulo": "Meus Caros Amigos",
    "musicas": ["O Que Será (À Flor da Pele)", "Mulheres de Atenas", "Olhos nos Olhos"],
    "dono": ["Chico Buarque"],
    "data": "1976-01-01",
    "generos": ["MPB", "Samba"],
    "capa": "https://example.com/covers/meus_caros_amigos.jpg"
  },
  {
    "Titulo": "Caravanas",
    "musicas": ["Tua Cantiga", "Blues pra Bia", "As Caravanas"],
    "dono": ["Chico Buarque"],
    "data": "2017-08-25",
    "generos": ["MPB"],
    "capa": "https://example.com/covers/caravanas.jpg"
  },

  {
    "Titulo": "Transa",
    "musicas": ["You Don't Know Me", "Nine Out of Ten", "Triste Bahia", "Mora na Filosofia"],
    "dono": ["Caetano Veloso"],
    "data": "1972-01-01",
    "generos": ["MPB", "Rock", "Psychedelic Folk"],
    "capa": "https://example.com/covers/transa.jpg"
  },
  {
    "Titulo": "Tropicalia ou Panis et Circencis",
    "musicas": ["Tropicália", "Panis et Circenses", "Lindonéia", "Baby"],
    "dono": ["Caetano Veloso", "Gilberto Gil", "Os Mutantes", "Gal Costa"],
    "data": "1968-07-01",
    "generos": ["Tropicália", "MPB", "Psychedelic Rock"],
    "capa": "https://example.com/covers/tropicalia.jpg"
  },
  {
    "Titulo": "Cê",
    "musicas": ["Outro", "Minhas Lágrimas", "Rocks", "Odeio"],
    "dono": ["Caetano Veloso"],
    "data": "2006-09-01",
    "generos": ["Indie Rock", "Rock Experimental"],
    "capa": "https://example.com/covers/ce.jpg"
  },

  {
    "Titulo": "Refazenda",
    "musicas": ["Refazenda", "Tenho Sede", "Lamento Sertanejo", "Pai e Mãe"],
    "dono": ["Gilberto Gil"],
    "data": "1975-01-01",
    "generos": ["MPB", "Folk"],
    "capa": "https://example.com/covers/refazenda.jpg"
  },
  {
    "Titulo": "Realce",
    "musicas": ["Realce", "Superhomem - A Canção", "Toda Menina Baiana", "Não Chores Mais"],
    "dono": ["Gilberto Gil"],
    "data": "1979-01-01",
    "generos": ["MPB", "Pop", "Disco"],
    "capa": "https://example.com/covers/realce.jpg"
  },

  {
    "Titulo": "Verde, Anil, Amarelo, Cor-de-Rosa e Carvão",
    "musicas": ["Maria de Verdade", "Na Estrada", "Dança da Solidão", "Segue o Seco"],
    "dono": ["Marisa Monte"],
    "data": "1994-07-01",
    "generos": ["MPB", "Pop"],
    "capa": "https://example.com/covers/verde_anil.jpg"
  },
  {
    "Titulo": "Tribalistas",
    "musicas": ["Velha Infância", "Já Sei Namorar", "Passe em Casa"],
    "dono": ["Marisa Monte", "Arnaldo Antunes", "Carlinhos Brown"],
    "data": "2002-11-01",
    "generos": ["MPB", "Pop"],
    "capa": "https://example.com/covers/tribalistas.jpg"
  },
  {
    "Titulo": "Portas",
    "musicas": ["Portas", "Calma", "Déjà Vu", "Vento Sardo"],
    "dono": ["Marisa Monte"],
    "data": "2021-07-01",
    "generos": ["MPB", "Pop"],
    "capa": "https://example.com/covers/portas.jpg"
  },

  {
    "Titulo": "Que País É Este 1978/1987",
    "musicas": ["Que País É Este", "Faroeste Caboclo", "Angra dos Reis", "Eu Sei"],
    "dono": ["Legião Urbana"],
    "data": "1987-11-01",
    "generos": ["Post-Punk", "Rock Brasileiro"],
    "capa": "https://example.com/covers/que_pais.jpg"
  },
  {
    "Titulo": "As Quatro Estações",
    "musicas": ["Há Tempos", "Pais e Filhos", "Quando o Sol Bater na Janela do Teu Quarto"],
    "dono": ["Legião Urbana"],
    "data": "1989-10-26",
    "generos": ["Rock", "Pop Rock"],
    "capa": "https://example.com/covers/quatro_estacoes.jpg"
  },

  {
    "Titulo": "Nada como um Dia após o Outro Dia",
    "musicas": ["Vida Loka I", "Vida Loka II", "Negro Drama", "Jesus Chorou"],
    "dono": ["Racionais MC's"],
    "data": "2002-10-01",
    "generos": ["Rap", "Hip Hop"],
    "capa": "https://example.com/covers/nada_como_um_dia.jpg"
  },
  {
    "Titulo": "Cores & Valores",
    "musicas": ["Cores & Valores", "Somos o que Somos", "Eu Te Proponho"],
    "dono": ["Racionais MC's"],
    "data": "2014-11-25",
    "generos": ["Rap", "Hip Hop"],
    "capa": "https://example.com/covers/cores_valores.jpg"
  },

  {
    "Titulo": "Bad",
    "musicas": ["Bad", "The Way You Make Me Feel", "Man in the Mirror", "Smooth Criminal"],
    "dono": ["Michael Jackson"],
    "data": "1987-08-31",
    "generos": ["Pop", "Funk", "Rock"],
    "capa": "https://example.com/covers/bad.jpg"
  },
  {
    "Titulo": "Off the Wall",
    "musicas": ["Don't Stop 'Til You Get Enough", "Rock with You", "Off the Wall"],
    "dono": ["Michael Jackson"],
    "data": "1979-08-10",
    "generos": ["Disco", "Pop", "Funk"],
    "capa": "https://example.com/covers/off_the_wall.jpg"
  },
  {
    "Titulo": "Led Zeppelin IV",
    "musicas": ["Black Dog", "Rock and Roll", "Stairway to Heaven", "Going to California"],
    "dono": ["Led Zeppelin"],
    "data": "1971-11-08",
    "generos": ["Hard Rock", "Heavy Metal", "Folk Rock"],
    "capa": "https://example.com/covers/led_zeppelin_iv.jpg"
  },
  {
    "Titulo": "Physical Graffiti",
    "musicas": ["Kashmir", "Trampled Under Foot", "Houses of the Holy"],
    "dono": ["Led Zeppelin"],
    "data": "1975-02-24",
    "generos": ["Hard Rock"],
    "capa": "https://example.com/covers/physical_graffiti.jpg"
  },
  {
    "Titulo": "The Queen Is Dead",
    "musicas": ["The Boy with the Thorn in His Side", "Bigmouth Strikes Again", "There Is a Light That Never Goes Out"],
    "dono": ["The Smiths"],
    "data": "1986-06-16",
    "generos": ["Indie Pop", "Jangle Pop"],
    "capa": "https://example.com/covers/queen_is_dead.jpg"
  },
  {
    "Titulo": "Meat Is Murder",
    "musicas": ["The Headmaster Ritual", "That Joke Isn't Funny Anymore", "How Soon Is Now?"],
    "dono": ["The Smiths"],
    "data": "1985-02-11",
    "generos": ["Indie Pop", "Post-Punk"],
    "capa": "https://example.com/covers/meat_is_murder.jpg"
  },
  {
    "Titulo": "Appetite for Destruction",
    "musicas": ["Welcome to the Jungle", "Sweet Child o' Mine", "Paradise City"],
    "dono": ["Guns N' Roses"],
    "data": "1987-07-21",
    "generos": ["Hard Rock", "Heavy Metal"],
    "capa": "https://example.com/covers/appetite.jpg"
  },
  {
    "Titulo": "Use Your Illusion I",
    "musicas": ["Don't Cry", "November Rain", "Live and Let Die"],
    "dono": ["Guns N' Roses"],
    "data": "1991-09-17",
    "generos": ["Hard Rock"],
    "capa": "https://example.com/covers/use_your_illusion_1.jpg"
  },
  {
    "Titulo": "Ten",
    "musicas": ["Once", "Even Flow", "Alive", "Black", "Jeremy"],
    "dono": ["Pearl Jam"],
    "data": "1991-08-27",
    "generos": ["Grunge", "Alternative Rock"],
    "capa": "https://example.com/covers/ten.jpg"
  },
  {
    "Titulo": "Vs.",
    "musicas": ["Go", "Animal", "Daughter", "Rearviewmirror"],
    "dono": ["Pearl Jam"],
    "data": "1993-10-19",
    "generos": ["Grunge"],
    "capa": "https://example.com/covers/vs.jpg"
  },
  {
    "Titulo": "Hybrid Theory",
    "musicas": ["Papercut", "One Step Closer", "Crawling", "In the End"],
    "dono": ["Linkin Park"],
    "data": "2000-10-24",
    "generos": ["Nu Metal", "Rap Rock"],
    "capa": "https://example.com/covers/hybrid_theory.jpg"
  },
  {
    "Titulo": "Meteora",
    "musicas": ["Somewhere I Belong", "Faint", "Numb", "Breaking the Habit"],
    "dono": ["Linkin Park"],
    "data": "2003-03-25",
    "generos": ["Nu Metal", "Alternative Rock"],
    "capa": "https://example.com/covers/meteora.jpg"
  },
  {
    "Titulo": "Californication",
    "musicas": ["Scar Tissue", "Otherside", "Californication", "Road Trippin'"],
    "dono": ["Red Hot Chili Peppers"],
    "data": "1999-06-08",
    "generos": ["Alternative Rock", "Funk Rock"],
    "capa": "https://example.com/covers/californication.jpg"
  },
  {
    "Titulo": "By the Way",
    "musicas": ["By the Way", "The Zephyr Song", "Can't Stop"],
    "dono": ["Red Hot Chili Peppers"],
    "data": "2002-07-09",
    "generos": ["Alternative Rock"],
    "capa": "https://example.com/covers/by_the_way.jpg"
  },
  {
    "Titulo": "Ride the Lightning",
    "musicas": ["Ride the Lightning", "For Whom the Bell Tolls", "Fade to Black", "Creeping Death"],
    "dono": ["Metallica"],
    "data": "1984-07-27",
    "generos": ["Thrash Metal"],
    "capa": "https://example.com/covers/ride_the_lightning.jpg"
  },
  {
    "Titulo": "Metallica (The Black Album)",
    "musicas": ["Enter Sandman", "Sad but True", "The Unforgiven", "Nothing Else Matters"],
    "dono": ["Metallica"],
    "data": "1991-08-12",
    "generos": ["Heavy Metal"],
    "capa": "https://example.com/covers/black_album.jpg"
  },

  {
    "Titulo": "The Dark Side of the Moon",
    "musicas": ["Speak to Me", "Breathe", "Time", "Money", "Us and Them", "Eclipse"],
    "dono": ["Pink Floyd"],
    "data": "1973-03-01",
    "generos": ["Progressive Rock", "Psychedelic Rock"],
    "capa": "https://example.com/covers/dark_side_moon.jpg"
  },
  {
    "Titulo": "Thriller",
    "musicas": ["Wanna Be Startin' Somethin'", "Thriller", "Beat It", "Billie Jean", "Human Nature"],
    "dono": ["Michael Jackson"],
    "data": "1982-11-29",
    "generos": ["Pop", "Post-Disco", "Funk", "Rock"],
    "capa": "https://example.com/covers/thriller.jpg"
  },
  {
    "Titulo": "Clube da Esquina",
    "musicas": ["Tudo Que Você Podia Ser", "Cais", "O Trem Azul", "Um Girassol Da Cor De Seu Cabelo", "Paisagem Da Janela"],
    "dono": ["Milton Nascimento", "Lô Borges"],
    "data": "1972-03-01",
    "generos": ["MPB", "Jazz Fusion", "Folk", "Rock"],
    "capa": "https://example.com/covers/clube_da_esquina.jpg"
  },
  {
    "Titulo": "Abbey Road",
    "musicas": ["Come Together", "Something", "Here Comes the Sun", "Because", "The End"],
    "dono": ["The Beatles"],
    "data": "1969-09-26",
    "generos": ["Rock", "Pop"],
    "capa": "https://example.com/covers/abbey_road.jpg"
  },
  {
    "Titulo": "Sobrevivendo no Inferno",
    "musicas": ["Jorge da Capadócia", "Capítulo 4, Versículo 3", "Diário de um Detento", "Mágico de Oz"],
    "dono": ["Racionais MC's"],
    "data": "1997-12-20",
    "generos": ["Rap", "Hip Hop"],
    "capa": "https://example.com/covers/sobrevivendo_no_inferno.jpg"
  },
  {
    "Titulo": "Random Access Memories",
    "musicas": ["Give Life Back to Music", "Giorgio by Moroder", "Instant Crush", "Get Lucky", "Doin' It Right"],
    "dono": ["Daft Punk"],
    "data": "2013-05-17",
    "generos": ["Disco", "Electronic", "Funk"],
    "capa": "https://example.com/covers/ram.jpg"
  },
  {
    "Titulo": "Nevermind",
    "musicas": ["Smells Like Teen Spirit", "In Bloom", "Come as You Are", "Lithium", "Polly"],
    "dono": ["Nirvana"],
    "data": "1991-09-24",
    "generos": ["Grunge", "Alternative Rock"],
    "capa": "https://example.com/covers/nevermind.jpg"
  },
  {
    "Titulo": "Back to Black",
    "musicas": ["Rehab", "You Know I'm No Good", "Back to Black", "Love Is a Losing Game", "Tears Dry on Their Own"],
    "dono": ["Amy Winehouse"],
    "data": "2006-10-27",
    "generos": ["Soul", "R&B", "Jazz"],
    "capa": "https://example.com/covers/back_to_black.jpg"
  },
  {
    "Titulo": "To Pimp a Butterfly",
    "musicas": ["Wesley's Theory", "King Kunta", "Alright", "The Blacker the Berry", "i"],
    "dono": ["Kendrick Lamar"],
    "data": "2015-03-15",
    "generos": ["Hip Hop", "Jazz Rap", "Funk"],
    "capa": "https://example.com/covers/tpab.jpg"
  },
  {
    "Titulo": "Acabou Chorare",
    "musicas": ["Brasil Pandeiro", "Preta Pretinha", "Tinindo Trincando", "A Menina Dança", "Mistério do Planeta"],
    "dono": ["Novos Baianos"],
    "data": "1972-01-01",
    "generos": ["MPB", "Samba", "Rock"],
    "capa": "https://example.com/covers/acabou_chorare.jpg"
  },
  {
    "Titulo": "Rumours",
    "musicas": ["Dreams", "The Chain", "Go Your Own Way", "Don't Stop", "Gold Dust Woman"],
    "dono": ["Fleetwood Mac"],
    "data": "1977-02-04",
    "generos": ["Soft Rock", "Pop Rock"],
    "capa": "https://example.com/covers/rumours.jpg"
  },
  {
    "Titulo": "OK Computer",
    "musicas": ["Paranoid Android", "Exit Music (For a Film)", "Karma Police", "No Surprises"],
    "dono": ["Radiohead"],
    "data": "1997-05-21",
    "generos": ["Alternative Rock", "Art Rock"],
    "capa": "https://example.com/covers/ok_computer.jpg"
  },
  {
    "Titulo": "Construção",
    "musicas": ["Deus Lhe Pague", "Cotidiano", "Construção", "Valsinha"],
    "dono": ["Chico Buarque"],
    "data": "1971-12-01",
    "generos": ["MPB", "Samba"],
    "capa": "https://example.com/covers/construcao.jpg"
  },
  {
    "Titulo": "AM",
    "musicas": ["Do I Wanna Know?", "R U Mine?", "Arabella", "Why'd You Only Call Me When You're High?"],
    "dono": ["Arctic Monkeys"],
    "data": "2013-09-09",
    "generos": ["Indie Rock", "Post-Punk Revival"],
    "capa": "https://example.com/covers/am.jpg"
  },
  {
    "Titulo": "Lemonade",
    "musicas": ["Pray You Catch Me", "Hold Up", "Don't Hurt Yourself", "Sorry", "Formation"],
    "dono": ["Beyoncé"],
    "data": "2016-04-23",
    "generos": ["R&B", "Pop", "Hip Hop"],
    "capa": "https://example.com/covers/lemonade.jpg"
  },
  {
    "Titulo": "Currents",
    "musicas": ["Let It Happen", "The Less I Know the Better", "Eventually", "New Person, Same Old Mistakes"],
    "dono": ["Tame Impala"],
    "data": "2015-07-17",
    "generos": ["Psychedelic Pop", "Synth-Pop"],
    "capa": "https://example.com/covers/currents.jpg"
  },
  {
    "Titulo": "Purple Rain",
    "musicas": ["Let's Go Crazy", "Computer Blue", "When Doves Cry", "Purple Rain"],
    "dono": ["Prince", "The Revolution"],
    "data": "1984-06-25",
    "generos": ["Pop Rock", "R&B", "Synth-Funk"],
    "capa": "https://example.com/covers/purple_rain.jpg"
  },
  {
    "Titulo": "A Tábua de Esmeralda",
    "musicas": ["Os Alquimistas Estão Chegando", "O Homem da Gravata Florida", "Errare Humanum Est"],
    "dono": ["Jorge Ben Jor"],
    "data": "1974-05-01",
    "generos": ["Samba-Rock", "MPB", "Funk"],
    "capa": "https://example.com/covers/tabua_esmeralda.jpg"
  },
  {
    "Titulo": "Blonde",
    "musicas": ["Nikes", "Ivy", "Pink + White", "Nights", "Self Control"],
    "dono": ["Frank Ocean"],
    "data": "2016-08-20",
    "generos": ["R&B", "Avant-Soul", "Psychedelic Pop"],
    "capa": "https://example.com/covers/blonde.jpg"
  },
  {
    "Titulo": "Discovery",
    "musicas": ["One More Time", "Aerodynamic", "Digital Love", "Harder, Better, Faster, Stronger"],
    "dono": ["Daft Punk"],
    "data": "2001-03-12",
    "generos": ["House", "Disco", "Synth-Pop"],
    "capa": "https://example.com/covers/discovery.jpg"
  },
  {
    "Titulo": "Is This It",
    "musicas": ["Is This It", "The Modern Age", "Soma", "Last Nite", "Hard to Explain"],
    "dono": ["The Strokes"],
    "data": "2001-07-30",
    "generos": ["Indie Rock", "Garage Rock Revival"],
    "capa": "https://example.com/covers/is_this_it.jpg"
  },
  {
    "Titulo": "Future Nostalgia",
    "musicas": ["Don't Start Now", "Physical", "Levitating", "Break My Heart"],
    "dono": ["Dua Lipa"],
    "data": "2020-03-27",
    "generos": ["Disco", "Pop", "Synth-Pop"],
    "capa": "https://example.com/covers/future_nostalgia.jpg"
  },
  {
    "Titulo": "Dois",
    "musicas": ["Daniel na Cova dos Leões", "Quase Sem Querer", "Eduardo e Mônica", "Tempo Perdido", "Índios"],
    "dono": ["Legião Urbana"],
    "data": "1986-07-20",
    "generos": ["Post-Punk", "Rock Brasileiro"],
    "capa": "https://example.com/covers/dois.jpg"
  },
  {
    "Titulo": "Master of Puppets",
    "musicas": ["Battery", "Master of Puppets", "Welcome Home (Sanitarium)", "Orion"],
    "dono": ["Metallica"],
    "data": "1986-03-03",
    "generos": ["Trash Metal", "Heavy Metal"],
    "capa": "https://example.com/covers/master_of_puppets.jpg"
  },
  {
    "Titulo": "IGOR",
    "musicas": ["Earfquake", "I Think", "Running Out of Time", "New Magic Wand", "Are We Still Friends?"],
    "dono": ["Tyler, The Creator"],
    "data": "2019-05-17",
    "generos": ["Hip Hop", "Funk", "R&B"],
    "capa": "https://example.com/covers/igor.jpg"
  },
  {
    "Titulo": "After Hours",
    "musicas": ["Alone Again", "Hardest to Love", "Blinding Lights", "Save Your Tears"],
    "dono": ["The Weeknd"],
    "data": "2020-03-20",
    "generos": ["R&B", "New Wave", "Dream Pop"],
    "capa": "https://example.com/covers/after_hours.jpg"
  },
  {
    "Titulo": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    "musicas": ["Five Years", "Moonage Daydream", "Starman", "Ziggy Stardust"],
    "dono": ["David Bowie"],
    "data": "1972-06-16",
    "generos": ["Glam Rock", "Rock Opera"],
    "capa": "https://example.com/covers/ziggy_stardust.jpg"
  },
  {
    "Titulo": "The Miseducation of Lauryn Hill",
    "musicas": ["Lost Ones", "Ex-Factor", "To Zion", "Doo Wop (That Thing)"],
    "dono": ["Lauryn Hill"],
    "data": "1998-08-25",
    "generos": ["R&B", "Neo Soul", "Hip Hop"],
    "capa": "https://example.com/covers/miseducation.jpg"
  },
  {
    "Titulo": "Motomami",
    "musicas": ["Saoko", "Candy", "La Fama", "Hentai", "Chicken Teriyaki"],
    "dono": ["Rosalía"],
    "data": "2022-03-18",
    "generos": ["Pop Experimental", "Reggaeton Alternativo"],
    "capa": "https://example.com/covers/motomami.jpg"
  },
  {
    "Titulo": "Kind of Blue",
    "musicas": ["So What", "Freddie Freeloader", "Blue in Green", "All Blues"],
    "dono": ["Miles Davis"],
    "data": "1959-08-17",
    "generos": ["Jazz", "Modal Jazz"],
    "capa": "https://example.com/covers/kind_of_blue.jpg"
  },
  {
    "Titulo": "Racional, Vol. 1",
    "musicas": ["Imunização Racional (Que Beleza)", "O Grão Mestre", "Bom Senso", "Leia o Livro Universo em Desencanto"],
    "dono": ["Tim Maia"],
    "data": "1975-01-01",
    "generos": ["Funk", "Soul"],
    "capa": "https://example.com/covers/racional1.jpg"
  },
  {
    "Titulo": "Paranoid",
    "musicas": ["War Pigs", "Paranoid", "Planet Caravan", "Iron Man"],
    "dono": ["Black Sabbath"],
    "data": "1970-09-18",
    "generos": ["Heavy Metal"],
    "capa": "https://example.com/covers/paranoid.jpg"
  },
  {
    "Titulo": "1989",
    "musicas": ["Welcome to New York", "Blank Space", "Style", "Shake It Off", "Bad Blood"],
    "dono": ["Taylor Swift"],
    "data": "2014-10-27",
    "generos": ["Pop", "Synth-Pop"],
    "capa": "https://example.com/covers/1989.jpg"
  }
];