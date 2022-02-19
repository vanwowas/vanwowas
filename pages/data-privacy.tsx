import React from 'react'
import Page from '../lib/components/Page'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

const DataPrivacy: React.FC = () => {
    const AuthUser = useAuthUser()

    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Impressum"
            description="Data Privacy, Datenschutz, Rechtliches, Kontakt, Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            <h1>Datenschutzerklärung</h1>

            <h2>1. Datenschutz auf einen Blick Allgemeine Hinweise</h2>

            <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h4>
                Datenerfassung auf dieser Website
                <br />
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
            </h4>

            <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
                Datenschutzerklärung entnehmen.
            </p>

            <h4>Wie erfassen wir Ihre Daten?</h4>

            <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
            </p>

            <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT- Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
            </p>

            <h4>Wofür nutzen wir Ihre Daten?</h4>

            <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>

            <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, können Sie diese Einwilligung jederzeit für die
                Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>

            <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                sich jederzeit an uns wenden.
            </p>

            <h3>
                2. Hosting
                <br />
                Hosting mit Amazon Web Services (AWS)
            </h3>

            <p>
                Wir hosten unsere Website bei AWS. Anbieter ist die Amazon Web
                Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxemburg
                (nachfolgend: AWS).
            </p>

            <p>
                Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen
                Daten auf den Servern von AWS verarbeitet. Hierbei können auch
                personenbezogene Daten an das Mutterunternehmen von AWS in die
                USA übermittelt werden. Die Datenübertragung in die USA wird auf
                die EU-Standardvertragsklauseln gestützt. Details finden Sie
                hier:
            </p>

            <p>
                https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/.
                Weitere Informationen entnehmen Sie der Datenschutzerklärung von
                AWS:
            </p>

            <p>https://aws.amazon.com/de/privacy/?nc1=f_pr.</p>

            <p>
                Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
                möglichst zuverlässigen Darstellung unserer Website. Sofern eine
                entsprechende Einwilligung abgefragt wurde, erfolgt die
                Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs.
                1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen Datenschutz</h2>

            <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                welchem Zweck das geschieht.
            </p>

            <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
                B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                Dritte ist nicht möglich.
            </p>

            <p>Hinweis zur verantwortlichen Stelle</p>

            <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
            </p>

            <p>
                fahrendeszuhause UG (haftungsbeschränkt) Bernhardstr. 1A
                <br />
                28203 Bremen
                <br />
                Germany
            </p>

            <p>Telefon: +49 17648064370 E-Mail: moin@vanwowas.de</p>

            <p>
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3>Speicherdauer</h3>

            <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
            </p>

            <p>
                Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
            </p>

            <p>
                Wir verwenden unter anderem Tools von Unternehmen mit Sitz in
                den USA oder sonstigen datenschutzrechtlich nicht sicheren
                Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
                personenbezogene Daten in diese Drittstaaten übertragen und dort
                verarbeitet werden. Wir weisen darauf hin, dass in diesen
                Ländern kein mit der EU vergleichbares Datenschutzniveau
                garantiert werden kann. Beispielsweise sind US-Unternehmen dazu
                verpflichtet, personenbezogene Daten an Sicherheitsbehörden
                herauszugeben, ohne dass Sie als Betroffener hiergegen
                gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen
                werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
                US-Servern befindlichen Daten zu Überwachungszwecken
                verarbeiten, auswerten und dauerhaft speichern. Wir haben auf
                diese Verarbeitungstätigkeiten keinen Einfluss.
            </p>

            <p>Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>

            <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die
                Rechtmä&szlig;igkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <p>
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                sowie gegen Direktwerbung (Art. 21 DSGVO)
            </p>

            <p>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
                DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN
                GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
                EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
                IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN,
                ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>

            <p>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
            </p>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>

            <p>
                Im Falle von Verstö&szlig;en gegen die DSGVO steht den
                Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
                insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>

            <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3>SSL- bzw. TLS-Verschlüsselung</h3>

            <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an
                dem Schloss-Symbol in Ihrer Browserzeile.
            </p>

            <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
                werden.
            </p>

            <p>Auskunft, Löschung und Berichtigung</p>

            <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit an uns wenden.
            </p>

            <h3>Recht auf Einschränkung der Verarbeitung</h3>

            <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit an uns wenden. Das Recht auf Einschränkung der
                Verarbeitung besteht in folgenden Fällen:
            </p>

            <p>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
                <br />
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtmä&szlig;ig geschah/geschieht, können Sie statt der
                Löschung die Einschränkung der Datenverarbeitung verlangen.
            </p>

            <p>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
                <br />
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abwägung zwischen Ihren und unseren Interessen
                vorgenommen werden. Solange noch nicht feststeht, wessen
                Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>

            <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten &ndash; von ihrer
                Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder
                zur Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                natürlichen oder juristischen Person oder aus Gründen eines
                wichtigen öffentlichen Interesses der Europäischen Union oder
                eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3>Widerspruch gegen Werbe-E-Mails</h3>

            <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit
                widersprochen. Die Betreiber der Seiten behalten sich
                ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>

            <h2>4. Datenerfassung auf dieser Website Cookies</h2>

            <p>
                Unsere Internetseiten verwenden so genannte
                &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien und
                richten auf Ihrem Endgerät keinen Schaden an. Sie werden
                entweder vorübergehend für die Dauer einer Sitzung
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
                Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
                Besuchs automatisch gelöscht. Permanente Cookies bleiben auf
                Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder
                eine automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>

            <p>
                Teilweise können auch Cookies von Drittunternehmen auf Ihrem
                Endgerät gespeichert werden, wenn Sie unsere Seite betreten
                (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die
                Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B.
                Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>

            <p>
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
                technisch notwendig, da bestimmte Websitefunktionen ohne diese
                nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
                Anzeige von Videos). Andere Cookies dienen dazu, das
                Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
            </p>

            <p>
                Cookies, die zur Durchführung des elektronischen
                Kommunikationsvorgangs (notwendige Cookies) oder zur
                Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
                (funktionale Cookies, z. B. für die Warenkorbfunktion) oder zur
                Optimierung der Website (z. B. Cookies zur Messung des
                Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
                Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
                berechtigtes Interesse an der Speicherung von Cookies zur
                technisch fehlerfreien und optimierten Bereitstellung seiner
                Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
                abgefragt wurde, erfolgt die Speicherung der betreffenden
                Cookies ausschlie&szlig;lich auf Grundlage dieser Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit
                widerrufbar.
            </p>

            <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben, die Annahme von Cookies für bestimmte Fälle oder
                generell ausschlie&szlig;en sowie das automatische Löschen der
                Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der
                Deaktivierung von Cookies kann die Funktionalität dieser Website
                eingeschränkt sein.
            </p>

            <p>
                Soweit Cookies von Drittunternehmen oder zu Analysezwecken
                eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
                Datenschutzerklärung gesondert informieren und ggf. eine
                Einwilligung abfragen.
            </p>

            <h3>Kontaktformular</h3>

            <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
            </p>

            <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Ma&szlig;nahmen erforderlich ist. In allen übrigen Fällen beruht
                die Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben
                unberührt.
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>

            <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Ma&szlig;nahmen erforderlich ist. In allen übrigen Fällen beruht
                die Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <p>
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
                &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash;
                bleiben unberührt.
            </p>

            <h2>5. Plugins und Tools Google Maps</h2>

            <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
                Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House,
                Barrow Street, Dublin 4, Irland.
            </p>

            <p>
                Zur Nutzung der Funktionen von Google Maps ist es notwendig,
                Ihre IP-Adresse zu speichern. Diese Informationen werden in der
                Regel an einen Server von Google in den USA übertragen und dort
                gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
                diese Datenübertragung. Wenn Google Maps aktiviert ist, kann
                Google zum Zwecke der einheitlichen Darstellung der Schriftarten
                Google Web Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr
                Browser die benötigten Web Fonts in ihren Browsercache, um Texte
                und Schriftarten korrekt anzuzeigen.
            </p>

            <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer
                ansprechenden Darstellung unserer Online- Angebote und an einer
                leichten Auffindbarkeit der von uns auf der Website angegebenen
                Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
                Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung
                ist jederzeit widerrufbar.
            </p>

            <p>
                Die Datenübertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gestützt.
            </p>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(DataPrivacy)
