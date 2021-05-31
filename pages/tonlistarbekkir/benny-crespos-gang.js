import React from 'react';
import MusicLayout from '../../components/music-layout'

class BCG extends React.Component {
	render() {
		const text_is = [
            'Hljómsveitin Benny Crespos‘s Gang var stofnuð árið 2003 af þeim Magnúsi Öder Kristinssyni, Helga Rúnari Gunnarssyni, Magnúsi Øder Guðmundssyni og Bassa Ólafssyni. Lovísa Elísabet Sigrúnardóttir (Lay Low) bættist fljótlega í hópinn og um það leyti hætti Magnús Guðmundsson.',
            'Eftir þó nokkra eftirvæntingu gáfu þau út sína fyrstu plötu árið 2007 sem var nefnd eftir hljómsveitinni. Sú plata var tilnefnd til Íslensku tónlistarverðlaunanna árið 2008 í flokki rokk/jaðar tónlistar.',
            'Þekkt fyrir sína einstöku rokkuðu, taktföstu og framsæknu tónlist hafa Benny Crespo‘s Gang síðan þá verið þekkt í rokkheiminum hérna heima og einnig fengið lof erlendis frá. Hljómsveitin hefur spilað á Iceland Airwaves frá árinu 2005. Það er mögnuð upplifun að sjá og heyra þau flytja þessa, á köflum flóknu tónlist, sem er ekki á færi nema einstaklega góðra hljóðfæraleikara.',
            'Biðin eftir næstu plötu var nokkuð löng en alveg þess virði og kom hún út árið 2018, sú plata heitir Minor Mistakes. Á þeirri plötu er lagið Another Little Storm sem hlaut Íslensku tónlistarverðlaunin fyrir rokklag ársins það sama ár.'
		]

		const text_en = [
            "The band Benny Crespos's Gang was formed in 2003 by Magnús Öder Kristinsson, Helgi Rúnar Gunnarsson, Magnús Øder Guðmundsson and Bassi Ólafsson. Lovísa Elísabet Sigrúnardóttir (Lay Low) soon joined the group and about that time Magnús Guðmundsson left.",
            "After some anticipation, they released their first album in 2007, which was named after the band. That album was nominated for the Icelandic Music Awards in 2008 in the category of rock / alternative music.",
            "Known for their unique rock, rhythmic and progressive music, Benny Crespo's Gang soon became well known in the rock world here at home and also received praise from abroad. The band has been playing on Iceland Airwaves since 2005. It´s an amazing experience to see and hear them perform this, in sections of complex music, which is only doable in the hands of  exceptionally good instrumentalists.",
            "The wait for the next album was quite long but well worth it and it was released in 2018, that album is called Minor Mistakes. That album contains the song Another Little Storm, which won the Icelandic Music Award for Rock Song of the Year that same year."
		]

		return(
			<MusicLayout title="Benny Crespo's Gang" text={text_is} link="https://open.spotify.com/embed/artist/4h7sc1K9uZviwewtYy5B9V" image="/thumbnail_Bennys-svart.png" text_en={text_en}></MusicLayout>
		)
	}

}

export default BCG;
