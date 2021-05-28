import React from 'react'
import MusicLayout from '../../components/music-layout'

class Manar extends React.Component {
    render() {
        const text_is = [
            'Sveitin var stofnuð árið 1965 af þeim Guðmundi Benediktssyni, Ólafi Þórarinssyni (Labbi), Ólafi Bachmann og Birni Gíslasyni. Jómfrúargiggið Mána var á landsmóti ungmennafélaganna að Laugarvatni og var bandið svo næstu tíu  árin ein af aðal sveitaballaböndum Suðurlands. Mánar var og er í raun ein stærsta bítla- og hipparokksveit Íslands á sínum tíma og sendu þeir frá sér tvær smáskífur og eina breiðskrífu árið 1971. Sú plata var tekin upp í Kaupmannahöfn og nefnist “Mánar”.',
            'Þeir sem komu að gerð þeirrar plötu voru Labbi, Björn Þórarinsson (Bassi), Ragnar Sigurjónsson (Gösli), Guðmundur Benediktsson og Smári Kristjánsson. Aðrir aðilar sem hafa spilað með hljómsveitinni eru Gunnar Jökull, Pálmi Gunnarsson, Sigurjón Skúlason, Mary Mc.Dowell, Stefán Ásgrímsson og Arnór Þórhallsson.',
            'Árið 2004 kom sveitin svo saman þegar þeir hituðu upp fyrir bresku sveitina Deep Purple í Laugardalshöll og slógu þar algjörlega í gegn.',
            'Mánar hlutu meðal annars menningarverðlaun þorrablóts Selfoss árið 2008 og menningarverðlaun Árborgar árið 2005. Mánar skilja eftir sig mörg lög sem eru frá því að vera ljúfar sorglegar ballöður yfir í það að vera kraftmikil rokklög með grípandi kjarnyrtum textum. Mörg þessara laga voru sögð vera með ádeiluívafi. Nýjasta breiðskífa sveitarinnar, Nú er öldin önnur, kom út árið 2016.',
        ]

        const text_en = [
            'The group was founded in 1965 by Guðmundur Benediktsson, Ólafur Þórarinsson (Labbi), Ólafur Bachmann and Björn Gíslason. Their first gigg was at the national tournament of the youth clubs at Laugarvatn and for the next years the band was one of the main country bands in the South. Mánar was and is in fact one of the largest Beatles and hippie rock bands in Iceland at the time. They released two singles and one LP in 1971. That album was recorded in Copenhagen and is called „Mánar“.',
            'Those who were involved in the making of that album were Labbi, Björn Þórarinsson (Bassi), Ragnar Sigurjónsson (Gösli), Guðmundur Benediktsson og Smári Kristjánsson. Other members who have played with the band are Gunnar Jökull, Pálmi Gunnarsson, Sigurjón Skúlason, Mary Mc.Dowell, Stefán Ásgrímsson and Arnór Þórhallsson.',
            'In 2004, the band came together when they warmed up for the British band Deep Purple in Laugardalshöll which was a great success. Mánar have received the Selfoss Þorrablóts Cultural prize in 2008 and the Árborg Cultural prize in 2005.',
            'Mánar´s legacy songs range from sweet, sad ballads to powerful rock songs with catchy core lyrics. Many of their songs were said to have satirical twist during those times. The band´s latest album, Nú er öldin önnur, was released in 2016.'
        ]

        return(
            <MusicLayout title="Mánar" link="https://open.spotify.com/embed/artist/1ZufmaFqxzna6WAhS68RBq" text={ text_is } image="/thumbnail_Manar-svart.png" text_en={ text_en }></MusicLayout>
        )
    }
}

export default Manar;

