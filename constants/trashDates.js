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
            "Kaðlastaðir Eystri", "Eyrarbraut", "Eyrarlón", "Hæðarland","Fífuland",
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
            new Date(2025,11,6),
            // 2026
            new Date(2026,0,2),new Date(2026,0,28),new Date(2026,0,29),new Date(2026,0,30),
            new Date(2026,1,25),new Date(2026,1,26),new Date(2026,1,27),new Date(2026,2,23),new Date(2026,2,24),new Date(2026,2,25),new Date(2026,2,26),new Date(2026,2,27),
            new Date(2026,3,22),new Date(2026,3,24),new Date(2026,4,20),new Date(2026,4,21),new Date(2026,4,22),new Date(2026,5,18),new Date(2026,5,19),
            new Date(2026,6,15),new Date(2026,6,16),new Date(2026,6,17),new Date(2026,7,12),new Date(2026,7,13),new Date(2026,7,14),new Date(2026,8,9),new Date(2026,8,10),
            new Date(2026,8,11),new Date(2026,9,7),new Date(2026,9,8),new Date(2026,9,9),new Date(2026,10,4),new Date(2026,10,5),new Date(2026,10,6),new Date(2026,11,2),
            new Date(2026,11,3),new Date(2026,11,4),new Date(2026,11,30)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
           new Date(2025,11,19),
            //2026
            new Date(2026,0,14),new Date(2026,0,15),new Date(2026,0,16),new Date(2026,1,11),new Date(2026,1,12),new Date(2026,1,13),new Date(2026,2,11),
            new Date(2026,2,12),new Date(2026,2,13),new Date(2026,3,9),new Date(2026,3,10),new Date(2026,3,13),new Date(2026,3,14),new Date(2026,4,6),new Date(2026,4,7),new Date(2026,4,8),
            new Date(2026,5,3),new Date(2026,5,4),new Date(2026,5,5),new Date(2026,6,1),new Date(2026,6,2),new Date(2026,6,3),new Date(2026,6,29),new Date(2026,6,30),new Date(2026,6,31),
            new Date(2026,7,26),new Date(2026,7,27),new Date(2026,7,28),new Date(2026,8,23),new Date(2026,8,24),new Date(2026,8,25),new Date(2026,9,21),
            new Date(2026,9,22),new Date(2026,9,23), new Date(2026,10,18),new Date(2026,10,19),new Date(2026,10,20),new Date(2026,11,16),new Date(2026,11,17),new Date(2026,11,18)
        ],
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
            "Birkigrund", "Furugrund", "Eyravegur", "Hrauntjörn", "Atlavík", "Aðalvík",
            "Bergvík", "Boðavík", "Eyrarvík", "Engjavík", "Goðavík", "Hamravík", "Fossvík",
            "Selfossvegur"
        ],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi

            new Date(2025,11,22),new Date(2025,11,23),
            //2026
            new Date(2026,0,21),new Date(2026,0,22),new Date(2026,0,23),new Date(2026,1,18),new Date(2026,1,19),new Date(2026,1,20),new Date(2026,2,16),new Date(2026,2,17),
            new Date(2026,2,18),new Date(2026,3,15),new Date(2026,3,16),new Date(2026,3,17),new Date(2026,4,13),new Date(2026,4,15),new Date(2026,5,10),
            new Date(2026,5,10),new Date(2026,5,11),new Date(2026,5,12),new Date(2026,6,8),new Date(2026,6,9),new Date(2026,6,10),new Date(2026,7,5),new Date(2026,7,6),new Date(2026,7,7),
            new Date(2026,8,2),new Date(2026,8,3),new Date(2026,8,4),new Date(2026,8,30),new Date(2026,9,1),new Date(2026,9,2),new Date(2026,9,28),new Date(2026,9,29),new Date(2026,9,30),
            new Date(2026,10,25),new Date(2026,10,26),new Date(2026,10,27),new Date(2026,11,21),new Date(2026,11,22),new Date(2026,11,23)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
        new Date(2025,11,12),
         //2026
        new Date(2026,0,7),new Date(2026,0,8),new Date(2026,0,9),new Date(2026,1,4),new Date(2026,1,5),new Date(2026,1,6),new Date(2026,2,4),new Date(2026,2,5),new Date(2026,2,6),
        new Date(2026,2,30),new Date(2026,2,31),
        new Date(2026,3,1),new Date(2026,3,28),new Date(2026,3,29),new Date(2026,3,30),new Date(2026,4,27),new Date(2026,4,28),new Date(2026,4,29),new Date(2026,5,24),
        new Date(2026,5,25),new Date(2026,5,26),new Date(2026,6,22),new Date(2026,6,23),new Date(2026,6,24),new Date(2026,7,19),new Date(2026,7,20),new Date(2026,7,21),
        new Date(2026,8,16),new Date(2026,8,17),new Date(2026,8,18),new Date(2026,9,14),new Date(2026,9,15),new Date(2026,9,16),new Date(2026,10,11),new Date(2026,10,12),new Date(2026,10,13),
        new Date(2026,11,9),new Date(2026,11,10),new Date(2026,11,11)
        ]
    },
    hverfi_3: {
        //Búgarðabyggð/dreifbýli
        streets: [
            "Dreifbýli", "Búgarðabyggð", "Vesturmúli", "Norðurbraut", "Norðurgata", "Norðurleið", "Suðurgata", "Suðurleið", "Sandvíkurhreppur"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
            new Date(2025,11,29),
            //2026
            new Date(2026,0,26),new Date(2026,0,27),new Date(2026,1,23),new Date(2026,1,24),new Date(2026,2,19),new Date(2026,2,20),new Date(2026,3,20),new Date(2026,3,21),
            new Date(2026,4,18),new Date(2026,4,19),new Date(2026,5,15),new Date(2026,5,16),new Date(2026,6,13),new Date(2026,6,14),new Date(2026,7,10),new Date(2026,7,11),
            new Date(2026,8,7),new Date(2026,8,8),new Date(2026,9,5),new Date(2026,9,6),new Date(2026,10,2),new Date(2026,10,3),new Date(2026,10,30),new Date(2024,11,1),
            new Date(2026,11,28),new Date(2024,11,29)    
            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
        new Date(2025,11,15),
            //2026
            new Date(2026,0,12),new Date(2026,0,13),new Date(2026,1,9),new Date(2026,1,10),new Date(2026,2,9),new Date(2026,2,10),new Date(2026,3,7),new Date(2026,3,8),new Date(2026,4,7),
            new Date(2026,4,8),new Date(2026,5,1),new Date(2026,5,2),new Date(2026,5,29),new Date(2026,5,30),
            new Date(2026,6,27),new Date(2026,6,28),new Date(2026,7,24),new Date(2026,7,25),new Date(2026,8,21),new Date(2026,8,22),new Date(2026,9,19),new Date(2026,9,20),
            new Date(2026,10,16),new Date(2026,10,17),new Date(2026,11,14),new Date(2024,11,15)                    
            ],
    },
    hverfi_4: {
        //Blokkir
        streets: [
            "Blokkir", "Fjölbýli"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
        new Date(2025,11,29),
            //2026
            new Date(2026,0,8),new Date(2026,0,19),new Date(2026,0,29),new Date(2026,1,9),new Date(2026,1,19),new Date(2026,2,2),new Date(2026,2,12),
            new Date(2026,2,23),new Date(2026,3,1),new Date(2026,3,10),new Date(2026,3,20),new Date(2026,3,30),new Date(2026,4,8),new Date(2026,4,18),new Date(2026,4,28),
            new Date(2026,5,8),new Date(2026,5,19),new Date(2026,5,29),new Date(2026,6,9),new Date(2026,6,20),new Date(2026,6,30),
            new Date(2026,7,10),new Date(2026,7,20),new Date(2026,7,31),new Date(2026,8,10),new Date(2026,8,21),new Date(2026,9,1),
            new Date(2026,9,12),new Date(2026,9,22),new Date(2026,10,2),new Date(2026,10,12),new Date(2026,10,23),new Date(2026,11,3),new Date(2026,11,14),new Date(2026,11,23)
            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
            new Date(2025,11,23),
            //2026
            new Date(2026,0,2),new Date(2026,0,14),new Date(2026,0,28),new Date(2026,1,11),new Date(2026,1,25),new Date(2026,2,11),new Date(2026,2,25),
            new Date(2026,3,8),new Date(2026,3,22),new Date(2026,4,6),new Date(2026,4,20),new Date(2026,5,3),new Date(2026,5,18),new Date(2026,6,1),new Date(2026,6,15),new Date(2026,6,29),
            new Date(2026,7,12),new Date(2026,7,26),new Date(2026,8,9),new Date(2026,8,23),new Date(2026,9,7),new Date(2026,9,21),new Date(2026,10,4),new Date(2026,10,18),
            new Date(2026,11,2),new Date(2026,11,16),new Date(2026,11,30)    
            ],
             deep_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
            //Kemur nýtt inn 2026
            new Date(2026,0,13),new Date(2026,0,27),new Date(2026,1,10),new Date(2026,1,24),new Date(2026,2,10),new Date(2026,2,24),new Date(2026,3,7),new Date(2026,3,21),new Date(2026,4,5),
            new Date(2026,4,19),new Date(2026,5,2),new Date(2026,5,16),new Date(2026,5,30),new Date(2026,6,14),new Date(2026,6,28),new Date(2026,7,11),new Date(2026,7,25),
            new Date(2026,8,8),new Date(2026,8,22),new Date(2026,9,6),new Date(2026,9,20),new Date(2026,10,3),new Date(2026,10,17),new Date(2026,11,1),new Date(2026,11,15,
            new Date(2026,11,29))    
            ]
    }
};
export default temp_JSON;
