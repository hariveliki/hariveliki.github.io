import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./simi.css";
import simi from "../../Assets/simi.jpeg";
import caillou from "../../Assets/caillou.jpeg";

function Simi() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="simi-container">
        <Row>
          <Col className="post-content">
            <h1 className="heading">Meine Liebste Simone</h1>
            <div className="post-text">
              <p>
                Wir befinden uns gerade an der Gehrenholzstrasse 12 in
                Zürich, im Quartier Friesenberg. Das ist der Ort, an den du vor
                etwa 19 Jahren (ca. 2006), im Alter von ungefähr 7 Jahren, mit
                deiner Familie von Winterthur gezogen bist. Du hast an diesem
                Ort etwa 4 Jahre deines Lebens verbracht (bis ca. 2010) und
                damit einen wichtigen Teil deiner Kindheit. Ich möchte diese
                Zeilen nutzen, um dir einige Erinnerungen aus deiner Kindheit
                zurückzubringen. Falls du Lust hast, kannst du mir mehr davon
                erzählen.
              </p>
              <p>
                Anscheinend hat dir das Backen des Grossmami-Kuchens grosse Freude
                bereitet, wahrscheinlich wegen der Schokostreusel. Vielleicht
                hat sich von da an auch deine Vorliebe für Schokolade
                entwickelt. Friesenberg ist auch das Quartier, in dem deine
                Eltern das Plätzli-Fescht mitorganisiert haben. Dabei durftest
                du um den Block rennen, es gab Musik und diverse Stände, an
                denen du sicher auch naschen konntest.
              </p>
              <p>
                Eine Hausnummer weiter haben Elisabeth und Fredi auf euch
                aufgepasst, während Mamsi und Papsi gearbeitet haben. Vielleicht
                durftet ihr bei Elisabeth und Fredi auch mal Süssgetränke trinken
                oder ein bisschen fernsehen, was bei euch zu Hause nicht erlaubt
                war.
              </p>
              <p>
                26 Jahre später passe ich auf dich auf und sorge dafür, dass du
                keine Coca-Cola trinkst oder fernsiehst. In dieser Hinsicht hat
                sich anscheinend nicht viel verändert :D
              </p>
              <p>
                Was sich jedoch verändert hat, bist Du. Aus dem Kind ist eine
                wundervolle Frau geworden. Du verzauberst nicht nur mit deinem
                Aussehen, sondern auch mit deinem Charakter. Du bist das Ideal
                vieler Menschen, denn Du bist intelligent, selbstsicher,
                redegewandt, mutig, diszipliniert, sportlich, spirituell,
                empathisch, fürsorglich und vieles mehr. Lass dir von niemandem
                – auch nicht von dir selbst – das Gegenteil einreden.
              </p>
              <p>
                In den letzten 31 Jahren habe ich niemanden Vergleichbares
                getroffen. Ich hoffe, ich darf dir auch in den kommenden
                Jahrzehnten deinen Zuckerkonsum ein wenig einschränken, damit
                wir gemeinsam alt werden und gesund bleiben.
              </p>
              <p>Alles Gute zu deinem 26 Geburtstag.</p>
              <div className="signature-container">
                <p>In Liebe dein Caillou</p>
                <div className="post-image-caillou">
                  <img src={caillou} alt="Caillou" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="post-image">
              <img src={simi} alt="Simi" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Simi;
