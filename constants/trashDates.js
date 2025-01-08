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
            ,new Date(2024,11,6),
            // 2025
            new Date(2025,0,2),new Date(2025,0,3),new Date(2025,0,6),new Date(2025,0,7),new Date(2025,0,29),new Date(2025,0,30),new Date(2025,0,31),
            new Date(2025,1,26),new Date(2025,1,27),new Date(2025,1,28),new Date(2025,2,26),new Date(2025,2,27),new Date(2025,2,28),new Date(2025,3,23),            
            new Date(2025,3,23),new Date(2025,3,25),new Date(2025,4,21),new Date(2025,4,22),new Date(2025,4,23),new Date(2025,5,18),new Date(2025,5,19),new Date(2025,5,20),
            new Date(2025,6,16),new Date(2025,6,17),new Date(2025,6,18),new Date(2025,7,13),new Date(2025,7,14),new Date(2025,7,15),new Date(2025,8,10),new Date(2025,8,11),
            new Date(2025,8,12),new Date(2025,9,8),new Date(2025,9,9),new Date(2025,9,10),new Date(2025,10,5),new Date(2025,10,6),new Date(2025,10,7),new Date(2025,11,2),
            new Date(2025,11,3),new Date(2025,11,4),new Date(2025,11,5),new Date(2025,11,30)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
           new Date(2024,11,20),
            //2025
            new Date(2025,0,16),new Date(2025,0,17),new Date(2025,1,12),new Date(2025,1,13),new Date(2025,1,14),new Date(2025,2,12),new Date(2025,2,13),
            new Date(2025,2,14),new Date(2025,3,9),new Date(2025,3,10),new Date(2025,3,11),new Date(2025,4,7),new Date(2025,4,8),new Date(2025,4,9),new Date(2025,5,4),
            new Date(2025,5,5),new Date(2025,5,6),new Date(2025,6,2),new Date(2025,6,3),new Date(2025,6,4),new Date(2025,6,30),new Date(2025,6,31),new Date(2025,7,1),
            new Date(2025,7,27),new Date(2025,7,28),new Date(2025,7,29),new Date(2025,8,24),new Date(2025,8,25),new Date(2025,8,26),new Date(2025,9,22),new Date(2025,9,23),new Date(2025,9,24)
            new Date(2025,10,19),new Date(2025,10,20),new Date(2025,10,21),new Date(2025,11,17),new Date(2025,11,18),new Date(2025,11,19)
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

            new Date(2024,11,23),new Date(2024,11,27),new Date(2024,11,30),
            //2025
            new Date(2025,0,22),new Date(2025,0,23),new Date(2025,0,24),new Date(2025,1,19),new Date(2025,1,20),new Date(2025,1,21),new Date(2025,2,19),new Date(2025,2,20),
            new Date(2025,2,21),new Date(2025,3,14),new Date(2025,3,15),new Date(2025,3,16),new Date(2025,4,14),new Date(2025,4,15),new Date(2025,4,16),new Date(2025,5,11),
            new Date(2025,5,12),new Date(2025,5,13),new Date(2025,6,9),new Date(2025,6,10),new Date(2025,6,11),new Date(2025,7,6),new Date(2025,7,7),new Date(2025,7,8),
            new Date(2025,8,3),new Date(2025,8,4),new Date(2025,8,5),new Date(2025,9,1),new Date(2025,9,2),new Date(2025,9,3),new Date(2025,9,29),new Date(2025,9,30),new Date(2025,9,31),
            new Date(2025,10,26),new Date(2025,10,27),new Date(2025,10,28),new Date(2025,11,22),new Date(2025,11,23)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
        new Date(2024,11,13),
         //2025
        new Date(2025,0,8),new Date(2025,0,9),new Date(2025,0,10),new Date(2025,1,5),new Date(2025,1,6),new Date(2025,1,7),new Date(2025,2,5),new Date(2025,2,6),
        new Date(2025,2,7),new Date(2025,3,2),new Date(2025,3,3),new Date(2025,3,4),new Date(2025,3,30),new Date(2025,4,2),new Date(2025,4,28),new Date(2025,4,30),new Date(2025,5,25),
        new Date(2025,5,26),new Date(2025,5,27),new Date(2025,6,23),new Date(2025,6,24),new Date(2025,6,25),new Date(2025,7,20),new Date(2025,7,21),new Date(2025,7,22),
        new Date(2025,8,17),new Date(2025,8,18),new Date(2025,8,19),new Date(2025,9,15),new Date(2025,9,16),new Date(2025,9,17),new Date(2025,10,12),new Date(2025,10,13),new Date(2025,10,14),
        new Date(2025,11,10),new Date(2025,11,11),new Date(2025,11,12)
        ]
    },
    hverfi_3: {
        //Búgarðabyggð/dreifbýli
        streets: [
            "Dreifbýli", "Búgarðabyggð", "Vesturmúli", "Norðurbraut", "Norðurgata", "Norðurleið", "Suðurgata", "Suðurleið", "Sandvíkurhreppur"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
            new Date(2024,11,2),
            //2025
            new Date(2025,0,27),new Date(2025,1,24),new Date(2025,2,24),new Date(2025,3,22),new Date(2025,4,19),new Date(2025,5,16),
            new Date(2025,6,14),new Date(2025,7,11),new Date(2025,8,8),new Date(2025,9,6),new Date(2025,10,3),new Date(2024,11,1),new Date(2024,11,29)    
            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
        new Date(2024,11,16),
            //2025
            new Date(2025,0,15),new Date(2025,1,10),new Date(2025,2,10),new Date(2025,3,7),new Date(2025,4,5),new Date(2025,5,2),new Date(2025,5,30),
            new Date(2025,6,28),new Date(2025,7,25),new Date(2025,8,22),new Date(2025,9,20),new Date(2025,10,17),new Date(2024,11,15)                    
            ],
    },
    hverfi_4: {
        //Blokkir
        streets: [
            "Blokkir", "Fjölbýli"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
        new Date(2024,11,23),
            //2025
            new Date(2025,0,2),new Date(2025,0,13),new Date(2025,0,23),new Date(2025,1,3),new Date(2025,1,14),new Date(2025,1,25),new Date(2025,2,7),new Date(2025,2,17),
            new Date(2025,2,27),new Date(2025,3,7),new Date(2025,3,16),new Date(2025,3,25),new Date(2025,4,5),new Date(2025,4,15),new Date(2025,4,26),
            new Date(2025,5,5),new Date(2025,5,16),new Date(2025,5,26),new Date(2025,6,7),new Date(2025,6,17),new Date(2025,6,28),
            new Date(2025,7,7),new Date(2025,7,18),new Date(2025,7,28),new Date(2025,8,8),new Date(2025,8,18),new Date(2025,8,29),new Date(2025,9,9),
            new Date(2025,9,20),new Date(2025,9,30),new Date(2025,10,7),new Date(2025,10,17),new Date(2025,10,27),new Date(2025,11,8),new Date(2025,11,18),new Date(2025,11,29)
            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
            new Date(2024,11,19),
            //2025
            new Date(2025,0,3),new Date(2025,0,15),new Date(2025,0,29),new Date(2025,1,12),new Date(2025,1,26),new Date(2025,2,12),new Date(2025,2,26),
            new Date(2025,3,9),new Date(2025,3,23),new Date(2025,4,7),new Date(2025,4,21),new Date(2025,5,4),new Date(2025,5,18),new Date(2025,6,2),new Date(2025,6,16),new Date(2025,6,30),
            new Date(2025,7,6),new Date(2025,7,21),new Date(2025,8,3),new Date(2025,8,17),new Date(2025,9,1),new Date(2025,9,16),new Date(2025,9,29),new Date(2025,10,13),new Date(2025,10,26),
            new Date(2025,11,11),new Date(2025,11,23)    
            ],
             deep_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
            //Kemur nýtt inn 2025
            new Date(2025,0,7),new Date(2025,1,4),new Date(2025,2,4),new Date(2025,3,1),new Date(2025,3,29),new Date(2025,4,27),new Date(2025,5,24),new Date(2025,6,22),new Date(2025,7,19),
            new Date(2025,8,16),new Date(2025,9,14),new Date(2025,10,11),new Date(2025,11,9)    
            ]
    }
};
export default temp_JSON;
