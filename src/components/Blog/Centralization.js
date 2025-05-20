import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pim.css";
import ist from "../../Assets/Blog/Centralization/ist.png";
import soll from "../../Assets/Blog/Centralization/soll.png";
import phases from "../../Assets/Blog/Centralization/phases.jpeg";
import scrum from "../../Assets/Blog/Centralization/scrum.png";
import planning from "../../Assets/Blog/Centralization/planning.png";
import community from "../../Assets/Blog/Centralization/community.png";
import documentation from "../../Assets/Blog/Centralization/documentation.png";

function Centralization() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3");
    const headingElements = Array.from(headings);

    const handleScroll = () => {
      const found = headingElements.find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top > 0 && rect.top < window.innerHeight / 2;
      });

      if (found) {
        setActiveSection(found.id);
      }
    };

    headingElements.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TableOfContents = () => (
    <nav className="table-of-contents">
      <ul className="toc-list">
        <li>
          <span
            data-target="einleitung"
            className={activeSection === "einleitung" ? "active" : ""}
          >
            Einleitung
          </span>
        </li>
        <li>
          <span
            data-target="meine-rolle"
            className={activeSection === "meine-rolle" ? "active" : ""}
          >
            Meine Rolle
          </span>
        </li>
        <li>
          <span
            data-target="projektbeschreibung"
            className={activeSection === "projektbeschreibung" ? "active" : ""}
          >
            Projektbeschreibung
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="ist"
                className={activeSection === "ist" ? "active" : ""}
              >
                IST Zustand
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="soll"
                className={activeSection === "soll" ? "active" : ""}
              >
                SOLL Zustand
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="projektvorgehen"
            className={activeSection === "projektvorgehen" ? "active" : ""}
          >
            Projektvorgehen
          </span>
        </li>
        <li>
          <span
            data-target="scrum-methodologie"
            className={activeSection === "scrum-methodologie" ? "active" : ""}
          >
            Scrum-Methodologie
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="team"
                className={activeSection === "team" ? "active" : ""}
              >
                Team
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="backlog"
                className={activeSection === "backlog" ? "active" : ""}
              >
                Backlog
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="epics"
                className={activeSection === "epics" ? "active" : ""}
              >
                Epics
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="planning"
                className={activeSection === "planning" ? "active" : ""}
              >
                Planning
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="daily"
                className={activeSection === "daily" ? "active" : ""}
              >
                Daily
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="kommunikation"
            className={activeSection === "kommunikation" ? "active" : ""}
          >
            Kommunikation
          </span>
        </li>
        <li>
          <span
            data-target="dokumentation"
            className={activeSection === "dokumentation" ? "active" : ""}
          >
            Dokumentation
          </span>
        </li>
        <li>
          <span
            data-target="reflexion"
            className={activeSection === "reflexion" ? "active" : ""}
          >
            Reflexion
          </span>
        </li>
      </ul>
    </nav>
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "4rem 0",
        fontFamily: "ui-monospace, monospace",
      }}
    >
      <div className="table-of-contents-wrapper">
        <TableOfContents />
      </div>

      <Container style={{ paddingLeft: "calc(12% + 1.5rem)", maxWidth: "95%" }}>
        <Row>
          <Col md={12} className="mx-auto">
            <div className="p-3 mb-1">
              <h1
                style={{
                  marginTop: "3rem",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "#0d6efd", textDecoration: "underline" }}>
                  Datenzentralisierung mit PIM: Ein Erfahrungsbericht
                </span>
              </h1>

              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col md={12} className="project-description">
                  <h2 id="einleitung">Einleitung</h2>
                  <p>
                    Von 2019 bis 2022 habe ich für ein Schweizer Warenhaus an
                    einem Stammdaten Projekt mitgearbeitet. Es ging darum die
                    Organisation der Produktdaten zu zentralisieren, mithilfe
                    eines neuen Product Information Management System (PIM)
                    Systems. In diesem Artikel möchte über unser Projektvorgehen
                    und meine Rolle darin berichten. Während des Projekts
                    übernahm ich diverse Rollen und Aufgaben, darunter{" "}
                    <strong>
                      Scrum Master, Datenanalyst und Teilprojektleiter
                    </strong>
                    , jedoch konzentriert sich dieser Artikel hauptsächlich auf
                    meine Rolle als Scrum Master. Der Artikel beantwortet
                    folgende Fragen:
                  </p>
                  <p>
                    - Warum ist die zentrale Organisation der Produktdaten
                    wichtig?
                  </p>
                  <p>- Wie haben wir das Projekt abgewickelt?</p>
                  <p>- Welche Projektmanagement Methoden haben wir genutzt?</p>
                  <p>
                    - Welche Elemente haben für den Projekterfolg eine zentrale
                    Rolle gespielt?
                  </p>
                  <h2 id="meine-rolle">Meine Rolle</h2>
                  <p>
                    Die Rolle des <strong>Scrum Master</strong> umfasst{" "}
                    <strong>
                      Servant Leadership, Coaching und Vermittlung
                    </strong>
                    . Als <strong>Servant Leader</strong> war es meine Aufgabe
                    das Team dabei zu unterstützen{" "}
                    <strong>
                      selbstständiger, anpassungsfähiger und engagierter
                    </strong>{" "}
                    zu arbeiten. Als <strong>Coach</strong> vermittelte ich
                    unser Projektvorgehen innerhalb der Organisation und stellte
                    sicher das alle <strong>Scrum-Events</strong> wie{" "}
                    <strong>
                      Daily Stand-ups, Sprint Planning, Sprint Reviews und
                      Retrospektiven
                    </strong>{" "}
                    effektiv durchgeführt wurden. Als{" "}
                    <strong>Vermittler</strong> bestand meine Rolle darin, eine
                    Verbindung zwischen dem Projektteam und allen Stakeholdern
                    Projektteam und allen Stakeholdern zu schaffen, Konflikte zu
                    lösen und ein Umfeld zu schaffen, indem effektives Arbeiten
                    ermöglicht werden sollte.
                  </p>
                  <h2 id="projektbeschreibung">Projektbeschreibung</h2>
                  <p>
                    Die "Time to Market" beschreibt die Zeitspanne vom
                    Bestellzeitpunkt bis zum Verkauf an den Kunden. Als
                    Detailhändler gilt es diese Zeit zu minimieren, um Kosten
                    einzusparen, was sich indirekt auf den Umsatz auswirkt.
                    Diese Zeit wird von drei Variablen beeinflusst, nämlich den
                    Lieferanten, den internen Prozessen und den genutzten
                    Systemen. Eines dieser Systeme ist das PIM und spielt eine
                    zentrale Rolle, um die "Time to Market" zu verkürzen. So
                    ermöglicht das richtige PIM zum Beispiel die Zentralisierung
                    der Produktdaten, das automatische anreichern dieser
                    Produktdaten mit Individualsoftware und das beliefern von
                    Subsystemen wie dem Online Shop mit hochqualitativen Daten,
                    die benötigt werden, um sie dem Kunden präsentieren zu
                    können.
                  </p>
                  <p>
                    Die damaligen Prozesse waren dezentral abgewickelt und das
                    genutzte PIM konnte für eine Optimierung der
                    Prozesslandschaft nicht genutzt werden. Im Gegenteil, es
                    verursachte zusätzlichen manuellen Aufwand und war teuer zu
                    gleich. Um dieses Problem zu lösen, hat sich das Unternehmen
                    entschieden ein neues PIM einzuführen. Es sollte dabei
                    helfen, die Prozesse zu vereinfachen sowie den
                    Automatisierungsgrad mithilfe von selbstentwickelter
                    Software zu erhöhen.
                  </p>
                  <h3 id="ist">IST Zustand</h3>
                  <p>
                    Vor dem Projekt wurde die Produktdatenverwaltung dezentral
                    organisiert, d.h. Abteilungen wie der Einkauf hatten ihren
                    eigenen Prozess für das Onboarding der Produkte. Das
                    Onboarding bezeichnet alle involvierten Schritte, die
                    benötigt werden, um die Produktdaten vom Lieferanten, in die
                    Systeme des Unternehmens zu integrieren. Im Worst-Case
                    Szenario fand kein automatisierter Datenaustausch statt.
                    Dann erhielten die Einkäufer die Daten zum Beispiel als
                    Excel Tabellen via Mail oder auf Share Points. Die
                    Einkaufsassistenten gaben dann die Produktdaten manuell im
                    Enterprise Resource Planning (ERP)-System ein. Da das
                    ERP-System nur die grundlegendsten Informationen beinhaltet
                    und das Anreichern detaillierter Produktinformationen nicht
                    ermöglicht, müssen Datenpfleger die Produkte manuell im PIM
                    anreichern, wie zum Beispiel das hinzufügen von
                    Beschreibungen und Bildern. Erst nach dem
                    Anreicherungsprozess im PIM ist die Produktdaten Qualität so
                    hoch, dass sie der Online Shop dem Kunden präsentieren kann.
                  </p>
                  <div className="image-container">
                    <img
                      src={ist}
                      alt="Ist Zustand"
                      className="img-fluid mb-3"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h3 id="soll">Soll Zustand</h3>
                  <p>
                    Das Ziel des Unternehmens war es die Produktdatenverwaltung
                    zentral zu organisieren, um den Onboardingprozess zu
                    beschleunigen sowie eine transparentere Prozesslandschaft zu
                    bekommen. Anstatt das jede Abteilung die Daten separat
                    verwaltet, sollten alle Lieferantendaten an einem zentralen
                    Ort abgelegt werden. Automatische Workflows würden sich die
                    Daten holen, verarbeiten und weiterleiten. Die Abteilung für
                    Stammdaten würde dann noch die letzten Anpassungen vornehmen
                    und die Vollständigkeit absegnen. Ab diesem Zeitpunkt wären
                    die Produktdaten dann bereit, um sie an die entsprechenden
                    Subsysteme wie ERP oder Online Shop weiterzuleiten. Diese
                    neue Form der Organisation würde die oben schon genannten
                    Vorteile mit sich bringen sowie die Datenqualität
                    verbessern, was auch Nebeneffekte wie eine geringere
                    Retourenquote zur Folge hätte.
                  </p>
                  <div className="image-container">
                    <img
                      src={soll}
                      alt="Soll Zustand"
                      className="img-fluid mb-3"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>

                  <h2 id="projektvorgehen">Projektvorgehen</h2>
                  <p>
                    Unser Vorgehen kombinierte die strukturierte Planbarkeit des
                    Wasserfallmodells mit der Flexibilität von agilem
                    Projektmanagement. Während das Management des Unternehmens
                    einen vordefinierten Rahmen mit Phasen, Meilensteinen und
                    grob definierten Arbeitspaketen forderte, hatten wir
                    innerhalb einer Phase Gestaltungsfreiheit.
                  </p>
                  <p>
                    Das ursprüngliche Phasenmodell umfasste Analyse,
                    Spezifikationen, Entwicklung, Dokumentation und Schulung,
                    Migration sowie Weiterentwicklung. Meilensteine zwischen den
                    Phasen markierten wichtige Errungenschaften, bei denen wir
                    unsere Ergebnisse dem Management und den internen
                    Stakeholdern präsentierten. Externe Faktoren, wie die
                    globale Pandemie, zwangen uns jedoch zur Anpassung unseres
                    Vorgehens.
                  </p>
                  <p>
                    Um den Zeitplan einzuhalten mussten wir unser Vorgehen neu
                    strukturieren. Das Projekt wurde neu in drei Phasen
                    unterteilt:{" "}
                    <strong>Foundation, Skeleton und Refinement</strong>. Die{" "}
                    <strong>Foundation-Phase</strong> konzentrierte sich auf
                    Spezifikationen, Prozessdefinitionen und einen Proof of
                    Concept (PoC). Die <strong>Skeleton-Phase</strong> sollte
                    ein Minimum Viable Product (MVP) liefern, das die Migration
                    vom alten zum neuen PIM-System sicherstellte und
                    schliesslich umfasste die <strong>Refinement-Phase</strong>{" "}
                    alle Aufgaben die nicht Go-Live relevant waren.
                  </p>
                  <div className="image-container">
                    <img
                      src={phases}
                      alt="Phasen"
                      className="img-fluid mb-3"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h2 id="scrum-methodologie">Scrum-Methodologie</h2>
                  <p>
                    Um bestmöglich auf Veränderungen reagieren zu können, haben
                    wir einen iterativen Entwicklungsansatz innerhalb einer
                    Phasen definiert, bei dem Flexibilität über der strikten
                    Einhaltung vordefinierter Schritte (Wasserfallmodell)
                    gestellt wurde. Dieser Ansatz nennt sich Scrum (*Schwaber,
                    K., & Sutherland, J. (2017). The Scrum Guide.*) und kommt
                    vom agilen Projektmanagement. Ein Sprint (Iteration) wurde
                    intern als 10-tägiger Arbeitszyklus definiert. Der Sprint
                    umfasste Scrum-Rituale wie Daily Stand-ups, Reviews und
                    Retrospektiven, auf welche später noch im Detail eingegangen
                    wird. Intern hatten wir noch zusätzliche Anpassungen zu den
                    Scrum-Ritualen vorgenommen, wie zum Beispiel das Einführen
                    von Extended Daily. Dieses hatte mehr Teilnehmer (Experten)
                    und war nützlich um komplexere Fragen beantworten zu können.
                    Zu den jeweiligen Scrum-Events wurden diverse Tools genutzt
                    und die Teilnehmer jeweils definierten, wie in der Abbildung
                    ersichtlich.
                  </p>
                  <div className="image-container">
                    <img
                      src={scrum}
                      alt="Scrum"
                      className="img-fluid mb-3"
                      style={{
                        width: "80%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h3 id="team">Team</h3>
                  <p>
                    Das Team war, ist und wird immer das wichtigste Element in
                    jedem Projekt sein. Ein solches Team fördert die
                    Zusammenarbeit, gewährleistet den Wissensaustausch und
                    ermöglicht kreatives Problemlösen. Ohne ein engagiertes und
                    gut strukturiertes Team werden selbst die besten Strategien
                    und Technologien nicht zum Projekterfolg führen. Unser
                    Kernteam bestand aus 8 Mitgliedern: Scrum Master, PIM Owner,
                    Business Analyst, Data Analyst, zwei PIM-Entwicklern, einem
                    Online-Shop-Entwickler und einem Power-User des alten
                    PIM-Systems.
                  </p>
                  <h3 id="backlog">Backlog</h3>
                  <p>
                    Das Backlog definiert einen Ort an dem alle offenen Aufgaben
                    erfasst wurden. In unserem Fall wurde das Digital mithilfe
                    eines Tools gemacht. Jedoch kann dies auch physisch auf
                    einem Flipchart mit Post-Its gemacht werden. Während des
                    Sprints wurden Aufgaben von den Projektmitarbeitern
                    selbständig ins Backlog hinzugefügt und priorisiert. Vor dem
                    Beginn des nächsten Sprints, wurde dann noch gemeinsam ein
                    letztes Mal darüber geschaut, um sicherzustellen das keine
                    wichtigen Aufgaben untergegangen sind.
                  </p>
                  <h3 id="epics">Epics</h3>
                  <p>
                    Weil die Projektphasen einen langen Zeitraum umspannten,
                    wurden sie in mehrere Epics runter gebrochen. Epics waren
                    Teilziele die innerhalb einer Phase erledigt werden mussten.
                    Die Aufgaben aus dem Backlog wurden jeweils einem Epics
                    zugeordnet und ermöglichten dem Projektteam eine bessere
                    Übersicht. Desweiteren konnten die Stakeholder besser
                    nachvollziehen, an was wir gerade gearbeitet hatten.
                  </p>
                  <h3 id="planning">Planning</h3>
                  <p>
                    Die folgende Abbildung veranschaulicht was vor, während und
                    nach dem Sprint-Planning alles gemacht werden musste. Die
                    Teammitglieder mussten sich vor jedem Sprint vorbereiten und
                    die Aufgaben im Backlog priorisieren. Zu Beginn des Meetings
                    hatten wir über die vergangenen Leistungen gesprochen, zum
                    Beispiel ob wir unsere Ziele erreicht hatten oder nicht?
                    Falls die Ziele nicht erreicht worden waren, musste die
                    Aufgabe oder das Ziel entsprechend angepasst werden.
                  </p>
                  <p>
                    Dann richteten wir den Fokus auf die Definition neuer Ziele,
                    basierend auf den Aufgaben im aktuellen Sprint. Wir
                    überprüften jede Aufgabe kurz bezüglich Zeitschätzung und
                    diskutierten ob diese realistisch waren oder angepasst
                    werden mussten. Schliesslich wurde ein letztes Mal ein Blick
                    auf das Backlog geworfen, um sicherzustellen dass keine
                    Aufgaben übersehen wurden, die hohe Priorität für den
                    kommenden Sprint hatten.
                  </p>

                  <div className="image-container">
                    <img
                      src={planning}
                      alt="Planning"
                      className="img-fluid mb-3"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h3 id="daily">Daily</h3>
                  <p>
                    Daily Stand-ups waren kurze und effiziente Meetings, die in
                    der Regel 15 bis 30 Minuten dauerten. Diese wurden im Stehen
                    abgehalten, um aktiv bei der Sache zu bleiben. Jeden Morgen
                    wurden drei simple Fragen beantwortet: Was hast du gestern
                    erreicht? Was möchtest du heute erreichen? Gibt es
                    Hindernisse, die deinen Fortschritt behindern?
                  </p>
                  <p>
                    Wir haben uns angewöhnt, Nachrichten und andere Ablenkungen
                    während des Arbeitstages zu minimieren. Dadurch wurde das
                    Daily Stand-up zu einer Gelegenheit für jedes Teammitglied,
                    offen mit allen Anwesenden zu kommunizieren. Falls bestimmte
                    Themen eine tiefere Diskussion erforderten, wurde dies
                    bilateral weitergeführt.
                  </p>
                  <h2 id="kommunikation">Kommunikation</h2>
                  <p>
                    Während des Projekts stellten wir fest, dass unsere
                    Kommunikation mit den internen Stakeholdern nicht ideal war.
                    Das Feedback zu unseren Anfragen kam zu spät und die
                    Abteilungen waren über unseren aktuellen Arbeitsstand nicht
                    richtig im Bild. Monatliche oder zweimonatliche Reviews
                    boten nicht den erforderlichen Austausch den wir benötigten.
                  </p>
                  <p>
                    Um dies zu verbessern, initiierten wir ein wöchentliches
                    Community-Meeting, das speziell für interdisziplinäre
                    Q&A-Sitzungen konzipiert war. Das Hauptziel war, das Projekt
                    auf die geschäftlichen Anforderungen abzustimmen. Die
                    Stakeholder konnten die Entwicklung des Projektes direkt
                    beeinflussen, indem sie uns ihre Anforderungen direkt
                    kommunizierten.
                  </p>
                  <p>
                    Durch die Dokumentation jeder Sitzung konnte wir
                    Unstimmigkeiten klären, auf frühere Diskussionen
                    zurückgreifen, und den Stakeholdern sichtbar machen, dass
                    ihr Input geschätzt wurde und das Projekt in die richtige
                    Richtung sich entwickelte.
                  </p>
                  <h2 id="dokumentation">Dokumentation</h2>
                  <p>
                    Die Dokumentation hat während des Projekts vielseitige
                    Rollen gespielt. Zu Beginn war das Hauptziel, den internen
                    Stakeholdern das Projekt greifbarer und verständlicher zu
                    machen. Da noch keine neue PIM Plattform vorhanden war,
                    wirkten die Präsentationen während der Reviews oft Abstrakt.
                    Die Diskussionen drehten sich um Datenmodelle, APIs und
                    theoretische Konzepte und waren nicht greifbar genug. Um
                    diesem Problem entgegen zu wirken, erstellte ich eine
                    Dokumentation, die unsere Vision anschaulich darstellte, den
                    Nutzen des Projekts klar kommunizierte und unseren
                    Fortschritt transparent aufzeigte.
                  </p>
                  <p>
                    Nach dem Start der Plattform entwickelte sich die
                    Dokumentation weiter und diente einem neuen Hauptzweck,
                    nämlich als technische Referenz. Sie wurde zur zentralen
                    Ressource für das Verständnis der Systemarchitektur, für
                    Richtlinien zur effektiven Nutzung der PIM Plattform und für
                    die Diskussion verschiedener Themen im Bereich Master Data
                    Management.
                  </p>
                  <p>
                    Die folgende Abbildung ist ein Auszug aus der Dokumentation,
                    die ich im Laufe des Projekts erstellt und gepflegt habe.
                  </p>
                  <div className="image-container">
                    <img
                      src={documentation}
                      alt="Documentation"
                      className="img-fluid mb-3"
                      style={{
                        width: "90%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h2 id="reflexion">Reflexion</h2>
                  <p>
                    Der Übergang von einem dezentralen zu einem zentralen
                    Produktdatenmanagement, war eine komplexe Herausforderung.
                    Trotz der Rückschläge durch unvorhergesehene Ereignisse wie
                    eine Pandemie und den Ausfall von Teammitgliedern waren die
                    Widerstandsfähigkeit und Anpassungsfähigkeit des Teams
                    bemerkenswert.
                  </p>
                  <p>
                    Die Rolle als Scrum Masters hat meine Leadership Fähigkeiten
                    weiterentwickelt. Es war äusserst motivierend zu sehen, wie
                    das Team zunehmend selbstständiger wurde, gestärkt durch
                    meine Unterstützung. Diese Rolle hat meine Überzeugung
                    bestätigt, dass Führung durch Empowerment nicht nur die
                    Produktivität steigert, sondern auch Eigeninitiative und
                    kontinuierliche Verbesserung fördert.
                  </p>
                  <p>
                    Die Einführung wöchentlicher interdisziplinärer Meetings
                    verbesserte die Einbindung der internen Stakeholder und
                    unsere Abstimmung mit den geschäftlichen Anforderungen.
                    Rückblickend erkenne ich die Bedeutung transparenter
                    Kommunikation für den Erfolg eines komplexen Projekts
                    besser. Die Interaktionen hätten früher im Projektzyklus
                    initiieren werden sollen, um das Verständnis der Stakeholder
                    bezüglich des Projektes zu verbessern.
                  </p>
                  <p>
                    Für zukünftige Projekte werde ich besonderen Wert auf
                    proaktive Kommunikation legen. Dies reduziert
                    Missverständnisse und stärkt das Vertrauen in das Projekt
                    und Projektteam. Zudem bleibt die Weiterentwicklung meiner
                    Soft Skills, insbesondere in den Bereichen Kommunikation und
                    Konfliktlösung, eine Priorität. Insgesamt war diese
                    Erfahrung äusserst wertvoll. Sie hat sowohl mein technisches
                    Wissen als auch meine Führungskompetenzen gestärkt – eine
                    solide Grundlage für zukünftige Projekte.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Centralization;
