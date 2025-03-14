import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pim.css";
import ist from "../../Assets/Blog/Centralization/ist.png";
import soll from "../../Assets/Blog/Centralization/soll.png";
import phases from "../../Assets/Blog/Centralization/phases.jpeg";
import scrum from "../../Assets/Blog/Centralization/scrum.png";
// import planning from "../../Assets/Blog/Centralization/planning.png";
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
            data-target="einführung"
            className={activeSection === "einführung" ? "active" : ""}
          >
            Einführung
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
                data-target="daily-stand-ups"
                className={activeSection === "daily-stand-ups" ? "active" : ""}
              >
                Daily Stand-ups
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
                  Mit Zentralen Produkt Stammdaten zum Erfolg
                </span>
              </h1>

              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col md={12} className="project-description">
                  <h2 id="einführung">Einführung</h2>
                  <p>
                    Ende 2019 arbeitete ich für einen Luxus-Einzelhändler, der
                    erhebliche Herausforderungen im Bereich des
                    Produktdatenmanagements hatte. Die Ineffizienzen in unseren
                    Prozessen verzögerten den Warenfluss von den Lieferanten zu
                    den Kunden – was wir als „Time to Market“ bezeichneten.
                    Unser bestehendes Product Information Management System
                    (PIM) war teuer und übermässig komplex, was unnötige
                    betriebliche Engpässe verursachte. Um dieses Problem zu
                    lösen, starteten wir ein Projekt zur Implementierung eines
                    neuen PIM, das die Kosten senken und gleichzeitig
                    benutzerfreundlicher sein sollte.
                  </p>
                  <p>
                    Dieses Projekt brachte eine Reihe von Herausforderungen mit
                    sich. Der COVID-19-Lockdown störte den Betrieb, wichtige
                    Teammitglieder gingen in Mutterschaftsurlaub, und wir
                    mussten eine laufende Anwendung auf einem veralteten, nicht
                    mehr unterstützten System aufrechterhalten. Es fehlten
                    Browser-Updates, die Datenmenge wuchs rasant, und zusätzlich
                    mussten wir auf ein neues System umsteigen, während alles
                    weiterhin funktionierte.
                  </p>
                  <p>
                    Zu dieser Zeit wurde unsere Produktdatenverwaltung dezentral
                    organisiert. Jede Abteilung – Damenmode, Beauty, Home &
                    Living und andere – hatte ihren eigenen Onboarding-Prozess
                    für Lieferanten. Einkäufer und ihre Assistenten gaben die
                    Produktdetails manuell in unser Enterprise Resource Planning
                    (ERP)-System ein, das nur die grundlegendsten Daten an das
                    PIM weiterleitete. Da das ERP-System Einschränkungen bei der
                    Verwaltung detaillierter Produktinformationen hatte, mussten
                    Datenverwalter die Produktlisten manuell anreichern –
                    Beschreibungen, Bilder, Grössen und andere wichtige Details
                    hinzufügen –, bevor die Daten im Online-Shop für Kunden
                    sichtbar waren. Das PIM lieferte also die notwendigen
                    Produktdetails an den Online-Shop.
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
                  <p>
                    Unser Ziel war es, zu einer zentralisierten Vorgehensweise
                    überzugehen. Anstatt dass jede Abteilung die Daten separat
                    verwaltete, sollten alle Lieferanten ihre
                    Produktinformationen an einem vordefinierten Ort
                    bereitstellen oder uns über ihre Plattformen – sei es eine
                    Webseite, SharePoint oder Cloud-Speicher – Zugang gewähren.
                    Unsere massgeschneiderten Microservices verarbeiteten dann
                    diese Daten und luden sie über eine REST-API in das neue PIM
                    hoch. Beim Eintreffen im PIM waren die Daten bereits
                    teilweise angereichert, sodass Einkäufer, Assistenten und
                    Datenverwalter abschliessende Verfeinerungen in einem
                    einzigen, einheitlichen System vornehmen konnten. Das PIM
                    lieferte dann die angereicherten Daten an alle relevanten
                    Subsysteme, einschliesslich ERP und Online-Shops.
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
                  <p>
                    Diese neue Art der Produktdatenorganisation reduzierte
                    Fehler, verbesserte die Datenqualität und – was am
                    wichtigsten war – beschleunigte den Prozess, Produkte von
                    den Lieferanten zu den Kunden zu bringen. Rückblickend war
                    es ein herausforderndes, aber lohnendes Projekt, das die
                    Kraft der Datenzentralisierung und den Einsatz
                    massgeschneiderter Software zur Optimierung von
                    Geschäftsprozessen unter Beweis stellte.
                  </p>

                  <h2 id="meine-rolle">Meine Rolle</h2>
                  <p>
                    Im Rahmen dieses zweijährigen Projekts übernahm ich mehrere
                    Rollen, darunter{" "}
                    <strong>
                      Scrum Master, Datenanalyst und Teilprojektleiter
                    </strong>
                    . In diesem Artikel konzentriere ich mich hauptsächlich auf
                    meine Rolle als <strong>Scrum Master</strong>.
                  </p>
                  <p>
                    Als <strong>Scrum Master</strong> war ich ein{" "}
                    <strong>Servant Leader</strong>, der das Team zu hoher
                    Leistungsfähigkeit führte. Ich coachte das Team täglich und
                    stellte sicher, dass alle Scrum-Events – Daily Stand-ups,
                    Sprint Planning, Sprint Reviews und Retrospektiven –
                    effektiv durchgeführt wurden. Mein Ziel war klar: ein Umfeld
                    zu schaffen, in dem das Team gedeihen konnte. Das Team
                    übernahm agile Best Practices und verbesserte sich
                    kontinuierlich. Es ergriff <strong>Eigeninitiative</strong>,
                    organisierte sich selbst und strebte unabhängig nach
                    Exzellenz. Desweiteren war ich ein{" "}
                    <strong>Brückenbauer</strong> der das Team mit dem Product
                    Owner und allen anderen Stakeholdern verbunden hat.
                  </p>
                  <p>
                    Im Wesentlichen war ich{" "}
                    <strong>kein Manager, sondern ein Enabler</strong>, der das
                    Team dazu befähigt,{" "}
                    <strong>
                      selbstständig, anpassungsfähig und engagiert zu arbeiten
                    </strong>
                    .
                  </p>

                  <h2 id="projektvorgehen">Projektvorgehen</h2>
                  <p>
                    Unser Projektmanagementansatz kombinierte die strukturierte
                    Planbarkeit des Wasserfallmodells mit der Flexibilität von
                    Agile/Scrum. Während das Management einen vordefinierten
                    Rahmen mit Phasen, Meilensteinen und grob definierten
                    Arbeitspaketen benötigte, hatten wir innerhalb jeder Phase
                    die Freiheit zur Anpassung.
                  </p>
                  <p>
                    Das ursprüngliche Phasenmodell umfasste Analyse,
                    Spezifikationen, Entwicklung, Dokumentation & Schulung,
                    Migration und Weiterentwicklung. Meilensteine zwischen den
                    Phasen markierten wichtige Errungenschaften, bei denen wir
                    unsere Ergebnisse dem Management und den internen
                    Abteilungen präsentierten. Externe Faktoren, wie die globale
                    Pandemie, zwangen uns jedoch zur Anpassung unseres
                    Vorgehens.
                  </p>
                  <p>
                    Um die Umsetzung zu vereinfachen, strukturierten wir das
                    Projekt in drei neue Phasen: Foundation, Skeleton und
                    Refinement. Die <strong>Foundation-Phase</strong>{" "}
                    konzentrierte sich auf Spezifikationen, Prozessdefinitionen,
                    einen Proof of Concept und die Zustimmung der Community. Die{" "}
                    <strong>Skeleton-Phase</strong> lieferte ein Minimum Viable
                    Product (MVP), das die Migration vom alten zum neuen PIM-
                    System sicherstellen sollte. Schliesslich umfasste die{" "}
                    <strong>Refinement-Phase</strong> nach der Migration
                    Verbesserungen, die nicht für den Go-Live-Termin
                    entscheidend waren.
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
                    Um die bestmöglichen Ergebnisse zu erzielen, haben wir einen
                    iterativen Arbeitsablauf zwischen den Phasen eingeführt, bei
                    dem wir Flexibilität über die strikte Einhaltung
                    vordefinierter Schritte gestellt haben. Dieser iterative
                    Ansatz integrierte Agile- und Scrum-Prinzipien in unseren
                    Projektmanagementprozess. Jede Iteration folgte einem
                    10-tägigen Zyklus, dem sogenannten Sprint. Der Sprint
                    umfasst Scrum-Rituale wie Daily Stand-ups und
                    Review-Sitzungen, auf die ich später im Detail eingehen
                    werde.
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
                    einem Projekt sein. Ein starkes Team fördert die
                    Zusammenarbeit, gewährleistet den Wissensaustausch und
                    ermöglicht kreatives Problemlösen. Ohne ein engagiertes und
                    gut strukturiertes Team werden selbst die besten Strategien
                    und Technologien nicht die gewünschten Ergebnisse liefern.
                    Unser Kernteam bestand aus 8 Mitgliedern: dem Scrum Master,
                    dem PIM Owner, einem Business Analyst, einem Data Analyst,
                    zwei PIM-Entwicklern, einem Online-Shop-Entwickler und einem
                    Power-User des alten PIM-Systems.
                  </p>

                  <h3 id="backlog">Backlog</h3>
                  <p>
                    Das Backlog ist ein zentrales Repository von Aufgaben, das
                    die Arbeit für das Team organisiert und priorisiert. Es
                    enthält User Stories, technische Anforderungen und
                    Verbesserungen. Während des Sprints trug jedes Teammitglied
                    unabhängig zum Backlog bei. Der PIM Owner übernahm jedoch
                    häufig die Verantwortung für dessen Verwaltung und
                    Verfeinerung, damit sich die Entwickler auf ihre technischen
                    Aufgaben konzentrieren konnten.
                  </p>

                  <h3 id="epics">Epics</h3>
                  <p>
                    Jede Phase des Projekts erforderte eine gewisse Struktur, um
                    die Komplexität zu bewältigen. Hier kamen die Epics ins
                    Spiel. Sie gruppierten verwandte Aufgaben, wodurch es dem
                    Team leichter fiel, ihren Beitrag zu verstehen, und den
                    Stakeholdern, unseren Fortschritt nachzuverfolgen. Wenn
                    Aufgaben zu umfassend waren, verfeinerten wir sie in
                    kleinere, handlungsfähige Schritte.
                  </p>

                  <h3 id="planning">Planning</h3>
                  <p>
                    Die folgende Abbildung veranschaulicht, wie ich die
                    Sprint-Planning sowohl vor als auch nach unserem
                    Team-Planungsevent angegangen bin. Zunächst priorisierte
                    jedes Teammitglied seine Tickets im Backlog unabhängig und
                    verschob sie ins Sprint-Board. Während der
                    Sprint-Planungssitzung reflektierte ich zunächst kurz über
                    unsere vergangene Leistung – haben wir unsere Ziele erreicht
                    oder nicht? Falls nicht, besprach ich mit dem Team, wie wir
                    diese Ziele optimieren könnten, um beim nächsten Mal
                    erfolgreicher zu sein.
                  </p>
                  <p>
                    Wenn unsere Ziele erreicht wurden, richtete ich den Fokus
                    auf die Definition neuer Ziele basierend auf den Tickets im
                    aktuellen Sprint-Board. Wir überprüften jedes Ticket kurz,
                    diskutierten, ob unsere Schätzungen realistisch waren oder
                    angepasst werden mussten. Schliesslich stellte ich sicher,
                    dass wir das Backlog ein letztes Mal gemeinsam überprüften.
                    Dieser Schritt sollte sicherstellen, dass wir nichts
                    übersehen hatten, das möglicherweise eine höhere Priorität
                    für den kommenden Sprint erforderte.
                  </p>
                  {/* TODO: rewrite image content */}
                  {/* <div className="image-container">
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
                  </div> */}

                  <h3 id="daily-stand-ups">Daily Stand-ups</h3>
                  <p>
                    Daily Stand-ups waren immer kurze, aber effektive Meetings,
                    die in der Regel nur 15 bis 30 Minuten dauerten. Ich habe
                    mein Team dazu ermutigt, diese Meetings im Stehen
                    abzuhalten, da diese einfache Veränderung uns auf natürliche
                    Weise engagierter und prägnanter machte. Jeden Morgen
                    stellte ich drei einfache Fragen: Was hast du gestern
                    erreicht? Was ist dein Ziel für heute? Gibt es Hindernisse,
                    die deinen Fortschritt verlangsamen?
                  </p>
                  <p>
                    Wir haben uns angewöhnt, Unterbrechungen während des
                    Arbeitstages zu minimieren, indem wir unnötige Nachrichten
                    und Ablenkungen vermieden. Dadurch wurde das Daily Stand-up
                    zu einer Gelegenheit für jedes Teammitglied, offen mit allen
                    Anwesenden zu kommunizieren. Falls bestimmte Themen eine
                    tiefere Diskussion erforderten, nahm ich mir anschliessend
                    Zeit für Einzelgespräche.
                  </p>

                  <h2 id="kommunikation">Kommunikation</h2>
                  <p>
                    Während des Projekts stellte ich fest, dass unsere
                    Kommunikation mit internen Stakeholdern nicht so effektiv
                    war, wie sie sein könnte. Das Feedback zu den Anforderungen
                    kam zu langsam an, und die Abteilungen waren sich unseres
                    aktuellen Fortschritts nicht vollständig bewusst. Monatliche
                    oder zweimonatliche Reviews boten einfach nicht den
                    dynamischen Informationsaustausch, den wir benötigten.
                  </p>
                  <p>
                    Um dies zu verbessern, initiierte ich ein wöchentliches
                    Community-Meeting, das speziell für interdisziplinäre
                    Q&A-Sitzungen konzipiert war. Das Hauptziel war, unser
                    Zentralisierungsprojekt eng mit den geschäftlichen
                    Anforderungen abzustimmen. Die Stakeholder konnten die
                    Entwicklung des PIM-Systems direkt beeinflussen, indem sie
                    ihre Anforderungen kommunizierten.
                  </p>
                  <p>
                    Durch die Dokumentation jeder Sitzung konnte ich
                    Unstimmigkeiten klären, auf frühere Diskussionen
                    zurückgreifen, wenn etwas unklar war, und den Stakeholdern
                    deutlich machen, dass ihr Input geschätzt wurde und die
                    Richtung des Projekts direkt beeinflusste.
                  </p>
                  <p>
                    Hier ist ein Auszug aus der Community-Seite mit den
                    Teilnehmern und unseren dokumentierten Diskussionen.
                  </p>
                  <div className="image-container">
                    <img
                      src={community}
                      alt="Community"
                      className="img-fluid mb-3"
                      style={{
                        width: "90%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h2 id="dokumentation">Dokumentation</h2>
                  <p>
                    Die Dokumentation hat während meines Projekts vielseitige
                    Rollen gespielt. Zu Beginn war mein Hauptziel, den internen
                    Stakeholdern Klarheit und Greifbarkeit zu vermitteln. Da wir
                    noch keine funktionierende Plattform hatten, wirkten die
                    Diskussionen oft abstrakt – sie drehten sich um
                    Datenmodelle, Attribute, APIs und theoretische Konzepte. Um
                    diese Lücke zu überbrücken, erstellte ich die Dokumentation,
                    die unsere Vision anschaulich darstellte, den Zweck des
                    Projekts klar kommunizierte und unseren Fortschritt
                    transparent aufzeigte.
                  </p>
                  <p>
                    Nach dem Start der Plattform entwickelte sich die
                    Dokumentation weiter und erfüllte ihren Hauptzweck: Sie
                    diente als technische Referenz. Sie wurde zur zentralen
                    Ressource für das Verständnis der Systemarchitektur, für
                    Richtlinien zur effektiven Nutzung der Plattform und für die
                    Behandlung verschiedener Themen im Master Data Management.
                  </p>
                  <p>
                    Nachfolgend habe ich einen Auszug aus der Dokumentation
                    eingefügt, die ich im Laufe des Projekts erstellt und
                    gepflegt habe.
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
                    Der Übergang von einem dezentralisierten zu einem
                    zentralisierten Produktdatenmanagement-Ansatz war eine
                    komplexe Herausforderung. Trotz der Rückschläge durch
                    unvorhergesehene Ereignisse wie eine Pandemie und den
                    Ausfall von Teammitgliedern waren die Widerstandsfähigkeit
                    und Anpassungsfähigkeit des Teams bemerkenswert.
                  </p>
                  <p>
                    Die Übernahme der Rolle des Scrum Masters hat meine
                    Fähigkeiten im Bereich des Servant Leaderships
                    weiterentwickelt. Es war äusserst befriedigend zu
                    beobachten, wie das Team zunehmend selbstständig wurde,
                    gestärkt durch meine Unterstützung. Diese Rolle hat meine
                    Überzeugung bestätigt, dass Führung durch Empowerment nicht
                    nur die Produktivität steigert, sondern auch Eigeninitiative
                    und kontinuierliche Verbesserung fördert.
                  </p>
                  <p>
                    Die Einführung wöchentlicher interdisziplinärer Meetings
                    verbesserte die Einbindung der internen Stakeholder und
                    unsere Abstimmung mit den geschäftlichen Anforderungen.
                    Rückblickend erkenne ich die Bedeutung transparenter
                    Kommunikation für den Erfolg eines Projekts. Im Nachhinein
                    hätte ich diese Interaktionen jedoch früher im
                    Projektlebenszyklus initiieren sollen, um die Stakeholder
                    schneller auf unsere Seite zu bringen.
                  </p>
                  <p>
                    Für zukünftige Projekte werde ich besonderen Wert auf
                    proaktive Kommunikation legen. Sie reduziert
                    Missverständnisse und stärkt das Vertrauen in das
                    Projektteam. Zudem bleibt die Weiterentwicklung meiner Soft
                    Skills, insbesondere in den Bereichen Kommunikation und
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
