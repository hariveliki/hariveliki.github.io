import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./mps.css";
import ist from "../../Assets/Blog/Mps/ist.png";
import soll from "../../Assets/Blog/Mps/soll.png";
import prompt_engineering from "../../Assets/Blog/Mps/prompt_engineering.png";
import subtasks from "../../Assets/Blog/Mps/subtasks.png";

function Mps() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "4rem 0",
        fontFamily: "ui-monospace, monospace",
      }}
    >
      <Container>
        {/* Introduction Section */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h1
              style={{
                marginTop: "3rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              <span style={{ color: "#0d6efd", textDecoration: "underline" }}>
                Skalierbare Produktbeschreibungen dank KI – ein Praxisbericht
              </span>
            </h1>
            <p>
              Als Online-Händler steht man vor der grossen Herausforderung, für
              einen ständig wachsenden Produktkatalog hochwertige und
              überzeugende Beschreibungen zu erstellen. Jede Produktseite
              benötigt sowohl eine prägnante Kurzbeschreibung als auch eine
              ausführliche Langbeschreibung, die technische Spezifikationen,
              Nutzen und Anwendungshinweise optimal in Szene setzen – und das
              nicht nur für den Kunden, sondern auch für Suchmaschinen. Mit
              jedem neuen Produkt steigt der manuelle Aufwand, was schnell zu
              höheren Kosten und einer sinkenden Qualität führen kann, da mehr
              Arbeit in derselben Zeit erledigt werden muss.
            </p>

            <p>
              Hinzu kommen Suchmaschinenoptimierte (SEO) Texte, welche eine
              bestimmte Struktur aufweisen müssen, um in den Suchergebnissen
              sichtbar zu bleiben. Dies erfordert spezielles Know-how im
              SEO-Bereich und bindet oft zusätzliche Mitarbeiter (Content
              Creator) die täglich an der Anreicherung des Produktkatalogs
              arbeiten.
            </p>

            <p>
              Um diesen Herausforderungen effizient zu begegnen, können
              generative Modelle eingesetzt werden – eine Technologie, die es
              ermöglicht, den Produktanreicherungsprozess weitgehend zu
              automatisieren. Durch präzises „Prompt Engineering“ werden diese
              Modelle so kalibriert, dass sie Texte liefern, die den hohen
              Anforderungen von Kunden und Suchmaschinen gleichermassen gerecht
              werden.
            </p>

            <p>
              In diesem Artikel zeige ich, wie ich einem Online-Händler dabei
              geholfen habe, seinen Prozess zu optimieren und den zeitintensiven
              manuellen Aufwand drastisch zu reduzieren. Dabei erläutere ich
              zunächst den derzeitigen und gewünschten Zustand, bevor ich
              Schritt für Schritt den Lösungsansatz und die praktische Umsetzung
              vorstelle.
            </p>
          </Col>
        </Row>

        {/* IST and SOLL Section - Side by Side */}
        <Row className="mb-5">
          <Col md={6}>
            <div
              className="p-4 h-100"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
            >
              <h2>IST</h2>
              <p>
                Der Input zur Anreicherung der Produkte basiert auf einer
                Excel-Tabelle, die Basisdaten wie Artikelname, Produkttyp,
                technische Spezifikationen und Gebrauchsanweisungen enthält.
                Diese Tabelle enthält vier vier Spalten welche befüllt werden
                müssen: eine kundenorientierte sowie SEO-optimierte
                Kurzbeschreibung, einen SEO-Titel und eine detaillierte
                Langbeschreibung.
              </p>
              <p>
                Zur Texterstellung wird ein „Custom GPT“ über das
                ChatGPT-Interface genutzt. Dabei werden die Informationen Zeile
                für Zeile in den Chat kopiert, das Modell generiert den Text und
                anschliessend wird dieser manuell zurück in die Excel-Tabelle
                übertragen. Dieser Prozess wiederholt sich für jedes Produkt und
                kann, je nach Umfang des Katalogs, schnell einen ganzen
                Arbeitstag in Anspruch nehmen.
              </p>
              <p>
                Anschliessend wird die vervollständigte Excel-Tabelle in das
                Warenwirtschaftssystem hochgeladen. Die Produkte werden dann
                noch ein letztes mal geprüft, bevor sie im Online Shop
                ersichtlich sind.
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
            </div>
          </Col>
          <Col md={6}>
            <div
              className="p-4 h-100"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
            >
              <h2>SOLL</h2>
              <p>
                Um den Prozess effizienter zu gestalten, wird ein Programm
                benötigt, das die Input-Tabelle automatisch ausliest, alle
                erforderlichen Spalten mit den gewünschten Beschreibungen
                befüllt und anschliessend eine vollständige Tabelle zurückgibt.
                Diese fertige Datei kann direkt in das Warenwirtschaftssystem
                hochgeladen werden, ohne dass manuelle Schritte erforderlich
                sind.
              </p>
              <div className="image-container">
                <img
                  src={soll}
                  alt="Target State"
                  className="img-fluid mb-3"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Vorgehen Section */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2>Vorgehen</h2>
            <h3>Anforderungsanalyse und Beratung</h3>
            <p>
              In gemeinsamen Workshops und Interviews wird zunächst ermittelt,
              wie die Anforderungen des Kunden genau aussehen und welche
              Ressourcen oder Kenntnisse bereits vorhanden sind. Hierbei
              kristallisiert sich heraus, wo die Grenzen des Kundenwissens
              liegen und wo proaktive Vorschläge von meiner Seite erforderlich
              sind.
            </p>
            <p>
              Auf Basis der gesammelten Informationen stelle ich mehrere
              mögliche Lösungsansätze vor. Der Kunde bewertet diese hinsichtlich
              Kosten, Nutzen, Umsetzbarkeit und wählt diejenige Variante, welche
              seinen Anforderungen am Besten gerecht wird.
            </p>
            <h3>Prompt Engineering</h3>
            <p>
              Für die Textgenerierung wird ein generatives Modell (OpenAI
              Assistant) verwendet, das durch gezieltes Prompt Engineering
              schrittweise an die Anforderungen angepasst wird. Der Assistent
              besteht aus einem System- und einem Benutzer-Prompt.
            </p>

            <p>
              Die System-Prompt legt das allgemeine Verhalten des Assistenten
              fest, einschliesslich des Ausgabeformats, des Stils sowie
              detaillierter Schritt-für-Schritt-Anweisungen. Die Benutzer-Prompt
              hingegen enthält die spezifischen Anweisungen, Einschränkungen wie
              Zeichenlänge und Beispiele für Eingaben und erwartete Ausgaben.
            </p>

            <div className="image-container">
              <img
                src={prompt_engineering}
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
              Wie es in der Softwareentwicklung Best Practice ist, komplexe
              Aufgaben in Teilaufgaben zu unterteilen, sollten auch Aufgaben für
              Sprachmodelle heruntergebrochen werden, um optimale Ergebnisse zu
              erzielen.
            </p>
            <p>
              Betrachten wir beispielsweise die Erstellung verschiedener
              Beschreibungen für einen Online-Shop. Jede Beschreibung - sei es
              eine Kurzbeschreibung, eine Langbeschreibung oder eine
              SEO-optimierte Version - hat unterschiedliche Anforderungen in
              Bezug auf Länge, Struktur, Marketingaspekte und mehr. Versucht
              man, alle Beschreibungen mit einem einzigen Prompt zu generieren,
              läuft man Gefahr, das gewünschte Ziel zu verfehlen.
            </p>
            <p>
              Um bestmögliche Ergebnisse zu erzielen, sollte für jede
              Beschreibung eine eigene System- und User-Prompt erstellt werden,
              die den spezifischen Anforderungen gerecht wird. Durch die
              Zerlegung des Problems wird die Handhabung erleichtert und ein
              iterativer Verbesserungsprozess ermöglicht.
            </p>
            <div className="image-container">
              <img
                src={subtasks}
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
              Das Prompt Engineering erfolgt in enger Zusammenarbeit mit dem
              Kunden. Dabei überprüft der Kunde die generierten Texte und gibt
              Feedback, auf dessen Grundlage die Prompts weiter optimiert und
              erneut getestet werden. Dieser iterative Prozess stellt sicher,
              dass die Qualität den Anforderungen entspricht und die Entwicklung
              gezielt auf die Bedürfnisse des Kunden ausgerichtet ist.
            </p>
          </Col>
          <Col md={8} className="text-center">
            <h2>Ausblick</h2>
            <p>
              Das Resultat ist ein effizienter, teilautomatisierter Workflow,
              mit dem hunderte Produktbeschreibungen in kürzester Zeit erstellt
              werden können. Der Kunde spart erhebliche Ressourcen und kann sich
              auf sein Kerngeschäft konzentrieren. Wollen auch Sie sich auf Ihr
              Kerngeschäft konzentrieren und die Maschine für sich arbeiten
              lassen? Dann vereinbaren Sie Heute noch einen Termin.
            </p>
          </Col>
        </Row>

        {/* Contact Form Section */}
        {/* <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <div className="contact-form-container mt-5">
              <h2>Kontaktformular</h2>
              {submitStatus.message && (
                <div
                  className={`alert alert-${
                    submitStatus.type === "success" ? "success" : "danger"
                  } mb-4`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="d-flex gap-4 mb-3">
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-label="Name"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-Mail *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-label="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Telefonnummer"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-label="Phone number"
                  />
                </div>
                <div className="form-group mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Kommentar"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    aria-label="Comment"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark px-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Senden"}
                </button>
              </form>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Mps;
