import React from 'react'
import Page from '../lib/components/Page'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

const Imprint: React.FC = () => {
    const AuthUser = useAuthUser()

    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Impressum"
            description="Impressum, Rechtliches, Kontakt, Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            <h1>Angaben gem&auml;&szlig; &sect; 5 TMG:</h1>

            <p>
                <strong>
                    Vanwowas.de ist ein Produkt der fahrendeszuhause UG zur
                    St&auml;rkung der Pr&auml;senz kleinerer Manufakturen im
                    Marktumfeld der Wohnmobilanbieter.
                </strong>
            </p>

            <p>&nbsp;</p>

            <p>fahrendeszuhause UG (haftungsbeschr&auml;nkt)</p>

            <p>Bernhardstr. 1A</p>

            <p>D-28203 Bremen</p>

            <p>Vertreten durch:</p>

            <p>
                Gesch&auml;ftsf&uuml;hrer Merlin Ruben Brucker, Magnus Benedikt
                Hoffrage
            </p>

            <p>Kontakt:</p>

            <p>E-Mail: moin@vanwowas.de</p>

            <p>Registereintrag:</p>

            <p>
                Eintragung im Handelsregister: Amtsgericht Bremen: HRB 35725 HB
            </p>

            <p>Umsatzsteuer-ID:&nbsp;</p>

            <p>60 114 11124</p>

            <h2>Haftungsausschluss</h2>

            <h3>Haftung f&uuml;r Inhalte</h3>

            <p>
                Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter
                Sorgfalt erstellt. F&uuml;r die Richtigkeit,
                Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte k&ouml;nnen
                wir jedoch keine Gew&auml;hr &uuml;bernehmen. Als
                Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
                f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
                oder gespeicherte fremde Informationen zu &uuml;berwachen oder
                nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
                T&auml;tigkeit hinweisen. Verpflichtungen zur Entfernung oder
                Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unber&uuml;hrt. Eine
                diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung f&uuml;r Links</h3>

            <p>
                Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen
                wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
                &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
                stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
                &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt
                der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
            </p>

            <h3>Urheberrecht</h3>

            <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
                bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
            </p>

            <h2>Datenschutzinformationen</h2>

            <h3>Newsletter - Mailchimp</h3>

            <p>
                Der Versand der Newsletter erfolgt mittels des
                Versanddienstleisters &bdquo;MailChimp&ldquo;, einer
                Newsletterversandplattform des US-Anbieters Rocket Science
                Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308,
                USA. Die Datenschutzbestimmungen des Versanddienstleisters
                k&ouml;nnen Sie hier einsehen:
                https://mailchimp.com/legal/privacy/. The Rocket Science Group
                LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen
                zertifiziert und bietet hierdurch eine Garantie, das
                europ&auml;isches Datenschutzniveau einzuhalten
                (https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&amp;status=Active).
                Der Versanddienstleister wird auf Grundlage unserer berechtigten
                Interessen gem. Art. 6 Abs. 1 lit. f DSGVO und eines
                Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S. 1 DSGVO
                eingesetzt.
            </p>

            <p>
                Der Versanddienstleister kann die Daten der Empf&auml;nger in
                pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur
                Optimierung oder Verbesserung der eigenen Services nutzen, z.B.
                zur technischen Optimierung des Versandes und der Darstellung
                der Newsletter oder f&uuml;r statistische Zwecke verwenden. Der
                Versanddienstleister nutzt die Daten unserer
                Newsletterempf&auml;nger jedoch nicht, um diese selbst
                anzuschreiben oder um die Daten an Dritte weiterzugeben.
            </p>

            <h3>Newsletter - Erfolgsmessung</h3>

            <p>
                Die Newsletter enthalten einen sog. &bdquo;web-beacon&ldquo;,
                d.h. eine pixelgro&szlig;e Datei, die beim &Ouml;ffnen des
                Newsletters von unserem Server, bzw. sofern wir einen
                Versanddienstleister einsetzen, von dessen Server abgerufen
                wird. Im Rahmen dieses Abrufs werden zun&auml;chst technische
                Informationen, wie Informationen zum Browser und Ihrem System,
                als auch Ihre IP-Adresse und Zeitpunkt des Abrufs erhoben.
            </p>

            <p>
                Diese Informationen werden zur technischen Verbesserung der
                Services anhand der technischen Daten oder der Zielgruppen und
                ihres Leseverhaltens anhand derer Abruforte (die mit Hilfe der
                IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Zu
                den statistischen Erhebungen geh&ouml;rt ebenfalls die
                Feststellung, ob die Newsletter ge&ouml;ffnet werden, wann sie
                ge&ouml;ffnet werden und welche Links geklickt werden. Diese
                Informationen k&ouml;nnen aus technischen Gr&uuml;nden zwar den
                einzelnen Newsletterempf&auml;ngern zugeordnet werden. Es ist
                jedoch weder unser Bestreben, noch, sofern eingesetzt, das des
                Versanddienstleisters, einzelne Nutzer zu beobachten. Die
                Auswertungen dienen uns viel mehr dazu, die Lesegewohnheiten
                unserer Nutzer zu erkennen und unsere Inhalte auf sie anzupassen
                oder unterschiedliche Inhalte entsprechend den Interessen
                unserer Nutzer zu versenden.
            </p>

            <p>
                Ein getrennter Widerruf der Erfolgsmessung ist leider nicht
                m&ouml;glich, in diesem Fall muss das gesamte
                Newsletterabonnement gek&uuml;ndigt werden.
            </p>

            <h3>Hosting und E-Mail-Versand</h3>

            <p>
                Die von uns in Anspruch genommenen Hosting-Leistungen dienen der
                Zurverf&uuml;gungstellung der folgenden Leistungen:
                Infrastruktur- und Plattformdienstleistungen,
                Rechenkapazit&auml;t, Speicherplatz und Datenbankdienste,
                E-Mail-Versand, Sicherheitsleistungen sowie technische
                Wartungsleistungen, die wir zum Zwecke des Betriebs dieses
                Onlineangebotes einsetzen.
            </p>

            <p>
                Hierbei verarbeiten wir, bzw. unser Hostinganbieter
                Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten,
                Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden,
                Interessenten und Besuchern dieses Onlineangebotes auf Grundlage
                unserer berechtigten Interessen an einer effizienten und
                sicheren Zurverf&uuml;gungstellung dieses Onlineangebotes gem.
                Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss
                Auftragsverarbeitungsvertrag).
            </p>

            <h3>Erhebung von Zugriffsdaten und Logfiles</h3>

            <p>
                Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer
                berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO
                Daten &uuml;ber jeden Zugriff auf den Server, auf dem sich
                dieser Dienst befindet (sogenannte Serverlogfiles). Zu den
                Zugriffsdaten geh&ouml;ren Name der abgerufenen Webseite, Datei,
                Datum und Uhrzeit des Abrufs, &uuml;bertragene Datenmenge,
                Meldung &uuml;ber erfolgreichen Abruf, Browsertyp nebst Version,
                das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
                Seite), IP-Adresse und der anfragende Provider.
            </p>

            <p>
                Logfile-Informationen werden aus Sicherheitsgr&uuml;nden (z.B.
                zur Aufkl&auml;rung von Missbrauchs- oder Betrugshandlungen)
                f&uuml;r die Dauer von maximal 7 Tagen gespeichert und danach
                gel&ouml;scht. Daten, deren weitere Aufbewahrung zu
                Beweiszwecken erforderlich ist, sind bis zur endg&uuml;ltigen
                Kl&auml;rung des jeweiligen Vorfalls von der L&ouml;schung
                ausgenommen
            </p>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Imprint)
