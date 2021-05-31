import React from 'react';
import MusicLayout from '../../components/music-layout'

class SteiniSpil extends React.Component {
	render() {
		const text_is = [
			'Þorsteinn Pálmi Guðmundsson, eða Steini Spil, eins og hann var kallaður hefur verið nefndur sveitaballakóngur Suðurlands. Hann fæddist þann 22. desember 1933 í Villingaholtshreppi í Árnessýslu og bjó mest alla ævi sína á Selfossi. Danstónlist átti hug hans allan strax frá unga aldri og eignaðist hann sína fyrstu harmonikku, sem hann keypti fyrir fermingarpeninginn sinn, 13 ára gamall.',
			'Þegar hann var um tvítugt byrjaði hann í Hljómsveit Óskars Guðmundssonar en það var á þeim tíma vinsæl dansleikjahljómsveit á Suðurlandi. Steini spilaði á harmonikku sem var hans aðalhljóðfæri.',
			'Árið 1963 stofnaði hann sína eigin hljómsveit, Hljómsveit Þorsteins Guðmundssonar og starfaði hún sem dansleikjasveit fram til ársins 1986 við miklar vinsældir. Einnig samdi Steini Spil fjölda laga sem hljómsveit hans flutti og gaf út á nokkrum plötum á sjöunda og áttunda áratugnum, lög eins og Á Kanarí, Grásleppu Gvendur og Snjómokstur.', 
			'Hljómsveit hans var ómissandi hluti af dansleikjamenningu þess tíma og fór sveitin meðal annars í nokkur skipti út fyrir landsteinana til að spila fyrir dansþyrsta Íslendinga erlendis. Þorsteinn var einn af stofnendum Harmonikkufélags Selfoss en félagið heiðraði minningu hans og gaf meðal annars út plötu árið 2013 sem nefnd var eftir lagi hans, Vangaveltur.'
		]

		const text_en = [
			'Þorsteinn Pálmi Guðmundsson, or Steini Spil, like he was called back in the days, has been called the king of the country ball in the South of Iceland. He was born on  December 22, 1933 in Villingaholtshrepp in Árnessýsla and lived most of his life in Selfoss. Dance music was on his mind from an early age and acquired his first accordion, which he bought for his confirmation money, when he was 13 years old.',
			'When he was about twenty, he started in Óskar Guðmundsso´s Orchestra, but at the time it was a popular dance band in the South.  Steini played the accordion which was his main instrument.',
			'In 1963 he founded his own band, Hljómsveit Þorsteins Guðmundsonar which gained great popularity. The band performed until 1986. Steini Spil also wrote a number of songs that his band performed and released on several albumd in the sixties and seventies, songs such as Á Kanarí, Grásleppu Gvendur and Snjómokstur. His band was an essential part of the dance culture of that time and the band went out of the country several times to play for dance thirsty Icelanders abroad.',
			'Þorsteinn was one the founders of the accordion association of Selfoss. The accordion honored his memory and released an album in 2013 which was named after his song, Vangaveltur'
		]

		return(
			<MusicLayout title="Steini Spil" text={text_is} link="https://open.spotify.com/embed/album/7v77nsK3YJe5kc0SvRTOY5" text_en={text_en} image="/thumbnail_Steini-svart.png"></MusicLayout>
		)
	}

}

export default SteiniSpil;