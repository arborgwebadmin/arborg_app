import React from 'react';
import MusicLayout from '../../components/music-layout'

class Kristjana extends React.Component {
	render() {
		const text_is = [
            'Kristjana Stefánsdóttir fæddist á Selfossi árið 1968 og varð tónlist fljótlega stór partur af lífi hennar. Hún hóf söngferil sinn sem einsöngvari með skólakórum á Selfossi og í kjölfarið hóf hún að syngja á sveitaböllum með hljómsveitinni Karma.', 
            'Eftir stúdentspróf frá Fjölbrautaskóla Suðurlands 1989 hóf hún söngnám við Söngskólann í Reykjavík og lauk þaðan námi í klassískum söng árið 1996. Því næst hélt Kristjana út fyrir landssteinana og stundaði nám við Konunglega Listaháskólan í Den Haag í Hollandi. Hún útskrifaðist þaðan vorið 2000 með BM cum laude heiðursgráðu sem jazzsöngkona og jazzsöngkennari.', 
            'Fyrsta plata Kristjönu kom út árið 1996 en eru plötur hennar í dag orðnar vel á annan tug. Kristjana hefur margsinnis verðið tilnefnd til Íslensku tónlistar- verðlaunanna og er margfaldur Grímuverðlaunahafi (Íslensku Sviðslistaverðlaunin) ma. fyrir tónlist sína í söngleiknum Bláa hnettinum.', 
            'Kristjana starfar í dag sem alhliða tónlistar og leikhúskona, tónskáld og kennari.',

		]

		const text_en = [
			'Kristjana Stefánsdóttir was born in Selfoss in 1968. At an early age music became a big part of her life. She began her singing career as a soloist in school choirs in her hometown of Selfoss. She then moved on to be the lead singer in the local cover dance band “Karma”.', 
            'After high school, Kristjana began her studies at the Reykjavik School of Singing and graduated in 1996 with a degree in classical singing. Subsequently she moved to the Netherlands where she studied jazz vocals at the Royal Conservatory of The Hague. She graduated with a BM degree, cum laude, as a jazz vocalist and a jazz vocal teacher in 2000.', 
            'Her first album was released in 1996. From that time she has released over 20 albums as well as having taken part in various singing projects and collaborations. Kristjana has been nominated several times for the Icelandic Music Awards and has won the Icelandic Theatre Awards several times. Among other things, she has received awards for her music in the Musical “Blái hnötturinn” (The Blue Planet) in 2017.', 
            'Currently, Kristjana is singing, writing music, working in the theatre and teaching music.',
		]

		return(
			<MusicLayout title="Kristjana Stefánsdóttir" text={text_is} link="https://open.spotify.com/embed/artist/11Pn4DeoVmPmLkaLgo3CKF" text_en={ text_en } image="/thumbnail_Kristjana-svart.png"></MusicLayout>
		)
	}

}

export default Kristjana;
