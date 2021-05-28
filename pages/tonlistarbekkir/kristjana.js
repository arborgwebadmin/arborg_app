import React from 'react';
import MusicLayout from '../../components/music-layout'

class Kristjana extends React.Component {
	render() {
		const text_is = [
			'Kristjana Stefánsdóttir fæddist á Selfossi árið 1968 og varð söngur fljótlega stór partur af lífi hennar á unglingsárunum. Hún var ung farin að syngja á sveitaböllum en þegar hún byrjaði í framhaldsskóla hóf  hún söngnám í klassískum söng við Söngskólann í Reykjavík. Þar lauk hún 8. stigi og lærði einnig á sama tíma jazzhljómfræði við Tónlistarskóla FÍH.',
            'Svo hélt Kristjana út fyrir landssteinana og nam söng í jazzdeild Konunglega Listaháskólans í Denn Haag, Hollandi. Þar lauk hún einnig kennaraprófi  frá sömu deild vorið 2000.',
            'Fyrsta plata Kristjönu, ,,Ég verð heima um jólin” kom út árið 1996 en eru plötur hennar í dag orðnar vel á annan tug og hún hefur nokkrum sinnum verið tilnefnd til íslensku tónlistarverðlaunanna.  Kristjana hefur verið leiðandi söngkona í jazztónlist um árabil og hefur hún unnið með mörgum þekktum stjórnendum á borð við Daníel Nolgard og Ole Kock Hansen.',
            'Til viðbótar hefur Kristjana unnið sem tónskáld, tónlistarstjóri, raddþjálfari og leikkona hjá Borgarleikhúsinu og hefur hún í tvígang unnið Grímuverðlaunin fyrir tónlist sína í sviðslistaverkunum Jesú Litli og Blái Hnötturinn.'
		]

		const text_en = [
			'Kristjana Stefánsdóttir was born in Selfoss in 1968 and soon in her early teenage life, singing became a big part of her life. She started singing in the country ball scene, but when she started high school she began studies in classical singing at the Reykjavik School of Singing. There she finished level 8 and at the same time also studied jazz musicology at he FÍH Music School.',
            'Kristjana then went abroad og began studies in singing at the jazz department of the Royal Academy of Arts in The Hague, The Netherlands. There she also graduated as a teacher from the same department in the spring of 2000.',
            'Her first album „Ég verð heima um jólin“ was released in 1996 and her albums are to this day around 20 in numbers and she has been nominated for the Icelandic Music Awards several times. Kristjana has been a leading singer in jazz music for years and has worked with many well known conductors such as Daniel Nolgard and Ole Kock Hanses.',
            'In addition, Kristjana has worked as a composer, music director, voice coach and actress at Borgarleikhúsið and she has twice won the Grímu Awards for her music in performing art work Jesú Litli and Blái Hnötturinn.'


		]

		return(
			<MusicLayout title="Kristjana Stefánsdóttir" text={text_is} link="https://open.spotify.com/embed/artist/11Pn4DeoVmPmLkaLgo3CKF" text_en={ text_en } image="/thumbnail_Kristjana-svart.png"></MusicLayout>
		)
	}

}

export default Kristjana;
