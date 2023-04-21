//JavaScript Date functions, Year returns YYYY, Month 0-11, Day 1-31 so when creating data if today is 03.08.2022 insert into date function 03.07.2022
// The data
// Gögnin
var temp_JSON = {
    // List of neighbourhoods
    // Listi af hverfum
    hverfi_1: { 
        // Gult hverfi, Selfoss/Stokkseyri
        // Listi yfir allar götur í þessu hverfi
        streets: [
            "Kaðlastaðir Eystri", "Eyrarbraut", "Eyrarlón", "Sigtún - Stokkseyri", "Mánabakki", "Lindarflöt", "Óseyri - Stokkseyri", "Eyjasel", "Blátindur", 
            "Sandfell", "Unhóll", "Sælundur", "Sólheimar", "Lindarbakki", "Laufás", "Hásteinshús", "Ranakot", "Garðhús", "Traðarhus", "Hausthús", "Garðabær - Stokkseyri",
            "Nýikastali", "Sætún", "Sunnuhvoll", "Gimli", "Hafnargata", "Skálafell", "Pálmarshús", "Hásteinsvegur", "Sólbakki", "Sandprýði", "Sanda", "Sandgerði", 
            "Hafsteinn", "Merkisteinn", "Hamrahvoll", "Sjólyst", "Strönd", "Íragerði", "Sæbakki", "Sævarland", "Írabakki", "Eystra Íragerði", "Ásgarður", 
            "Jaðar - Stokkseyri", "Hátindur", "Fagurtún", "Fagurhóll", "Urðarós", "Hvanneyri", "Hraunbakki", "Sævangur", "Lónsbakki", "Marbakki", "Ránarbakki", 
            "Skerjabakki", "Bakkasel", "Kuðungur", "Sæhvoll", "Vestri-Rauðárhólar", "Nesbrú - Stokkseyri", "Knarrarvogur", "Kumbarvogur", "Jörfabakki", "Silfurtún", 
            "Hellukot", "Heiðarbrún", "Bræðraborg eldri", "Útgarðar", "Vestri Móhús", "Sæfell - Stokkseyri", "Snæfell", "Miðtún - Stokkseyri", "Stjörnusteinar", "Hátún", 
            "Götuhús", "Björgvin", "Sunnutún", "Baldursheimur", "Tjarnalundur", "Setberg", "Tjarnarstígur", "Helgastaðir", "Tjörn", "Pálsbær", "Holtsvegur", "Nýborg", 
            "Lyngheiði - Stokkseyri", "Birkihlíð", "Bjarg", "Dvergasteinar", "Sólvellir - Stokkseyri", "Símonarhús", "Starkaðarhús Eldra", "Starkaðarhús", "Vinaminni", 
            "Blómsturvellir", "Roðgúll", "Varmidalur", "Lindarberg", "Birkilundur", "Akbraut", "Arnarberg", "Skipagerði", "Fagurgerði - Stokkseyri", "Fagrabrekka", 
            "Móakot", "Ólafsvellir", "Merkigarður", "Heiðarstekkur", "Björkustekkur", "Móstekkur", "Dranghólar", "Kerhólar", "Norðurhólar", "Hellishólar", "Vesturhólar", 
            "Akurhólar", "Birkihólar", "Grafhólar", "Kjarrhólar", "Álfhólar", "Dverghólar", "Tröllhólar", "Berghólar", "Nauthólar", "Kálfhólar", "Folaldahólar", 
            "Hrafnhólar", "Tjaldhólar", "Hraunhella", "Móhella", "Fagrahella", "Gráhella", "Vallarland", "Vörðuland", "Móland", "Stekkjarland", "Snæland", "Seljaland", 
            "Smáraland", "Akraland", "Mýrarland", "Kelduland", "Grundarland", "Hulduland", "Fagraland", "Bjarmaland", "Álfaland", "Engjaland", "Tunguvegur", "Seljavegur", 
            "Sléttuvegur", "Mánavegur", "Þóristún", "Smáratún", "Ársalir", "Heiðarvegur", "Kirkjuvegur", "Sunnuvegur", "Hafnartún", "Tryggvatorg", "Sigtún", "Bankavegur", 
            "Skólavellir", "Sólvellir", "Álfheimar", "Reynivellir", "Vallholt", "Víðivellir", "Birkivellir", "Rauðholt", "Hjarðarholt", "Stekkholt", "Réttarholt", 
            "Hrísholt", "Merkiland", "Grænumörk", "Þórsmörk", "Heiðmörk", "Laugarbakki", "Fagurgerði", "Grænuvellir", "Hörðuvellir", "Hraunbakki", "Austurvegur", 
            "Strandgata", "Suðurbraut", "Brúaarstræti", "Engjavegur", "Tryggvagata", "Árvegur", "Austurhólar", "Hraunhólar", "Grænumörk", "Hlaðvellir", "Melhólar"
        ],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
            new Date(2023,3,26),new Date(2023,3,27),new Date(2023,3,28), new Date(2023,4,24),
            new Date(2023,4,25),new Date(2023,4,26),new Date(2023,5,21),new Date(2023,5,22),new Date(2023,5,23),new Date(2023,6,19),new Date(2023,6,20),
            new Date(2023,6,12),new Date(2023,7,16),new Date(2023,7,17),new Date(2023,7,18),new Date(2023,8,13),new Date(2023,8,14),new Date(2023,8,15),
            new Date(2023,9,11),new Date(2023,9,12),new Date(2023,9,13),new Date(2023,10,8),new Date(2023,10,9),new Date(2023,10,10),new Date(2023,11,6),
            new Date(2023,11,7),new Date(2023,11,8),
        
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2023,3,13),new Date(2023,3,14),new Date(2023,3,17),new Date(2023,4,11),new Date(2023,4,12),new Date(2023,4,15),
            new Date(2023,5,7),new Date(2023,5,8),new Date(2023,5,9),new Date(2023,6,5),new Date(2023,6,6),new Date(2023,6,7),new Date(2023,7,2),
            new Date(2023,7,3),new Date(2023,7,4),new Date(2023,7,30),new Date(2023,7,31),new Date(2023,8,1),new Date(2023,8,27),new Date(2023,8,28),
            new Date(2023,8,29),new Date(2023,9,25),new Date(2023,9,26),new Date(2023,9,27),new Date(2023,10,22),new Date(2023,10,23),new Date(2023,10,24),
            new Date(2023,11,20),new Date(2023,11,21),new Date(2023,11,22),
        ],
    },
    hverfi_2: { 
        // Blátt hverfi, Selfoss/Eyrabakki
        // Listi yfir allar götur í þessu hverfi
        streets: [
        "Álalækur", "Eyrarlækur", "Laxalækur", "Bleikjulækur", "Hagalækur", "Urriðalækur", "Sílalækur", "Þúfulækur", "Starmói", "Kjarrmói", "Urðarmói", "Tjarnarmói", 
        "Lyngmói", "Fífumói", "Fossvegur", "Langamýri", "Kringlumýri", "Lækjarbakki", "Laxabakki", "Hellubakki", "Árbakki", "Fagramýri", "Austurmýri", "Sóltún", 
        "Fosstún", "Suðurengi", "Lágengi", "Miðengi", "Dælengi", "Starengi", "Háengi", "Lambhagi", "Laufhagi", "Reyrhagi", "Grashagi", "Fossheiði", "Nauthagi", "Úthagi", 
        "Heimahagi", "Lyngheiði", "Háheiði", "Gagnheiði", "Lágheiði", "Álftarimi", "Gauksrimi", "Lóurimi", "Spóarimi", "Þrastarimi", "Erlurimi", "Urðartjörn", "Aðaltjörn", 
        "Sílatjörn", "Bakkatjörn", "Seltjörn", "Fífutjörn", "Grundartjörn", "Hólatjörn", "Baugstjörn", "Ástjörn", "Miðtún", "Jórutún", "Ártún", "Jaðar - Eyrarbakki", 
        "Hrefnutangi", "Hafnarbrú", "Túngata", "Nesbrú - Eyrarbakki", "Búðarstígur", "Bárðarbrú", "Eyrargata", "Hjallavegur", "Háeyrarvegur", "Hjalladæl", "Álfsstétt", 
        "Þykkvaflöt", "Hulduhóll", "Merkisteinsvellir", "Steinskot", "Heiðdalshús", "Háeyrarvellir", "Mundakot", "Hvammur", "Kirkjuhvol", "Álfastétt", "Gamla Hraun", 
        "Traðarhús", "Ásaberg", "Garðabær - Eyrabakki", "Steinsbær", "Brenna", "Sæfell - Eyrarbakki", "Óseyri - Eyrarbakki", "Bakarísstígur", "Hreggviður", "Sólvangur", 
        "Einarshöfn", "Grenigrund", "Birkigrund", "Furugrund", "Eyravegur", "Hrauntjörn"],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi


            new Date(2023,3,21),new Date(2023,3,25),
            new Date(2023,4,17),new Date(2023,4,18),new Date(2023,4,19),new Date(2023,5,14),new Date(2023,5,15),new Date(2023,5,16),
            new Date(2023,6,12),new Date(2023,6,13),new Date(2023,6,14),new Date(2023,7,9),new Date(2023,7,10),new Date(2023,7,11),
            new Date(2023,8,6),new Date(2023,8,7),new Date(2023,8,8),new Date(2023,9,4),new Date(2023,9,5),new Date(2023,9,6),
            new Date(2023,10,1),new Date(2023,10,2),new Date(2023,10,3),new Date(2023,10,29),new Date(2023,10,30),new Date(2023,11,1),new Date(2023,11,27),
            new Date(2023,11,28),new Date(2023,11,29)
        ],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2023,3,4),new Date(2023,3,5),new Date(2023,3,6),new Date(2023,4,4),new Date(2023,4,5),new Date(2023,4,8),
            new Date(2023,4,31),new Date(2023,5,1),new Date(2023,5,2),new Date(2023,5,28),new Date(2023,5,29),new Date(2023,5,30),new Date(2023,6,26),
            new Date(2023,6,27),new Date(2023,6,28),new Date(2023,7,23),new Date(2023,7,24),new Date(2023,7,25),new Date(2023,8,20),new Date(2023,8,21),
            new Date(2023,8,22),new Date(2023,9,18),new Date(2023,9,19),new Date(2023,9,20),new Date(2023,10,15),new Date(2023,10,16),new Date(2023,10,17),
            new Date(2023,11,13),new Date(2023,11,14),new Date(2023,11,15)
        ],
    },
    hverfi_3: {
        //Búgarðabyggð/dreifbýli
        streets: [
            "Dreifbýli", "Búgarðabyggð", "Vesturmúli", "Norðurbraut", "Norðurgata", "Norðurleið", "Suðurgata", "Suðurleið", "Sandvíkurhreppur"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
                new Date(2023,3,24),new Date(2023,4,22),
                new Date(2023,5,19),new Date(2023,6,17),new Date(2023,7,14),new Date(2023,8,12),new Date(2023,9,9),new Date(2023,10,6),
                new Date(2023,11,4)
            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
                new Date(2023,3,12),new Date(2023,4,29),new Date(2023,5,5),
                new Date(2023,6,3),new Date(2023,7,1),new Date(2023,7,28),new Date(2023,8,25),new Date(2023,9,23),new Date(2023,10,20),new Date(2023,11,18),
            ],
    },
    hverfi_4: {
        //Blokkir
        streets: [
            "Blokkir", "Fjölbýli"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood

                new Date(2023,0,5),new Date(2023,0,6),new Date(2023,0,19),new Date(2023,0,20),new Date(2023,0,23),new Date(2023,0,24),new Date(2023,1,9),
                new Date(2023,1,10),new Date(2023,1,13),new Date(2023,1,14),new Date(2023,2,2),new Date(2023,2,3),new Date(2023,2,6),new Date(2023,2,7),
                new Date(2023,2,23),new Date(2023,2,24),new Date(2023,2,27),new Date(2023,2,28),new Date(2023,3,13),new Date(2023,3,14),new Date(2023,3,17),
                new Date(2023,3,18),new Date(2023,4,4),new Date(2023,4,5),new Date(2023,4,8),new Date(2023,4,9),new Date(2023,4,25),new Date(2023,4,26),
                new Date(2023,4,30),new Date(2023,4,31),new Date(2023,5,15),new Date(2023,5,16),new Date(2023,5,19),new Date(2023,5,20),new Date(2023,6,6),
                new Date(2023,6,7),new Date(2023,6,10),new Date(2023,6,11),new Date(2023,6,27),new Date(2023,6,28),new Date(2023,6,31),new Date(2023,7,1),
                new Date(2023,7,16),new Date(2023,7,17),new Date(2023,7,21),new Date(2023,7,22),new Date(2023,8,7),new Date(2023,8,8),new Date(2023,8,11),
                new Date(2023,8,12),new Date(2023,8,27),new Date(2023,8,28),new Date(2023,9,2),new Date(2023,9,3),new Date(2023,9,19),new Date(2023,9,20),
                new Date(2023,9,23),new Date(2023,9,24),new Date(2023,10,8),new Date(2023,10,9),new Date(2023,10,13),new Date(2023,10,14),new Date(2023,10,30),
                new Date(2023,11,1),new Date(2023,11,4),new Date(2023,11,5),new Date(2023,11,21),new Date(2023,11,22),new Date(2023,11,27)

            ],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                new Date(2023,0,11),new Date(2023,0,25),new Date(2023,1,8),new Date(2023,1,22),new Date(2023,2,8),new Date(2023,2,22),new Date(2023,3,12),
                new Date(2023,3,16),new Date(2023,4,10),new Date(2023,4,23),new Date(2023,5,7),new Date(2023,5,21),new Date(2023,6,4),new Date(2023,6,19),
                new Date(2023,7,2),new Date(2023,7,18),new Date(2023,7,30),new Date(2023,8,13),new Date(2023,8,29),new Date(2023,9,11),new Date(2023,9,27),
                new Date(2023,10,10),new Date(2023,10,22),new Date(2023,11,6),new Date(2023,11,19)

            ],
    },
}
export default temp_JSON;
