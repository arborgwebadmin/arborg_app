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
            "Móakot", "Ólafsvellir", "Merkigarður", "Heiðarstekkur", "Björkurstekkur", "Móstekkur", "Dranghólar", "Kerhólar", "Norðurhólar", "Hellishólar", "Vesturhólar", 
            "Akurhólar", "Birkihólar", "Grafhólar", "Kjarrhólar", "Álfhólar", "Dverghólar", "Tröllhólar", "Berghólar", "Nauthólar", "Kálfahólar", "Folaldahólar", 
            "Hrafnhólar", "Tjaldhólar", "Hraunhella", "Móhella", "Fagrahella", "Gráhella", "Vallarland", "Vörðuland", "Móland", "Stekkjarland", "Snæland", "Seljaland", 
            "Smáraland", "Akraland", "Mýrarland", "Kelduland", "Grundarland", "Hulduland", "Fagraland", "Bjarmaland", "Álfaland", "Engjaland", "Tunguvegur", "Seljavegur", 
            "Sléttuvegur", "Mánavegur", "Þóristún", "Smáratún", "Ársalir", "Heiðarvegur", "Kirkjuvegur", "Sunnuvegur", "Hafnartún", "Tryggvatorg", "Sigtún", "Bankavegur", 
            "Skólavellir", "Sólvellir", "Álfheimar", "Reynivellir", "Valholt", "Víðivellir", "Birkivellir", "Rauðholt", "Hjarðarholt", "Stekkholt", "Réttarholt", 
            "Hrísholt", "Merkiland", "Grænamörk", "Þórsmörk", "Heiðmörk", "Laugarbakki", "Fagurgerði", "Grænuvellir", "Hörðuvellir", "Hraunbakki"],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
            new Date(2022,7,9),new Date(2022,7,10),
            new Date(2022,7,30),new Date(2022,7,31),new Date(2022,8,20),new Date(2022,8,21),new Date(2022,9,11),new Date(2022,9,12),
            new Date(2022,10,1),new Date(2022,10,2),new Date(2022,10,22),new Date(2022,10,23),new Date(2022,11,13),new Date(2022,11,14)],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2022,0,19),new Date(2022,0,20),new Date(2022,1,9),new Date(2022,1,10),new Date(2022,2,2),new Date(2022,2,3),
            new Date(2022,2,23),new Date(2022,2,24), new Date(2022,3,13), new Date(2022,3,14),new Date(2022,4,4),new Date(2022,4,5),
            new Date(2022,4,25),new Date(2022,5,15),new Date(2022,6,6),new Date(2022,6,7),new Date(2022,7,17),new Date(2022,7,18), 
            new Date(2022,8,7),new Date(2022,8,8),new Date(2022,8,28),new Date(2022,8,29),new Date(2022,9,19),new Date(2022,9,20),
            new Date(2022,10,9),new Date(2022,10,10),new Date(2022,10,30),new Date(2022,11,1),new Date(2022,11,21),new Date(2022,11,22)],
    },
    hverfi_2: { 
        // Blátt hverfi, Selfoss/Eyrabakki
        // Listi yfir allar götur í þessu hverfi
        streets: [
        "Álalækur", "Eyrarlækur", "Laxalækur", "Bleykjulækur", "Hagalækur", "Urriðalækur", "Sílalækur", "Þúfulækur", "Starmói", "Kjarrmói", "Urðamói", "Tjarnamói", 
        "Lyngmói", "Fífumói", "Fossvegur", "Langamýri", "Kringlumýri", "Lækjarbakki", "Laxabakki", "Hellubakki", "Árbakki", "Fagramýri", "Austurmýri", "Sóltún", 
        "Fosstún", "Suðurengi", "Lágengi", "Miðengi", "Dælengi", "Starengi", "Háengi", "Lambhagi", "Laufhagi", "Reyrhagi", "Grashagi", "Fossheiði", "Nauthagi", "Úthagi", 
        "Heimahagi", "Lyngheiði", "Háheiði", "Gagnheiði", "Lágheiði", "Álftarimi", "Gauksrimi", "Lóurimi", "Spóarimi", "Þrastarimi", "Erlurimi", "Urðartjörn", "Aðaltjörn", 
        "Sílatjörn", "Bakkatjörn", "Seltjörn", "Fífutjörn", "Grundartjörn", "Hólatjörn", "Baugstjörn", "Ástjörn", "Miðtún", "Jórutún", "Ártún", "Jaðar - Eyrarbakki", 
        "Hrefnutangi", "Hafnarbrú", "Túngata", "Nesbrú - Eyrarbakki", "Búðarstígur", "Bárðarbrú", "Eyrargata", "Hjallavegur", "Háeyrarvegur", "Hjalladæl", "Álfsstétt", 
        "Þykkvaflöt", "Hulduhóll", "Merkisteinsvellir", "Steinskot", "Heiðdalshús", "Háeyrarvellir", "Mundakot", "Hvammur", "Kirkjuhvol", "Álfastétt", "Gamla Hraun", 
        "Traðarhús", "Ásaberg", "Garðabær - Eyrabakki", "Steinsbær", "Brenna", "Sæfell - Eyrarbakki", "Óseyri - Eyrarbakki", "Bakarísstígur", "Hreggviður", "Sólvangur", 
        "Einarshöfn", "Grenigrund", "Birkigrund", "Furugrund"],
        gray_dates: [
            // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
            new Date(2022,7,3),new Date(2022,7,4),new Date(2022,7,5),new Date(2022,7,24),new Date(2022,7,25),new Date(2022,7,26),
            new Date(2022,8,14),new Date(2022,8,15),new Date(2022,8,16),new Date(2022,9,5),new Date(2022,9,6),new Date(2022,9,7),
            new Date(2022,9,26),new Date(2022,9,27),new Date(2022,9,28),new Date(2022,10,16),new Date(2022,10,17),new Date(2022,10,18),
            new Date(2022,11,7),new Date(2022,11,8),new Date(2022,11,9),new Date(2022,11,28),new Date(2022,11,29),new Date(2022,11,30)],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2022,7,15),new Date(2022,7,16),new Date(2022,8,5),new Date(2022,8,6),new Date(2022,8,26),new Date(2022,8,27),new Date(2022,9,17),
            new Date(2022,9,18),new Date(2022,10,7),new Date(2022,10,8),new Date(2022,10,28),new Date(2022,10,29),new Date(2022,11,19),new Date(2022,11,20)],
    },
    hverfi_3: {
        //Búgarðabyggð/dreifbýli
        streets: [
            "Dreifbýli", "Búgarðabyggð"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar grátunnur og brúntúnnur eru tæmdar fyrir þetta hverfi
                new Date(2022,7,8),new Date(2022,7,29),new Date(2022,8,19),new Date(2022,9,10),new Date(2022,9,31),new Date(2022,10,21),
                new Date(2022,11,12)],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
                new Date(2022,7,19),new Date(2022,8,9),new Date(2022,8,30),new Date(2022,9,21),new Date(2022,10,11),new Date(2022,11,2),new Date(2022,11,23)],
    },
    hverfi_4: {
        //Blokkir
        streets: [
            "Blokkir"],
            gray_dates: [
                // List over dates for when the gray and brown trash bin will be emptied for this neighbourhood
                new Date(2022,6,29), new Date(2022,7,1), new Date(2022,7,2),
                new Date(2022,7,3),new Date(2022,7,4),new Date(2022,7,5),new Date(2022,7,8),new Date(2022,7,9),new Date(2022,7,25),new Date(2022,7,26), 
                new Date(2022,7,29),new Date(2022,7,30),new Date(2022,7,31),new Date(2022,8,14),new Date(2022,8,15),new Date(2022,8,16),new Date(2022,8,19),
                new Date(2022,8,20), new Date(2022,9,6),new Date(2022,9,7),new Date(2022,9,10),new Date(2022,9,11),new Date(2022,9,12),new Date(2022,9,26),
                new Date(2022,9,27), new Date(2022,9,28),new Date(2022,9,31), new Date(2022,10,1),new Date(2022,10,17),new Date(2022,10,18),new Date(2022,10,21), 
                new Date(2022,10,22),new Date(2022,10,23), new Date(2022,11,7),new Date(2022,11,8),new Date(2022,11,9),new Date(2022,11,12),new Date(2022,11,13),
                new Date(2022,11,29),new Date(2022,11,30)],
            blue_dates: [
                // List over dates for when the blue trash bin will be emptied for this neighbourhood
                new Date(2022,7,10),new Date(2022,7,24),new Date(2022,8,7),new Date(2022,8,21),new Date(2022,9,5),new Date(2022,9,19),new Date(2022,10,2),
                new Date(2022,10,16),new Date(2022,10,30),new Date(2022,11,14),new Date(2022,11,28)],
    },
}
export default temp_JSON;