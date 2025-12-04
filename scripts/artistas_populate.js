// Script MongoDB — coleção “artistas”
db.artistas.insertMany([
  {
    nome: "Amy Winehouse",
    data_nascimento: ISODate("1983-09-14"),
    local: "Londres, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: 21700000  // ~21,7 milhões conforme Spotify :contentReference[oaicite:1]{index=1}
  },
  {
    nome: "Arctic Monkeys",
    data_nascimento: null,
    local: "Sheffield, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: 54343316  // ~54,3 milhões conforme ranking recente :contentReference[oaicite:2]{index=2}
  },
  {
    nome: "Arnaldo Antunes",
    data_nascimento: null,
    local: "",  // informação não preenchida
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Beyoncé",
    data_nascimento: ISODate("1981-09-04"),
    local: "Houston, Texas, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null  // dado não checado
  },
  {
    nome: "Black Sabbath",
    data_nascimento: null,
    local: "Birmingham, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Caetano Veloso",
    data_nascimento: ISODate("1942-08-07"),
    local: "Juazeiro, Bahia, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Carlinhos Brown",
    data_nascimento: null,
    local: "",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Chico Buarque",
    data_nascimento: ISODate("1944-06-19"),
    local: "Rio de Janeiro, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Daft Punk",
    data_nascimento: null,
    local: "Paris, França",
    idioma: "Francês / Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "David Bowie",
    data_nascimento: ISODate("1947-01-08"),
    local: "Londres, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Dua Lipa",
    data_nascimento: ISODate("1995-08-22"),
    local: "Londres, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: 61921145  // ~61,9 milhões segundo ranking :contentReference[oaicite:3]{index=3}
  },
  {
    nome: "Fleetwood Mac",
    data_nascimento: null,
    local: "Reino Unido / EUA",
    idioma: "Inglês",
    ouvintes_mensais: 46389065  // ~46,4 milhões conforme ranking :contentReference[oaicite:4]{index=4}
  },
  {
    nome: "Frank Ocean",
    data_nascimento: ISODate("1987-10-28"),
    local: "Long Beach, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Gal Costa",
    data_nascimento: ISODate("1945-09-26"),
    local: "Salvador, Bahia, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Gilberto Gil",
    data_nascimento: ISODate("1942-06-26"),
    local: "Salvador, Bahia, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Guns N' Roses",
    data_nascimento: null,
    local: "Los Angeles, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Jorge Ben Jor",
    data_nascimento: ISODate("1945-03-22"),
    local: "Rio de Janeiro, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Kanye West",
    data_nascimento: ISODate("1977-06-08"),
    local: "Atlanta, Geórgia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: 65591965  // ~65,6 milhões conforme ranking :contentReference[oaicite:5]{index=5}
  },
  {
    nome: "Kendrick Lamar",
    data_nascimento: ISODate("1987-06-17"),
    local: "Compton, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: 70453785  // ~70,5 milhões segundo ranking :contentReference[oaicite:6]{index=6}
  },
  {
    nome: "Lauryn Hill",
    data_nascimento: ISODate("1975-05-26"),
    local: "East Orange, Nova Jérsei, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Led Zeppelin",
    data_nascimento: null,
    local: "Londres, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Legião Urbana",
    data_nascimento: null,
    local: "Brasília, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Linkin Park",
    data_nascimento: null,
    local: "Agoura Hills, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: 52742858  // ~52,7 milhões conforme ranking :contentReference[oaicite:7]{index=7}
  },
  {
    nome: "Lô Borges",
    data_nascimento: ISODate("1952-04-10"),
    local: "Nelas, Portugal / Brasil",  // ou local de vida; ajustar conforme desejado
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Marisa Monte",
    data_nascimento: ISODate("1967-07-01"),
    local: "Rio de Janeiro, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Metallica",
    data_nascimento: null,
    local: "Los Angeles, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Michael Jackson",
    data_nascimento: ISODate("1958-08-29"),
    local: "Gary, Indiana, EUA",
    idioma: "Inglês",
    ouvintes_mensais: 61350750  // ~61,35 milhões conforme ranking :contentReference[oaicite:8]{index=8}
  },
  {
    nome: "Miles Davis",
    data_nascimento: ISODate("1926-05-26"),
    local: "Alton, Illinois, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Milton Nascimento",
    data_nascimento: ISODate("1942-10-26"),
    local: "Três Pontas, Minas Gerais, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Nirvana",
    data_nascimento: null,
    local: "Aberdeen, Washington, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Novos Baianos",
    data_nascimento: null,
    local: "Salvador / Rio de Janeiro, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Os Mutantes",
    data_nascimento: null,
    local: "São Paulo / Rio de Janeiro, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Pearl Jam",
    data_nascimento: null,
    local: "Seattle, Washington, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Pink Floyd",
    data_nascimento: null,
    local: "Londres, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: 45282288  // ~45,3 milhões conforme ranking :contentReference[oaicite:9]{index=9}
  },
  {
    nome: "Prince",
    data_nascimento: ISODate("1958-06-07"),
    local: "Minneapolis, Minnesota, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Racionais MC's",
    data_nascimento: null,
    local: "São Paulo, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Radiohead",
    data_nascimento: null,
    local: "Abingdon, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: 45282288  // ~45,3 milhões conforme ranking :contentReference[oaicite:10]{index=10}
  },
  {
    nome: "Red Hot Chili Peppers",
    data_nascimento: null,
    local: "Los Angeles, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Rosalía",
    data_nascimento: ISODate("1992-09-25"),
    local: "Barcelona, Espanha",
    idioma: "Espanhol / Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Tame Impala",
    data_nascimento: null,
    local: "Perth, Austrália",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "Taylor Swift",
    data_nascimento: ISODate("1989-12-13"),
    local: "Reading, Pennsylvania, EUA",
    idioma: "Inglês",
    ouvintes_mensais: 105663590  // ~105,7 milhões conforme ranking atual :contentReference[oaicite:11]{index=11}
  },
  {
    nome: "The Beatles",
    data_nascimento: null,
    local: "Liverpool, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "The Revolution",
    data_nascimento: null,
    local: "",  // banda de apoio histórica de Prince; sem local definido
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "The Smiths",
    data_nascimento: null,
    local: "Manchester, Inglaterra",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "The Strokes",
    data_nascimento: null,
    local: "New York, EUA",
    idioma: "Inglês",
    ouvintes_mensais: null
  },
  {
    nome: "The Weeknd",
    data_nascimento: ISODate("1990-02-16"),
    local: "Toronto, Canadá",
    idioma: "Inglês",
    ouvintes_mensais: 120308767  // ~120,3 milhões conforme ranking atual :contentReference[oaicite:12]{index=12}
  },
  {
    nome: "Tim Maia",
    data_nascimento: ISODate("1942-09-28"),
    local: "Rio de Janeiro, Brasil",
    idioma: "Português",
    ouvintes_mensais: null
  },
  {
    nome: "Tyler, The Creator",
    data_nascimento: ISODate("1991-03-06"),
    local: "Los Angeles, Califórnia, EUA",
    idioma: "Inglês",
    ouvintes_mensais: 45646644  // ~45,6 milhões conforme ranking :contentReference[oaicite:13]{index=13}
  }
]);
