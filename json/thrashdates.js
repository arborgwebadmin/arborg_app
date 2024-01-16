//JavaScript Date functions, Year returns YYYY, Month 0-11, Day 1-31 so when
// creating data if today is 03.08.2022 insert into date function 03.07.2022
// The data
// Gögnin
var temp_JSON = {
    // List of neighbourhoods
    // Listi af hverfum
    hverfi_1: {
        // Gult hverfi, Selfoss/Stokkseyri
        // Listi yfir allar götur í þessu hverfi
        streets: [
            "Kaðlastaðir Eystri", "Eyrarbraut", "Eyrarlón",
            "Sigtún - Stokkseyri", "Mánabakki", "Lindarflöt",
            "Óseyri - Stokkseyri", "Eyjasel", "Blátindur",
            "Sandfell", "Unhóll", "Sælundur", "Sólheimar",
            "Lindarbakki", "Laufás", "Hásteinshús", "Ranakot",
            "Garðhús", "Traðarhus", "Hausthús", "Garðabær - Stokkseyri",
            "Nýikastali", "Sætún", "Sunnuhvoll", "Gimli", "Hafnargata",
            "Skálafell", "Pálmarshús", "Hásteinsvegur", "Sólbakki",
            "Sandprýði", "Sanda", "Sandgerði", "Hafsteinn", "Merkisteinn",
            "Hamrahvoll", "Sjólyst", "Strönd", "Íragerði", "Sæbakki",
            "Sævarland", "Írabakki", "Eystra Íragerði", "Ásgarður",
            "Jaðar - Stokkseyri", "Hátindur", "Fagurtún", "Fagurhóll",
            "Urðarós", "Hvanneyri", "Hraunbakki", "Sævangur", "Lónsbakki",
            "Marbakki", "Ránarbakki", "Skerjabakki", "Bakkasel", "Kuðungur",
            "Sæhvoll", "Vestri-Rauðárhólar", "Nesbrú - Stokkseyri",
            "Knarrarvogur", "Kumbarvogur", "Jörfabakki", "Silfurtún",
            "Hellukot", "Heiðarbrún", "Bræðraborg eldri", "Útgarðar",
            "Vestri Móhús", "Sæfell - Stokkseyri", "Snæfell",
            "Miðtún - Stokkseyri", "Stjörnusteinar", "Hátún",
            "Götuhús", "Björgvin", "Sunnutún", "Baldursheimur", "Tjarnalundur",
            "Setberg", "Tjarnarstígur", "Helgastaðir", "Tjörn", "Pálsbær",
            "Holtsvegur", "Nýborg", "Lyngheiði - Stokkseyri", "Birkihlíð",
            "Bjarg", "Dvergasteinar", "Sólvellir - Stokkseyri", "Símonarhús",
            "Starkaðarhús Eldra", "Starkaðarhús", "Vinaminni","Blómsturvellir",
            "Roðgúll", "Varmidalur", "Lindarberg", "Birkilundur", "Akbraut",
            "Arnarberg", "Skipagerði", "Fagurgerði - Stokkseyri", "Fagrabrekka",
            "Móakot", "Ólafsvellir", "Merkigarður", "Heiðarstekkur",
            "Björkustekkur", "Móstekkur", "Dranghólar", "Kerhólar",
            "Norðurhólar", "Hellishólar", "Vesturhólar", "Akurhólar",
            "Birkihólar", "Grafhólar", "Kjarrhólar", "Álfhólar", "Dverghólar",
            "Tröllhólar", "Berghólar", "Nauthólar", "Kálfhólar", "Folaldahólar",
            "Hrafnhólar", "Tjaldhólar", "Hraunhella", "Móhella", "Fagrahella",
            "Gráhella", "Vallarland", "Vörðuland", "Móland", "Stekkjarland",
            "Snæland", "Seljaland", "Smáraland", "Akraland", "Mýrarland",
            "Kelduland", "Grundarland", "Hulduland", "Fagraland", "Bjarmaland",
            "Álfaland", "Engjaland", "Tunguvegur", "Seljavegur", "Sléttuvegur",
            "Mánavegur", "Þóristún", "Smáratún", "Ársalir", "Heiðarvegur",
            "Kirkjuvegur", "Sunnuvegur", "Hafnartún", "Tryggvatorg", "Sigtún",
            "Bankavegur", "Skólavellir", "Sólvellir", "Álfheimar",
            "Reynivellir", "Vallholt", "Víðivellir", "Birkivellir",
            "Rauðholt", "Hjarðarholt", "Stekkholt", "Réttarholt", "Hrísholt",
            "Merkiland", "Grænumörk", "Þórsmörk", "Heiðmörk", "Laugarbakki",
            "Fagurgerði", "Grænuvellir", "Hörðuvellir", "Hraunbakki",
            "Austurvegur", "Strandgata", "Suðurbraut", "Brúaarstræti",
            "Engjavegur", "Tryggvagata", "Árvegur", "Austurhólar", "Hraunhólar",
            "Grænumörk", "Hlaðvellir", "Melhólar"
        ],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
            new Date(2023,11,8),new Date(2024,0,3),new Date(2024,0,4),new Date(2024,0,5),new Date(2024,0,30),new Date(2024,0,31),new Date(2024,1,1),new Date(2024,1,2),
            new Date(2024,1,27),new Date(2024,1,28),new Date(2024,1,29),new Date(2024,2,1),new Date(2024,2,21),new Date(2024,2,22),new Date(2024,2,26),
            new Date(2024,2,27),new Date(2024,3,23),new Date(2024,3,24),new Date(2024,3,26),new Date(2024,4,22),new Date(2024,4,23),new Date(2024,4,24),
            new Date(2024,5,19),new Date(2024,5,20),new Date(2024,5,21),new Date(2024,6,16),new Date(2024,6,17),new Date(2024,6,18),new Date(2024,6,19),
            new Date(2024,7,13),new Date(2024,7,14),new Date(2024,7,15),new Date(2024,7,16),new Date(2024,8,10),new Date(2024,8,11),new Date(2024,8,12),
            new Date(2024,8,13),new Date(2024,9,8),new Date(2024,9,9),new Date(2024,9,10),new Date(2024,9,11),new Date(2024,10,5),new Date(2024,10,6),
            new Date(2024,10,7),new Date(2024,10,8),new Date(2024,11,3),new Date(2024,11,4),new Date(2024,11,5),new Date(2024,11,6)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2023,11,22),new Date(2024,0,17),new Date(2024,0,18),new Date(2024,0,19),new Date(2024,1,14),new Date(2024,1,15),new Date(2024,1,16),new Date(2024,2,13),
            new Date(2024,2,14),new Date(2024,2,15),new Date(2024,3,12),new Date(2024,3,15),new Date(2024,3,16),new Date(2024,4,8),new Date(2024,4,10),
            new Date(2024,5,5),new Date(2024,5,6),new Date(2024,5,7),new Date(2024,6,3),new Date(2024,6,4),new Date(2024,6,4),new Date(2024,6,31),
            new Date(2024,7,1),new Date(2024,7,2),new Date(2024,7,28),new Date(2024,7,29),new Date(2024,7,30),new Date(2024,8,25),new Date(2024,8,26),
            new Date(2024,8,27),new Date(2024,9,23),new Date(2024,9,24),new Date(2024,9,25),new Date(2024,10,20),new Date(2024,10,21),new Date(2024,10,22),
            new Date(2024,11,18),new Date(2024,11,19),new Date(2024,11,20)
        ]
    },
    hverfi_2: {
        // Blátt hverfi, Selfoss/Eyrabakki
        // Listi yfir allar götur í þessu hverfi
        streets: [
            "Álalækur", "Eyrarlækur", "Laxalækur", "Bleikjulækur", "Hagalækur",
            "Urriðalækur", "Sílalækur", "Þúfulækur", "Starmói", "Kjarrmói",
            "Urðarmói", "Tjarnarmói", "Lyngmói", "Fífumói", "Fossvegur",
            "Langamýri", "Kringlumýri", "Lækjarbakki", "Laxabakki", "Hellubakki",
            "Árbakki", "Fagramýri", "Austurmýri", "Sóltún", "Fosstún",
            "Suðurengi", "Lágengi", "Miðengi", "Dælengi", "Starengi",
            "Háengi", "Lambhagi", "Laufhagi", "Reyrhagi", "Grashagi",
            "Fossheiði", "Nauthagi", "Úthagi", "Heimahagi", "Lyngheiði",
            "Háheiði", "Gagnheiði", "Lágheiði", "Álftarimi", "Gauksrimi",
            "Lóurimi", "Spóarimi", "Þrastarimi", "Erlurimi", "Urðartjörn",
            "Aðaltjörn", "Sílatjörn", "Bakkatjörn", "Seltjörn", "Fífutjörn",
            "Grundartjörn", "Hólatjörn", "Baugstjörn", "Ástjörn", "Miðtún",
            "Jórutún", "Ártún", "Jaðar - Eyrarbakki", "Hrefnutangi", "Hafnarbrú",
            "Túngata", "Nesbrú - Eyrarbakki", "Búðarstígur", "Bárðarbrú",
            "Eyrargata", "Hjallavegur", "Háeyrarvegur", "Hjalladæl", "Álfsstétt",
            "Þykkvaflöt", "Hulduhóll", "Merkisteinsvellir", "Steinskot",
            "Heiðdalshús", "Háeyrarvellir", "Mundakot", "Hvammur", "Kirkjuhvol",
            "Álfastétt", "Gamla Hraun", "Traðarhús", "Ásaberg", "Garðabær - Eyrabakki",
            "Steinsbær", "Brenna", "Sæfell - Eyrarbakki", "Óseyri - Eyrarbakki",
            "Bakarísstígur", "Hreggviður", "Sólvangur", "Einarshöfn", "Grenigrund",
            "Birkigrund", "Furugrund", "Eyravegur", "Hrauntjörn"
        ],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi

            new Date(2023,11,29),new Date(2024,0,24),new Date(2024,0,24),new Date(2024,0,26),new Date(2024,1,21),new Date(2024,1,22),new Date(2024,1,23),new Date(2024,2,18),
            new Date(2024,2,19),new Date(2024,2,20),new Date(2024,3,17),new Date(2024,3,18),new Date(2024,3,19),new Date(2024,4,15),new Date(2024,4,16),
            new Date(2024,4,17),new Date(2024,5,12),new Date(2024,5,13),new Date(2024,5,14),new Date(2024,6,10),new Date(2024,6,11),new Date(2024,6,12),
            new Date(2024,7,7),new Date(2024,7,8),new Date(2024,7,9),new Date(2024,8,4),new Date(2024,8,5),new Date(2024,8,6),new Date(2024,9,2),
            new Date(2024,9,3),new Date(2024,9,4),new Date(2024,9,30),new Date(2024,9,31),new Date(2024,10,1),new Date(2024,10,27),new Date(2024,10,28),
            new Date(2024,10,29),new Date(2024,11,23),new Date(2024,11,27),new Date(2024,11,30)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
        new Date(2023,11,15),new Date(2024,0,10),new Date(2024,0,11),new Date(2024,0,12),new Date(2024,1,7),new Date(2024,1,8),new Date(2024,1,9),new Date(2024,2,6),
        new Date(2024,2,7),new Date(2024,2,8),new Date(2024,3,5),new Date(2024,3,8),new Date(2024,3,9),new Date(2024,4,2),new Date(2024,4,3),
        new Date(2024,4,29),new Date(2024,4,30),new Date(2024,4,31),new Date(2024,5,26),new Date(2024,5,27),new Date(2024,5,28),new Date(2024,6,24),
        new Date(2024,6,25),new Date(2024,6,26),new Date(2024,7,21),new Date(2024,7,22),new Date(2024,7,23),new Date(2024,8,18),new Date(2024,8,19),
        new Date(2024,8,20),new Date(2024,9,16),new Date(2024,9,17),new Date(2024,9,18),new Date(2024,10,13),new Date(2024,10,14),new Date(2024,10,15),
        new Date(2024,11,11),new Date(2024,11,12),new Date(2024,11,13)
        ]
    },
    hverfi_3: {
        //Búgarðabyggð/dreifbýli
        streets: [
            "Dreifbýli", "Búgarðabyggð", "Vesturmúli", "Norðurbraut", "Norðurgata", "Norðurleið", "Suðurgata", "Suðurleið", "Sandvíkurhreppur"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
        new Date(2023,11,4),new Date(2024,0,2),new Date(2024,0,29),new Date(2024,1,26),new Date(2024,2,25),new Date(2024,3,22),new Date(2024,4,21),new Date(2024,5,18),
        new Date(2024,6,15),new Date(2024,7,12),new Date(2024,8,9),new Date(2024,9,7),new Date(2024,10,4),new Date(2024,11,2)
            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
        new Date(2023,11,18),new Date(2024,0,16),new Date(2024,1,13),new Date(2024,2,11),new Date(2024,3,11),new Date(2024,4,6),new Date(2024,5,3),new Date(2024,6,1),
        new Date(2024,6,29),new Date(2024,7,26),new Date(2024,8,23),new Date(2024,9,21),new Date(2024,10,18),new Date(2024,11,16)
            ],
    },
    hverfi_4: {
        //Blokkir
        streets: [
            "Blokkir", "Fjölbýli"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
        new Date(2023,11,27),new Date(2024,0,10),new Date(2024,0,22),new Date(2024,1,2),new Date(2024,1,12),new Date(2024,1,22),new Date(2024,2,1),new Date(2024,2,11),
        new Date(2024,2,21),new Date(2024,3,2),new Date(2024,3,12),new Date(2024,3,22),new Date(2024,4,2),new Date(2024,4,13),new Date(2024,4,22),
        new Date(2024,4,30),new Date(2024,5,10),new Date(2024,5,19),new Date(2024,5,28),new Date(2024,6,8),new Date(2024,6,19),new Date(2024,6,29),
        new Date(2024,7,8),new Date(2024,7,19),new Date(2024,7,30),new Date(2024,8,9),new Date(2024,8,19),new Date(2024,8,30),new Date(2024,9,11),
        new Date(2024,9,21),new Date(2024,9,31),new Date(2024,10,11),new Date(2024,10,22),new Date(2024,11,2),new Date(2024,11,12),new Date(2024,11,23)

            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
        new Date(2023,0,11),new Date(2024,0,4),new Date(2024,0,18),new Date(2024,1,1),new Date(2024,1,15),new Date(2024,1,29),new Date(2024,2,14),new Date(2024,2,27),
        new Date(2024,3,11),new Date(2024,3,24),new Date(2024,4,8),new Date(2024,4,23),new Date(2024,5,6),new Date(2024,5,20),new Date(2024,6,4),
        new Date(2024,6,18),new Date(2024,7,1),new Date(2024,7,15),new Date(2024,7,29),new Date(2024,8,12),new Date(2024,8,26),new Date(2024,9,10),
        new Date(2024,9,24),new Date(2024,10,7),new Date(2024,10,21),new Date(2024,11,5),new Date(2024,11,19)
            ]
    }
};
export default temp_JSON;
