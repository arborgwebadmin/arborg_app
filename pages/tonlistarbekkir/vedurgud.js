import React from 'react';
import MusicLayout from '../../components/music-layout'

class Vedurgud extends React.Component {
	render() {
		const text_is = [
            'Tónlistarmaðurinn Ingólfur Þórarinsson, betur þekktur sem Ingó Veðurguð byrjaði ungur að þreifa sig áfram í tónlistinni. Fljótlega á tvítugsárunum var hann þekktur um Suðurlandið fyrir gítar- og sönghæfileika sína. Árið 2008 gaf hann svo út ásamt hljómsveit sinni, Ingó og Veðurguðirnir, sumarsmellinn Bahama sem var efst á Íslenska lagalistanum í níu vikur. Hljómsveit hans gaf í kjölfarið út albúmið Góðar stundir árið 2009 sem innihélt smelli eins og Nóttin er liðin, Gestalistinn og Argentína.', 
            'Næstu árin var Ingó þó eins síns liðs og tróð upp á öllum helstu skemmtunum á landinu, enda Ingó gæddur þeim hæfileika að geta haldið uppi stemningu á heilu balli með kassagítarnum einum.',
            'Það sýndi sig og sannaði að Ingó getur hrifið fólk með sér í söng þegar hann var fenginn til þess að taka við brekkusöngnum á Þjóðhátíð í Eyjum af engum öðrum heldur en Árna Johnsen árið 2013. Síðan þá hefur Ingó glætt þjóðhátíðarhjörtun eldi, bæði í Dalnum og hjá þeim sem heima sitja og hlusta á í útvarpinu.',
            'Árið 2020 gaf hann svo út þjóðhátíðarlagið Takk fyrir mig sem náði mikilli hlustun og spilun í útvarpi landsmanna.'
		]

		const text_en = [
            'The musician Ingólfur Þórarinsson, better known as Ingó Veðurguð(Ingó Weathergod), started in music at a young age. Soon in his twenties he was known in the South for his guitar and singing skills. In 2008 he released with his band, Ingó og Veðurguðirnir, the summer hit Bahama which was at the top of the Icelandic song list for nine weeks. His band subsequently released the album Good Times in 2009 which included hits such as Nóttin er liðin, Gestalistinn and Argentina.',
            'In the following years, however, Ingó went solo and played frequently at the main music venues in the country, as Ingó has the ability to maintain a great atmosphere in large gatherings with the acoustic guitar alone.',
            'As mentioned before Ingó has the ability to hold a crowd with his singing and guitar playing so it was no surprise that he was asked to take over as the lead singer on the legendary “Brekkusöngur” (Mass singing) at Þjóðhátíð í Eyjum Festival in 2013.',
            'In 2020, he also released the Þjóðhátíð í Eyjum  festival song “Takk fyrir mig”, which became really popular.'
		]

		return(
			<MusicLayout title="Ingó Veðurguð" text={text_is} link="https://open.spotify.com/embed/artist/59htr4yXXXa644Rbl4Ckuw" text_en={text_en} image="/thumbnail_Ingo-svart.png"></MusicLayout>
		)
	}

}

export default Vedurgud;
