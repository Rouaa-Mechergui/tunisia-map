const GOVERNORATES = {
  tunis: {
    name: "Tunis",
    tagline: "Capitale • Centre politique et économique",
    desc:
`Tunis est la capitale et le principal pôle administratif du pays. Elle concentre une grande partie des institutions, des services et des activités économiques.
Son tissu urbain mélange modernité et patrimoine, avec une dynamique forte autour des services, de l’éducation et des transports.`,
    map: "assets/govs/tunis.svg",
    photos: [
      "assets/photos/tunis1.png",
      "assets/photos/tunis2.jpg",
      "assets/photos/tunis3.jpg",
      "assets/photos/tunis4.jpg"
    ],
    stats: [
      { label: "Statut", value: "Capitale" },
      { label: "Profil", value: "Services & administration" },
      { label: "Atout", value: "Hub urbain" },
      { label: "Point fort", value: "Patrimoine & culture" }
    ]
  },

  nabeul: {
    name: "Nabeul",
    tagline: "Cap Bon • Littoral & artisanat",
    desc:
`Nabeul est une destination phare du Cap Bon, connue pour son littoral, son artisanat (poterie, céramique) et son dynamisme touristique.
Le gouvernorat combine zones balnéaires, traditions locales et activités économiques saisonnières liées au tourisme et aux services.`,
    map: "assets/govs/nabeul.svg",
    photos: [
      "assets/photos/nabeul1.jpg",
      "assets/photos/nabeul2.jpg",
      "assets/photos/nabeul3.jpg",
      "assets/photos/nabeul4.jpg"
    ],
    stats: [
      { label: "Chef-lieu", value: "Nabeul" },
      { label: "Région", value: "Cap Bon" },
      { label: "Spécialité", value: "Céramique & artisanat" },
      { label: "Atout", value: "Tourisme balnéaire" }
    ]
  },

  sfax: {
    name: "Sfax",
    tagline: "Pôle économique • Industrie & port",
    desc:
`Sfax est l’un des moteurs économiques du pays grâce à son tissu industriel, ses activités commerciales et son rôle portuaire.
Elle est reconnue pour son esprit entrepreneurial, sa médina et sa capacité à concentrer des activités à forte valeur ajoutée.`,
    map: "assets/govs/sfax.svg",
    photos: [
      "assets/photos/sfax1.jpg",
      "assets/photos/sfax2.jpg",
      "assets/photos/sfax3.jpg",
      "assets/photos/sfax4.jpg"
    ],
    stats: [
      { label: "Position", value: "Centre-Est" },
      { label: "Profil", value: "Industrie & services" },
      { label: "Point fort", value: "Port & logistique" },
      { label: "Identité", value: "Entrepreneuriat" }
    ]
  } ,
  ariana: {
    name: "Ariana",
    tagline: "Grand Tunis • Urbain & innovation",
    desc:
`L’Ariana fait partie du Grand Tunis et se distingue par un tissu urbain dense, une forte activité de services et une proximité directe avec les pôles universitaires et technologiques.
Le gouvernorat combine zones résidentielles, espaces d’activités et une dynamique économique portée par le commerce, les services et l’entrepreneuriat.`,
    map: "assets/govs/ariana.svg",
    photos: [
      "assets/photos/ariana1.jpg",
      "assets/photos/ariana2.jpg",
      "assets/photos/ariana3.jpg",
      "assets/photos/ariana4.jpg"
    ],
    stats: [
      { label: "Région", value: "Grand Tunis" },
      { label: "Profil", value: "Services & urbain" },
      { label: "Atout", value: "Proximité capitale" },
      { label: "Ambiance", value: "Moderne & active" }
    ]
  },

  ben_arous: {
    name: "Ben Arous",
    tagline: "Grand Tunis • Industrie & logistique",
    desc:
`Ben Arous est un gouvernorat stratégique du Grand Tunis, reconnu pour ses zones industrielles, ses activités de distribution et sa proximité avec les infrastructures de transport.
Il joue un rôle clé dans la logistique et l’économie régionale, avec un équilibre entre zones urbaines, industrielles et commerciales.`,
    map: "assets/govs/ben_arous.svg",
    photos: [
      "assets/photos/ben_arous1.jpg",
      "assets/photos/ben_arous2.jpg",
      "assets/photos/ben_arous3.jpg",
      "assets/photos/ben_arous4.jpg"
    ],
    stats: [
      { label: "Région", value: "Grand Tunis" },
      { label: "Profil", value: "Industrie & logistique" },
      { label: "Point fort", value: "Zones industrielles" },
      { label: "Accès", value: "Axes routiers majeurs" }
    ]
  },

  manouba: {
    name: "Manouba",
    tagline: "Grand Tunis • Mix urbain & agricole",
    desc:
`La Manouba se situe à l’ouest de Tunis et combine une extension urbaine en croissance avec des zones agricoles et des espaces ouverts.
Le gouvernorat se caractérise par une qualité de vie plus calme que le centre de Tunis, tout en restant connecté aux activités économiques et universitaires de la capitale.`,
    map: "assets/govs/manouba.svg",
    photos: [
      "assets/photos/manouba1.jpg",
      "assets/photos/manouba2.jpg",
      "assets/photos/manouba3.jpg",
      "assets/photos/manouba4.jpg"
    ],
    stats: [
      { label: "Région", value: "Grand Tunis" },
      { label: "Profil", value: "Urbain + agricole" },
      { label: "Atout", value: "Calme & proximité" },
      { label: "Dynamique", value: "Expansion urbaine" }
    ]
  },

  sousse: {
    name: "Sousse",
    tagline: "Sahel • Tourisme & patrimoine",
    desc:
`Sousse est l’un des pôles majeurs du Sahel, connue pour son attractivité touristique, son patrimoine historique et son activité économique tournée vers les services.
Entre médina, littoral et infrastructures hôtelières, le gouvernorat combine culture, tourisme et développement urbain dans un environnement très dynamique.`,
    map: "assets/govs/sousse.svg",
    photos: [
      "assets/photos/sousse1.jpg",
      "assets/photos/sousse2.jpg",
      "assets/photos/sousse3.jpg",
      "assets/photos/sousse4.jpg"
    ],
    stats: [
      { label: "Région", value: "Sahel" },
      { label: "Profil", value: "Tourisme & services" },
      { label: "Atout", value: "Médina & littoral" },
      { label: "Économie", value: "Hôtellerie & commerce" }
    ] },
    bizerte: {
  name: "Bizerte",
  tagline: "Nord • Port & littoral",
  desc:
`Bizerte est un gouvernorat côtier stratégique du nord du pays, reconnu pour son port, son activité maritime et son potentiel industriel.
Il combine zones urbaines, littoral attractif et infrastructures économiques liées au commerce et à la logistique.`,
  map: "assets/govs/bizerte.svg",
  photos: [
    "assets/photos/bizerte1.jpg",
    "assets/photos/bizerte2.jpg",
    "assets/photos/bizerte3.webp",
    "assets/photos/bizerte4.jpg"
  ],
  stats: [
    { label: "Région", value: "Nord" },
    { label: "Profil", value: "Portuaire & industriel" },
    { label: "Atout", value: "Position stratégique" },
    { label: "Économie", value: "Commerce & logistique" }
  ]
},

beja: {
  name: "Béja",
  tagline: "Nord-Ouest • Agriculture",
  desc:
`Béja est une région agricole majeure, connue pour sa production céréalière et son rôle dans la sécurité alimentaire.
Le gouvernorat se caractérise par un environnement rural, une activité agricole structurante et un potentiel de développement agro-industriel.`,
  map: "assets/govs/beja.svg",
  photos: [
    "assets/photos/beja1.jpeg",
    "assets/photos/beja2.jpg",
    "assets/photos/beja3.jpg",
    "assets/photos/beja4.jpg"
  ],
  stats: [
    { label: "Région", value: "Nord-Ouest" },
    { label: "Profil", value: "Agricole" },
    { label: "Spécialité", value: "Céréales" },
    { label: "Atout", value: "Terres fertiles" }
  ]
},

jendouba: {
  name: "Jendouba",
  tagline: "Nord-Ouest • Nature & patrimoine",
  desc:
`Jendouba se distingue par ses forêts, ses paysages naturels et ses sites historiques majeurs.
Le gouvernorat possède un fort potentiel touristique vert et un rôle important dans l’agriculture et la préservation de l’environnement.`,
  map: "assets/govs/jendouba.svg",
  photos: [
    "assets/photos/jendouba1.jpg",
    "assets/photos/jendouba2.jpg",
    "assets/photos/jendouba3.jpg",
    "assets/photos/jendouba4.jpg"
  ],
  stats: [
    { label: "Région", value: "Nord-Ouest" },
    { label: "Profil", value: "Nature & agriculture" },
    { label: "Atout", value: "Forêts" },
    { label: "Tourisme", value: "Écotourisme" }
  ]
},

el_kef: {
  name: "Le Kef",
  tagline: "Nord-Ouest • Histoire & relief",
  desc:
`Le Kef est un gouvernorat à forte identité historique, marqué par son relief montagneux et son patrimoine architectural.
Il joue un rôle culturel important et dispose d’un potentiel touristique lié à son histoire et à ses paysages.`,
  map: "assets/govs/el_kef.svg",
  photos: [
    "assets/photos/kef1.jpg",
    "assets/photos/kef2.jpg",
    "assets/photos/kef3.jpg",
    "assets/photos/kef4.jpg"
  ],
  stats: [
    { label: "Région", value: "Nord-Ouest" },
    { label: "Profil", value: "Culture & patrimoine" },
    { label: "Relief", value: "Montagneux" },
    { label: "Atout", value: "Histoire" }
  ]
},

siliana: {
  name: "Siliana",
  tagline: "Nord-Ouest • Rural & agriculture",
  desc:
`Siliana est un gouvernorat à dominante rurale, caractérisé par l’agriculture et les activités liées aux ressources naturelles.
Il offre un cadre calme et un potentiel de développement local basé sur l’agriculture durable.`,
  map: "assets/govs/siliana.svg",
  photos: [
    "assets/photos/siliana1.jpg",
    "assets/photos/siliana2.jpg",
    "assets/photos/siliana3.jpg",
    "assets/photos/siliana4.jpg"
  ],
  stats: [
    { label: "Région", value: "Nord-Ouest" },
    { label: "Profil", value: "Rural" },
    { label: "Activité", value: "Agriculture" },
    { label: "Cadre", value: "Naturel" }
  ]
},monastir: {
  name: "Monastir",
  tagline: "Sahel • Tourisme & services",
  desc:
`Monastir est un gouvernorat côtier du Sahel, reconnu pour son attractivité touristique et son rôle dans les services.
Il combine patrimoine historique, littoral et développement urbain.`,
  map: "assets/govs/monastir.svg",
  photos: [
    "assets/photos/monastir1.jpg",
    "assets/photos/monastir2.jpg",
    "assets/photos/monastir3.jpg",
    "assets/photos/monastir4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sahel" },
    { label: "Profil", value: "Tourisme" },
    { label: "Atout", value: "Littoral" },
    { label: "Économie", value: "Services" }
  ]
},

mahdia: {
  name: "Mahdia",
  tagline: "Sahel • Pêche & tourisme",
  desc:
`Mahdia est une ville côtière connue pour la pêche, le tourisme et son patrimoine maritime.
Le gouvernorat joue un rôle important dans l’économie bleue et les activités littorales.`,
  map: "assets/govs/mahdia.svg",
  photos: [
    "assets/photos/mahdia1.jpg",
    "assets/photos/mahdia2.jpg",
    "assets/photos/mahdia3.jpg",
    "assets/photos/mahdia4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sahel" },
    { label: "Activité", value: "Pêche" },
    { label: "Profil", value: "Côtier" },
    { label: "Atout", value: "Mer" }
  ]
},

kairouan: {
  name: "Kairouan",
  tagline: "Centre • Patrimoine religieux",
  desc:
`Kairouan est l’une des villes historiques majeures du pays et un centre religieux et culturel reconnu.
Le gouvernorat dispose d’un potentiel touristique important et d’une activité agricole notable.`,
  map: "assets/govs/kairouan.svg",
  photos: [
    "assets/photos/kairouan1.jpg",
    "assets/photos/kairaoun2.jpg",
    "assets/photos/kairaoun3.jpg",
    "assets/photos/kairaoun4.png"
  ],
  stats: [
    { label: "Région", value: "Centre" },
    { label: "Statut", value: "Ville historique" },
    { label: "Atout", value: "Patrimoine" },
    { label: "Tourisme", value: "Culturel" }
  ]
},

kasserine: {
  name: "Kasserine",
  tagline: "Centre-Ouest • Relief & agriculture",
  desc:
`Kasserine est caractérisée par son relief montagneux et son activité agricole.
Le gouvernorat possède un potentiel de développement régional basé sur l’agriculture et les ressources locales.`,
  map: "assets/govs/kasserine.svg",
  photos: [
    "assets/photos/kasserine1.jpg",
    "assets/photos/kasserine2.jpg",
    "assets/photos/kasserine3.jpg",
    "assets/photos/kasserine4.jpg"
  ],
  stats: [
    { label: "Région", value: "Centre-Ouest" },
    { label: "Profil", value: "Rural" },
    { label: "Relief", value: "Montagneux" },
    { label: "Activité", value: "Agriculture" }
  ]
},

sidi_bouzid: {
  name: "Sidi Bouzid",
  tagline: "Centre • Agriculture",
  desc:
`Sidi Bouzid est un gouvernorat agricole du centre du pays, jouant un rôle clé dans la production agricole.
Il dispose d’un potentiel de développement agro-industriel important.`,
  map: "assets/govs/sidi_bouzid.svg",
  photos: [
    "assets/photos/sidi_bouzid1.jpg",
    "assets/photos/sidi_bouzid2.jpg",
    "assets/photos/sidi_bouzid3.jpg",
    "assets/photos/sidi_bouzid4.jpg"
  ],
  stats: [
    { label: "Région", value: "Centre" },
    { label: "Profil", value: "Agricole" },
    { label: "Atout", value: "Production locale" },
    { label: "Économie", value: "Agro-industrie" }
  ]
},gafsa: {
  name: "Gafsa",
  tagline: "Sud-Ouest • Mines & oasis",
  desc:
`Gafsa est connue pour son activité minière et ses oasis.
Le gouvernorat joue un rôle stratégique dans l’industrie extractive et dispose d’un potentiel touristique naturel.`,
  map: "assets/govs/gafsa.svg",
  photos: [
    "assets/photos/gafsa1.jpg",
    "assets/photos/gafsa2.jpg",
    "assets/photos/gafsa3.jpg",
    "assets/photos/gafsa4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sud-Ouest" },
    { label: "Profil", value: "Minier" },
    { label: "Atout", value: "Oasis" },
    { label: "Industrie", value: "Phosphates" }
  ]
},

tozeur: {
  name: "Tozeur",
  tagline: "Sud • Oasis & tourisme saharien",
  desc:
`Tozeur est un pôle touristique saharien majeur, reconnu pour ses palmeraies et son architecture traditionnelle.
Le gouvernorat attire un tourisme axé sur le désert et la culture locale.`,
  map: "assets/govs/tozeur.svg",
  photos: [
    "assets/photos/tozeur1.jpg",
    "assets/photos/tozeur2.jpeg",
    "assets/photos/tozeur3.gif",
    "assets/photos/tozeur4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sud" },
    { label: "Profil", value: "Tourisme saharien" },
    { label: "Atout", value: "Palmeraies" },
    { label: "Climat", value: "Désertique" }
  ]
},

kebili: {
  name: "Kébili",
  tagline: "Sud • Désert & oasis",
  desc:
`Kébili est un gouvernorat saharien caractérisé par le désert et les oasis.
Il joue un rôle clé dans l’agriculture oasienne et le tourisme désertique.`,
  map: "assets/govs/kebili.svg",
  photos: [
    "assets/photos/kebili1.jpg",
    "assets/photos/kebili2.jpg",
    "assets/photos/kebili3.png",
    "assets/photos/kebili4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sud" },
    { label: "Profil", value: "Saharien" },
    { label: "Atout", value: "Oasis" },
    { label: "Activité", value: "Agriculture oasienne" }
  ]
},

gabes: {
  name: "Gabès",
  tagline: "Sud-Est • Oasis maritime",
  desc:
`Gabès est unique par son oasis maritime et son activité industrielle.
Le gouvernorat combine agriculture, industrie et potentiel économique régional.`,
  map: "assets/govs/gabes.svg",
  photos: [
    "assets/photos/gabes1.jpg",
    "assets/photos/gabes2.jpg",
    "assets/photos/gabes3.jpg",
    "assets/photos/gabes4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sud-Est" },
    { label: "Profil", value: "Industriel" },
    { label: "Atout", value: "Oasis maritime" },
    { label: "Économie", value: "Industrie & agriculture" }
  ]
},

medenine: {
  name: "Médenine",
  tagline: "Sud-Est • Culture & patrimoine",
  desc:
`Médenine est un gouvernorat riche en patrimoine culturel et en traditions locales.
Il joue un rôle clé dans l’économie régionale et le tourisme culturel.`,
  map: "assets/govs/medenine.svg",
  photos: [
    "assets/photos/medenine1.jpg",
    "assets/photos/medenine2.webp",
    "assets/photos/medenine3.jpg",
    "assets/photos/medenine4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sud-Est" },
    { label: "Profil", value: "Culturel" },
    { label: "Atout", value: "Patrimoine" },
    { label: "Économie", value: "Tourisme" }
  ]
},

tataouine: {
  name: "Tataouine",
  tagline: "Sud • Désert & ksour",
  desc:
`Tataouine est caractérisée par ses paysages désertiques et ses ksour traditionnels.
Le gouvernorat dispose d’un potentiel touristique saharien et culturel important.`,
  map: "assets/govs/tataouine.svg",
  photos: [
    "assets/photos/tataouine1.jpg",
    "assets/photos/tataouine2.png",
    "assets/photos/tataouine3.jpg",
    "assets/photos/tataouine4.jpg"
  ],
  stats: [
    { label: "Région", value: "Sud" },
    { label: "Profil", value: "Saharien" },
    { label: "Atout", value: "Ksour" },
    { label: "Tourisme", value: "Culturel" }
  ]
},

djerba: {
  name: "Djerba",
  tagline: "Île • Tourisme international",
  desc:
`Djerba est une destination touristique internationale majeure, connue pour ses plages et sa diversité culturelle.
L’île joue un rôle central dans l’économie touristique du pays.`,
  map: "assets/govs/medenine.svg",
  photos: [
    "assets/photos/djerba1.jpg",
    "assets/photos/djerba2.jpg",
    "assets/photos/djerba3.jpg",
    "assets/photos/djerba4.jpg"
  ],
  stats: [
    { label: "Statut", value: "Île" },
    { label: "Profil", value: "Tourisme" },
    { label: "Atout", value: "Plages" },
    { label: "Rayonnement", value: "International" }
  ]
},

kerkennah: {
  name: "Kerkennah",
  tagline: "Îles • Pêche & calme",
  desc:
`Kerkennah est un archipel connu pour son cadre paisible et son activité de pêche traditionnelle.
Il représente un pôle local important pour l’économie maritime.`,
  map: "assets/govs/sfax.svg",
  photos: [
    "assets/photos/kerkennah1.jpeg",
    "assets/photos/kerkennah2.jpg",
    "assets/photos/kerkennah3.jpg",
    "assets/photos/kerkennah4.jpg"
  ],
  stats: [
    { label: "Statut", value: "Archipel" },
    { label: "Activité", value: "Pêche" },
    { label: "Profil", value: "Maritime" },
    { label: "Cadre", value: "Paisible" }
  ]
},zaghouan: {
  name: "Zaghouan",
  tagline: "Nord-Est • Montagnes & eau",
  desc:
`Zaghouan est un gouvernorat du nord-est caractérisé par son relief montagneux et ses ressources naturelles, notamment l’eau.
Il est connu pour son patrimoine hydraulique historique, ses paysages naturels et son potentiel dans l’agriculture et l’écotourisme.`,
  map: "assets/govs/zaghouan.svg",
  photos: [
    "assets/photos/zaghouan1.jpg",
    "assets/photos/zaghouan2.jpg",
    "assets/photos/zaghouan3.jpg",
    "assets/photos/zaghouan4.jpg"
  ],
  stats: [
    { label: "Région", value: "Nord-Est" },
    { label: "Profil", value: "Montagneux" },
    { label: "Atout", value: "Ressources en eau" },
    { label: "Potentiel", value: "Écotourisme" }
  ]
},




};
