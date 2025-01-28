import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./std.css";
import birth_death_rate from "../../Assets/Blog/Std/birth_death_rate.png";
import birth_rate_swiss from "../../Assets/Blog/Std/birth_rate_swiss.png";
import life_expect_swiss from "../../Assets/Blog/Std/life_expect_swiss.png";
import life_expectancy from "../../Assets/Blog/Std/life_expectancy.png";
import pop_by_age_swiss from "../../Assets/Blog/Std/pop_by_age_swiss.png";
import pop_by_age from "../../Assets/Blog/Std/pop_by_age.png";
import pop_swiss from "../../Assets/Blog/Std/pop_swiss.png";
import pop_total from "../../Assets/Blog/Std/pop_total.png";

function Std() {
  return (
    <Container fluid className="std-container">
      <Container className="std-container">
        <h1 className="std-heading">Demographischer Wandel</h1>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="std-description">
            <p>
              Ohne Massnahmen wird der demografische Wandel langfristig die
              wirtschaftliche Stabilität der Schweiz gefährden. Fragt man nach
              Prognosen zur gegenwärtigen und zukünftigen Weltbevölkerung, hört
              man oft die gleiche Aussage: Die Menschheit wächst kontinuierlich
              und eines Tages wird unser Planet überbevölkert sein. Doch ist dem
              wirklich so? Entwickelt sich die Weltbevölkerung auch in den
              nächsten 100 Jahren weiterhin steigend?
              <br />
              <br />
              Ein genauerer Blick auf die Zahlen wirft Fragen auf: Welche Rolle
              spielen sinkende Geburtenraten, eine alternde Bevölkerung und
              veränderliche Sterblichkeitsraten? Was bedeutet das für die
              globalen demografischen Trends? Und wie spiegeln sich diese
              Veränderungen auf nationaler Ebene wider – insbesondere in der
              Schweiz?
              <br />
              <br />
              Steht die Schweiz, wie viele andere Industrieländer, vor
              demografischen Herausforderungen? Sprich welche Folgen haben die
              sinkenden Geburtenrate, ein alternde Gesellschaft und die damit
              verbundenen wirtschaftlichen und sozialen Auswirkungen? Welche
              Implikationen ergeben sich daraus für Arbeitsmarkt, Rentensystem
              und Gesundheitswesen?
              <br />
              <br />
              Um diese Fragen zu beantworten, greifen wir auf Daten des
              Bundesamtes für Statistik (BFS) und des UN-Ministeriums für
              wirtschaftliche und soziale Angelegenheiten zurück. Diese bieten
              einen umfassenden Überblick über die globale und nationale
              Bevölkerungsentwicklung vom 20. Jahrhundert bis heute. Die
              nachfolgenden Analysen und Grafiken dienen dazu, die
              demografischen Entwicklungen besser zu verstehen und daraus
              fundierte Schlüsse für die Zukunft der Schweiz zu ziehen.
            </p>

            <h2 id="weltweit">Weltweit</h2>
            <p>
              Die Prognosen basieren auf einem 95%-Vorhersageintervall. Dies
              bedeutet, dass die tatsächliche Bevölkerungszahl mit einer
              Wahrscheinlichkeit von 95% innerhalb dieses Intervalls liegt,
              wobei eine Fehlerwahrscheinlichkeit von 5% besteht. Dieses
              Intervall spiegelt die Unsicherheiten wider, die durch
              unterschiedliche Annahmen zu Faktoren wie Geburtenraten,
              Sterberaten und Migration entstehen können.
            </p>
            <h3 id="bevölkerungsentwicklung">Bevölkerungsentwicklung</h3>
            <div className="content-wrapper">
              <p>
                Die Grafik “World: Total Population” zeigt die Entwicklung der
                Weltbevölkerung von 1950 bis heute sowie Prognosen bis zum Jahr
                2100. Bis 2025 verzeichnete die Weltbevölkerung einen
                kontinuierlichen Anstieg. Die mittlere Prognose deutet jedoch
                darauf hin, dass die Bevölkerungszahl ab etwa 2075 ihren
                Höhepunkt erreicht und anschliessend allmählich zurückgeht. Auch
                die optimistischere Variante, die ein späteres Maximum
                prognostiziert, zeigt langfristig einen rückläufigen Trend.
              </p>
              <img src={pop_total} alt="Bevölkerungsentwicklung" />
            </div>

            <h3 id="bevölkerungsstruktur">Bevölkerungsstruktur</h3>
            <div className="content-wrapper">
              <p>
                Die Grafik “World: Population by broad age groups” zeigt die
                weltweite Bevölkerung in vier Altersgruppen: 0–14 Jahre, 15–24
                Jahre, 25–64 Jahre und 65+. Die Altersgruppe 0–14 Jahre zeigt ab
                etwa 2025 eine sinkende Tendenz, wobei diese Entwicklung durch
                eine Stabilisierung auf einem niedrigeren Niveau geprägt ist.
                Die Altersgruppe 15–24 Jahre folgt einem ähnlichen Muster,
                jedoch mit einer zeitlichen Verzögerung, indem der Rückgang erst
                nach 2030 einsetzt. Die Altersgruppe 65+ zeigt eine deutlich
                ansteigende Tendenz. Seit 1950 wächst sie kontinuierlich und
                wird voraussichtlich bis 2100 weiter steigen, was auf eine
                alternde Weltbevölkerung hindeutet. Die Gruppe der
                25–64-Jährigen, die als erwerbstätige Bevölkerung gilt, nimmt
                bis etwa 2050 zu und erreicht ein Plateau, bevor sie allmählich
                abnimmt. Dies deutet auf mögliche zukünftige Herausforderungen
                auf dem Arbeitsmarkt und der Versorgung der alternden
                Bevölkerung hin.
              </p>
              <img src={pop_by_age} alt="Bevölkerungsstruktur" />
            </div>

            <h3 id="lebenserwartung">Lebenserwartung</h3>
            <div className="content-wrapper">
              <p>
                Die Grafik mit dem Titel “World: Life expectancy at birth (both
                sexes combined)” zeigt die Entwicklung der Lebenserwartung der
                weltweiten Bevölkerung ab der Geburt im Zeitraum von 1950 bis
                2100. Die Lebenserwartung ist im Laufe der Jahre kontinuierlich
                gestiegen, wobei es in bestimmten Zeiträumen zu leichten
                Rückgängen kam, wie zwischen 1950 und 1975 sowie 2010 und 2025.
                Das letztere ist wahrscheinlich auf die Auswirkungen der
                COVID-19-Pandemie zurückzuführen, welche insbesondere die ältere
                Bevölkerungsgruppe stark getroffen hat. Die Grafik verdeutlicht
                die Sensibilität der Lebenserwartung gegenüber globalen Krisen.
              </p>
              <img src={life_expectancy} alt="Lebenserwartung" />
            </div>

            <h3 id="geburten-und-sterberate">Geburten- und Sterberate</h3>
            <div className="content-wrapper">
              <p>
                Mit der steigenden Lebenserwartung sind sowohl die Geburten- als
                auch die Sterberaten seit 1950 kontinuierlich gesunken. Während
                die Sterberate aktuell ein Plateau erreicht hat, wird sie in
                Zukunft voraussichtlich wieder ansteigen. Dies liegt daran, dass
                sich die Lebenserwartung biologisch vermutlich auf einem
                bestimmten Niveau stabilisieren wird – es sei denn, disruptive
                Technologien schaffen es, den Alterungsprozess vollständig zu
                stoppen. Die Geburtenrate hingegen befindet sich seit den
                1950er-Jahren in einem kontinuierlichen Sinkflug und wird laut
                Prognosen nach 2075 die Sterberate unterschreiten. Dieser Punkt
                markiert eine bedeutende Verschiebung: Die Sterblichkeit wird
                dann schneller zunehmen, als die Geburtenrate abnimmt. Dies
                deutet darauf hin, dass der Rückgang der Weltbevölkerung ab
                diesem Zeitpunkt an Tempo gewinnen wird.
              </p>
              <img src={birth_death_rate} alt="Geburten- und Sterberate" />
            </div>

            <h2 id="schweiz">Schweiz</h2>
            <h3 id="bevölkerungsentwicklung-schweiz">
              Bevölkerungsentwicklung
            </h3>
            <div className="content-wrapper">
              <p>
                Die Grafik “Entwicklung der ständigen Wohnbevölkerung und der
                Komponenten der Entwicklung” zeigt die Bevölkerungsentwicklung
                anhand zweier Komponenten: Geburtenüberschuss und
                Wanderungssaldo. Der Geburtenüberschuss ergibt sich aus der
                Differenz zwischen Geburten und Todesfällen, während der
                Wanderungssaldo die Differenz zwischen Zuwanderung und
                Abwanderung darstellt. Bis 1945 war der Geburtenüberschuss der
                Haupttreiber des Bevölkerungswachstums. In der Nachkriegszeit
                beschleunigte sich dieses Wachstum durch zunehmende Immigration.
                Ab den 1960er-Jahren nahm der Geburtenüberschuss deutlich ab,
                sodass seit den 1980er-Jahren die internationale Migration der
                bedeutendste Wachstumsfaktor in der Schweiz ist.
                <a href="#ref2" className="citation">
                  [2]
                </a>
              </p>
              <img
                src={pop_swiss}
                alt="Bevölkerungsentwicklung"
                className="bfs-img"
              />
            </div>

            <h3 id="bevölkerungsstruktur-schweiz">Bevölkerungsstruktur</h3>
            <div className="content-wrapper">
              <p>
                Die Grafik “Altersaufbau nach Geschlecht und
                Staatsangehörigkeit” zeigt, dass rund 20 % der Bevölkerung
                zwischen 0 und 19 Jahren alt sind, etwa 60 % im erwerbsfähigen
                Alter (20–64 Jahre) und ca. 20 % im Rentenalter (ab 65 Jahren).
                Die Altersgruppe der 40- bis 64-Jährigen stellt die zahlenmässig
                grösste Gruppe dar. Das Durchschnittsalter beträgt etwa 43
                Jahre. Seit 1990 ist der Anteil Jugendlicher (0–19 Jahre) um 3,5
                Prozentpunkte gesunken ebenso der Anteil der Erwerbstätigen,
                dieser jedoch nur um 0,7 Prozentpunkte. Im gleichen Zeitraum
                stieg der Seniorenanteil um 4,2 Prozentpunkte.
                <a href="#ref2" className="citation">
                  [2]
                </a>
              </p>
              <img
                src={pop_by_age_swiss}
                alt="Bevölkerungsstruktur"
                className="bfs-img"
              />
            </div>

            <h3 id="lebenserwartung-schweiz">Lebenserwartung</h3>
            <div className="content-wrapper">
              <p>
                Die Lebenserwartung bei der Geburt hat sich in den 144 Jahren
                von 1876 bis 2020 mehr als verdoppelt; von 39,1 Jahren auf heute
                rund 80 Jahre. Die Zunahme hat sich jedoch allmählich
                verlangsamt und scheint bei etwa 80 Jahren keinen signifikanten
                Anstieg mehr zu verzeichnen. Ein ähnlicher Trend ist weltweit zu
                beobachten, wobei die globale Lebenserwartung seit 1950
                ebenfalls kontinuierlich gestiegen ist. Die COVID-19-Pandemie im
                Jahr 2020 führte in der Schweiz zu einem Rückgang der
                Lebenserwartung um 0,9 Jahre bei Männern und 0,5 Jahren bei
                Frauen, während weltweit ähnliche Rückgänge registriert wurden.
                Auch die Lebenserwartung im Alter von 65 Jahren ist in der
                Schweiz deutlich gestiegen. Bis 2020 erhöhte sie sich auf 19,3
                Jahre bei Männern und 22,2 Jahre bei Frauen. Dieser Anstieg
                spiegelt den weltweiten Fortschritt in der Behandlung von
                Herz-Kreislauf- und Krebserkrankungen wider, die zu den
                häufigsten Todesursachen zählen.
                <a href="#ref3" className="citation">
                  [3]
                </a>
              </p>
              <img
                src={life_expect_swiss}
                alt="Lebenserwartung"
                className="bfs-lebenserwartung-img"
              />
            </div>

            <h3 id="geburtenhäufigkeit">Geburtenhäufigkeit</h3>
            <div className="content-wrapper">
              <p>
                Im Jahr 2020 wurden in der Schweiz 85’900 Kinder geboren, was
                leicht über dem Wert von 1990 lag und etwa dem Niveau vor der
                Pandemie im Jahr 2019 entsprach. Seit Beginn der statistischen
                Erhebungen ist die Zahl der Geburten insgesamt rückläufig, zeigt
                jedoch seit 2005 einen moderaten Anstieg. Dieser Zuwachs ist
                vor allem auf das Bevölkerungswachstum durch Immigration
                zurückzuführen, während die Geburtenrate unverändert bleibt.
                <a href="#ref4" className="citation">
                  [4]
                </a>
              </p>
              <img
                src={birth_rate_swiss}
                alt="Geburtenhäufigkeit"
                className="bfs-lebendgeburten-img"
              />
            </div>

            <h2 id="kontextualisierung">Kontextualisierung für die Schweiz</h2>
            <p>
              Der Bericht zeigt, dass Migration den demografischen Wandel in der
              Schweiz und die damit verbundenen Herausforderungen wie die
              Finanzierung des Rentensystems, den Fachkräftemangel und steigende
              Kosten im Gesundheitswesen nicht nachhaltig lösen kann, da
              sinkende Geburtenraten und eine alternde Bevölkerung globale
              Trends sind.
              <br />
              <br />
              Der Fachkräftemangel wird derzeit teilweise durch Migration
              gemildert, doch langfristig sollten nationale Massnahmen wie die
              Förderung von Familien, eine höhere Erwerbsbeteiligung und
              flexiblere Rentenmodelle stärker in den Fokus rücken. Die Schweiz
              kann ihre wirtschaftliche Stärke nutzen, um Innovationen
              voranzutreiben, die die Auswirkungen des demografischen Wandels
              abfedern.
              <br />
              <br />
              Ein zentraler Ansatzpunkt sollten familienfreundliche Reformen
              sein um eine Erhöhung der Geburtenraten zu fördern. So zum
              Beispiel würde eine Verlängerung des Mutterschaftsurlaubs mehr
              Zeit für die frühkindliche Betreuung bieten, während eine Erhöhung
              des Kindergeldes die finanzielle Belastung von Familien
              verringert. Der Ausbau von Kindertagesstätten und betrieblicher
              Kinderbetreuung verbessert die Vereinbarkeit von Beruf und
              Familie. Flexible Arbeitsmodelle wie Teilzeit und Homeoffice
              erleichtern die Balance zwischen Berufs- und Privatleben. Ein
              bezahlter Vaterschaftsurlaub fördert die aktive Rolle von Vätern
              in der Kinderbetreuung.
            </p>

            <div className="references">
              <h2>Quellenangaben</h2>
              <ol className="references-list">
                <li id="ref1">
                  <a
                    href="https://population.un.org/wpp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    United Nations, Department of Economic and Social Affairs,
                    Population Division (2022). World Population Prospects 2024
                  </a>
                </li>
                <li id="ref2">
                  <a
                    href="https://www.swissstats.bfs.admin.ch/collection/ch.admin.bfs.swissstat.de.issue22014792000/article/issue22014792000-04"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demographisches Portrait der Schweiz: Bevölkerung und
                    Haushalte
                  </a>
                </li>
                <li id="ref3">
                  <a
                    href="https://www.swissstats.bfs.admin.ch/collection/ch.admin.bfs.swissstat.de.issue22014792000/article/issue22014792000-06"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demographisches Portrait der Schweiz: Todesfälle und Sterblichkeit
                  </a>
                </li>
                <li id="ref4">
                  <a
                    href="https://www.swissstats.bfs.admin.ch/collection/ch.admin.bfs.swissstat.de.issue22014792000/article/issue22014792000-05"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demographisches Portrait der Schweiz: Geburten und
                    Geburtenhäufigkeit
                  </a>
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Std;
