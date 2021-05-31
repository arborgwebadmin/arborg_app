import React from 'react';
import MusicLayout from '../../components/music-layout'

class Kiriyama extends React.Component {
	render() {
		const text_is = [
            'Kiriyama Family var stofnuð árið 2007 af þeim Jóhanni Vigni Vilbergssyni, Karli Magnúsi Bjarnasyni og Víði Björnssyni. Stuttu seinna bætast þeir Bassi Ólafsson og Guðmundur Geir Jónsson við. Hljómsveitin var strax mjög virk í tónleikahaldi og spilaði á helstu tónleikarstöðum í miðbæ Reykjavíkur. Sveitin spilaði á Iceland Airwaves fyrst árið 2011 og hefur spilað reglulega á hátíðinni síðan þá',
            'Fyrsta platan þeirra kom út árið 2012 og á þeirri plötu má finna lagið Weekends sem varð lag ársins á Rás 2 það sama ár. Á næstu árum urðu meðlimabreytingar og steig Jóhann Vignir þá úr hópnum en Hulda Kristín Kolbrúnardóttir bættist við með sína kraftmiklu rödd sem söngkona sveitarinnar. Bjarni Ævar Árnason gekk til liðs við sveitina stuttu seinna.',
            'Það sem gerir Kiriyama Family svo einstaka er þessi óútreiknalegi og dularfulli bragur yfir tónlist þeirra. Hægt er að segja að þau séu undir áhrifum níunda áratugarins sem einkennist af syntha snekkju poppi. Hljómsveitin er líka einstök þegar kemur að tónleikahaldi en meðlimirnir skiptast reglulega á hljóðfærum fyrir utan Bassa sem spilar eingöngu á trommu. Þar sem hver og eitt hefur sinn einstaka stíl gerir það upplifunina engri lík.',
            'Önnur plata þeirra, Waiting for... , kom svo út árið 2017 og var tilnefnd sem plata ársins í poppflokki árið 2018 á Íslensku tónlistarverðlaununum.',
		]

		const text_en = [
            'Kiriyama Family was founded in 2007 by Jóhann Vignir Vilbergsson, Karl Magnús Bjarnason and Víðir Björnsson. Early on Bassi Ólafsson and Guðmundur Geir Jónsson joined the band. They were immediately very active in concerts and played at the main concerts venues in the center of Reykjavík. The band first played on Iceland Airwaves in 2011 and has played regularly at the festival since then.',
            "Their first album was released in 2012 and on that album you can find the song Weekends which became the song of the year on Channel 2 Radio. In the following years there were member changes and Jóhann Vignir left the group but Hulda Kristín Kolbrúnardóttir joined with her powerful voice as the band's singer. Bjarni Ævar Árnason joined the band shortly afterwards.",
            "What makes the Kiriyama Family so unique is this unpredictable and mysterious flair of their music. They can be said to be influenced by the eighties, which are characterized by syntha yact pop. The band is also unique when it comes to concerts, but the members regularly exchange instruments apart from Bassi, who only plays the drum. Because everyone has their own unique instrumental style, it makes the experience unparalleled.",
            "Their second album, Waiting for, was released in 2017 and was nominate as the album of the year in the pop category in 2018 at the Icelandic Music Awards.",
		]

		return(
			<MusicLayout title="Kiriyama Family" text={text_is} link="https://open.spotify.com/embed/artist/31aMMUN8Lp8nldhUvSPWmz" text_en={text_en} image="/thumbnail_Kiriyama-svart.png"></MusicLayout>
		)
	}

}

export default Kiriyama;
