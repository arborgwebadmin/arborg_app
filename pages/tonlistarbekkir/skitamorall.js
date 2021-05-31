import React from 'react'
import MusicLayout from '../../components/music-layout'

class Skitamorall extends React.Component {
    render() {
        const text_is = [
            'Skítamórall var stofnuð árið 1989 af þeim Gunnari Ólasyni, Herberti Viðarsyni, Jóhanni Bachmann og Arngrími Fannari Haraldssyni, allir þá aðeins 13 ára. Rétt fyrir aldamótin eða árið 1997 gáfu þeir út sína fyrstu plötu, Súper. Sama ár bættist Einar Ágúst Víðisson í hópinn og þá gáfu þeir út plötuna Tjútt.',
            'Það var svo ekki fyrr en platan Nákvæmlega kom út, árið 1998, að Skítamórall varð að einni vinsælustu sveitaballhljómsveitum landsins. Hljómsveitin er þekkt fyrir að vera full af orku og spilagleði og eru líklega fáir staðir á landinu sem þeir hafa ekki spilað á.',
            'Platan Nákvæmlega hlaut miklar vinsældir og var á íslenska topplistanum í þrjár vikur og hlaut að lokum gullplötu. Platan inniheldur meðal annars lagið, ,,Farin”. Á 20 ára afmælisári sveitarinnar gekk Gunnar Þór Jónsson til liðs við sveitina og héldu þeir sama ár afmælistónleika.',
            'Skítamórall er þekkt fyrir að vera hrókur alls fagnaðar, með lögunum sínum sem allir syngja við, gírandi gítarspilið og bongó trommurnar sem koma öllum í stuð. Það mætti segja að ekkert partý sé orðið að partýi fyrr en ein Skítamórals syrpa hafi verið tekin.',
        ]

        const text_en = [
            'Skítamórall was founded in 1989 by Gunnar Ólason, Herbert Viðarson, Jóhann Bachmann and Arngrímur Fannar Haraldsson, all of them only 13 years old. In 1997 they released their first album, Súper. That same year, Einar Ágúst Víðisson joined the group and they released their next album Tjútt.',
            'It was not until the album Nákvæmlega was released, in 1998, that Skítamórall became one of the most popular ball bands in Iceland. The band is known for bringing alot of energy and playfulness to the crowd and there are probably few places in Iceland where they have not played.',
            'The album Nákvæmlega gained great popularity and was on the Icelandic top list for three weeks and reached the Golden Album title. The album included the song „Farin“. On the band´s 20th anniversary, Gunnar Þór Jónsson joined the band and they held a birthday concert in the same year.',
            'Skítamórall is known for being the roar of all celebrations, with their great sing along songs, played under the playful guitar strums and bongo drums that makes everybody want to move their hips. It could be said that no party becomes a party until one of Skítamóral´s song have been played.',
        ]
        return (
            <MusicLayout title="Skítamórall" link="https://open.spotify.com/embed/artist/0yGLmAg3Q8H8yEqWr8TFNy" text={ text_is } text_en={text_en} image="/thumbnail_Skitam-svart.png"></MusicLayout>
        )
    }
}

export default Skitamorall

