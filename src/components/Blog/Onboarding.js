import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./onboarding.css";
import systemLandscape from "../../Assets/Blog/Onboarding/system-landscape.jpeg";
import onboardingIst from "../../Assets/Blog/Onboarding/ist.jpg";
import onboardingSoll from "../../Assets/Blog/Onboarding/soll.jpg";

function Onboarding() {
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
            data-target="introduction"
            className={activeSection === "introduction" ? "active" : ""}
          >
            Introduction
          </span>
        </li>
        <li>
          <span
            data-target="approach"
            className={activeSection === "approach" ? "active" : ""}
          >
            Approach
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="erp"
                className={activeSection === "erp" ? "active" : ""}
              >
                ERP
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="online-shop"
                className={activeSection === "online-shop" ? "active" : ""}
              >
                Online Shop
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="marketplace"
                className={activeSection === "marketplace" ? "active" : ""}
              >
                Marketplace
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="data-converter"
                className={activeSection === "data-converter" ? "active" : ""}
              >
                Data Converter
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="pim"
                className={activeSection === "pim" ? "active" : ""}
              >
                PIM
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="microservices"
                className={activeSection === "microservices" ? "active" : ""}
              >
                Microservices
              </span>
              <ul className="toc-list">
                <li className="toc-h3">
                  <span
                    data-target="onboarder"
                    className={activeSection === "onboarder" ? "active" : ""}
                  >
                    Onboarder
                  </span>
                </li>
                <li className="toc-h3">
                  <span
                    data-target="web-crawler"
                    className={activeSection === "web-crawler" ? "active" : ""}
                  >
                    Web Crawler
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="vision"
            className={activeSection === "vision" ? "active" : ""}
          >
            Vision
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="onboarder-2.0"
                className={activeSection === "onboarder-2.0" ? "active" : ""}
              >
                Onboarder 2.0
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="web-crawler-2.0"
                className={activeSection === "web-crawler-2.0" ? "active" : ""}
              >
                Web Crawler 2.0
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="rules"
                className={activeSection === "rules" ? "active" : ""}
              >
                Rules
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="dashboard"
                className={activeSection === "dashboard" ? "active" : ""}
              >
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="implications"
            className={activeSection === "implications" ? "active" : ""}
          >
            Implications
          </span>
        </li>
        <li>
          <span
            data-target="conclusion"
            className={activeSection === "conclusion" ? "active" : ""}
          >
            Conclusion
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
                  Revolutionizing Retail:
                  <br />
                  Automating Product Data Onboarding
                </span>
              </h1>

              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col md={12} className="project-description">
                  <h2 id="introduction">Introduction</h2>
                  <p>
                    Welcome to a behind-the-scenes look at how I helped a large
                    retailer automate and streamline one of its most demanding
                    tasks: onboarding product data from suppliers. In today’s
                    fast-paced retail environment, managing product information
                    from fashion and home goods to food and beauty is no small
                    feat. Businesses often juggle massive catalogs, sometimes
                    counting millions of products from thousands of suppliers.
                    Regardless of your product diversity, success depends on
                    quickly bringing these items to market.
                  </p>
                  <p>
                    During my time as a software developer for a major retailer,
                    I saw firsthand how even the most established companies
                    struggled to process, and integrate vast amounts of supplier
                    data. Small amounts of poor product data might not seem like
                    a big deal, but multiply that by thousands of products, and
                    you risk major setbacks, delayed listings, reduced sales,
                    and a lot of returns. The hard truth is that every hour
                    spent chasing down inconsistencies or correcting bad data
                    reduces profit margins. Fortunately, there’s a better way: a
                    strategic combination of the right Product Information
                    Management (PIM) system and custom-built micro services can
                    dramatically boost the efficiency and increase your data
                    quality.
                  </p>
                  <p>
                    In the sections that follow, I’ll walk you through my
                    approach to tackling these challenges, a broader vision that
                    could guide maybe your future automation strategy, the
                    implications of these changes for retailers (big and small),
                    and finally, some concluding thoughts on what I learned.
                    Whether you are a retailer looking to optimize the
                    onboarding process or any company that needs to automate
                    complex business processes, my expertise will help you
                    either way.
                  </p>
                  <p>
                    Stay tuned as we delve deeper into the details of the
                    automation process.
                  </p>

                  <h2 id="approach">Approach</h2>
                  <p>
                    Before we dive into how to optimize the onboarding process,
                    let’s take a closer look at the current retail system
                    landscape. Each component plays a specific role, and
                    recognizing their interactions will help us to identify
                    dependencies and understand the complexity of the processes
                    involved.
                  </p>

                  <h3 id="erp">ERP</h3>
                  <p>
                    An ERP system handles core operations such as procurement,
                    finance, HR, and logistics. However, it’s not built to
                    manage enriched product data. Customizing an ERP can also be
                    costly or impossible if it lacks accessible APIs. As a
                    result, you can’t rely on the ERP alone to drive
                    high-quality product information.
                  </p>

                  <h3 id="online-shop">Online Shop</h3>
                  <p>
                    An online shop application is a digital storefront where
                    retailers showcase their products to customers. It allows
                    users to browse, select, and purchase products online.
                    Effective online shops require detailed and visually
                    engaging product information, such as images, descriptions,
                    specifications, and pricing, which typically exceeds the
                    basic data available from ERP systems. Presenting
                    high-quality, accurate product details directly influences
                    the decision of customers and increases the likelihood of a
                    purchase.
                  </p>

                  <h3 id="marketplace">Marketplace</h3>
                  <p>
                    A marketplace platform enables retailers to extend their
                    online offering by allowing external suppliers to list and
                    sell products directly on their online store. Unlike
                    traditional retail models, where inventory is managed
                    internally, marketplace suppliers handle their own inventory
                    and shipping. Retailers benefit by expanding their product
                    range without managing additional stock, and they earn a
                    commission on each sale.
                  </p>

                  <h3 id="data-converter">Data Converter</h3>
                  <p>
                    A data converter platform helps retailers integrate and
                    exchange business documents like invoices, orders, and
                    shipping notices between suppliers and their ERP systems. It
                    transforms supplier data formats (such as EDIFACT, XML,
                    JSON, or CSV) into ERP-compatible data formats (like IDoc,
                    BAPI, RFC, or OData) that those can process. The data
                    translation service provided by such a platform reduces the
                    manual workload between different systems.
                  </p>

                  <p>
                    By mapping out these systems, we can see exactly how product
                    data flows—and sometimes gets stuck—between different
                    platforms. In the next sections, we’ll explore:
                  </p>

                  <p>
                    - <strong>PIM</strong>: Why it should act as your data hub.
                  </p>
                  <p>
                    - <strong>Onboarder</strong>: A micro service that enriches
                    basic product data with user instructions and machine
                    learning
                  </p>
                  <p>
                    - <strong>Web Crawler</strong>: A micro service that
                    continuously gathers additional product information from the
                    web
                  </p>

                  <p>
                    With this view, you’ll discover how to streamline your
                    retail operations, reduce manual work, and maintain
                    high-quality product information. All of which are important
                    for a smooth onboarding process.
                  </p>
                  <h3 id="pim">PIM</h3>
                  <p></p>

                  <h2 id="microservices">Microservices</h2>
                  <p></p>

                  <h3 id="onboarder">Onboarder</h3>
                  <p></p>

                  <h3 id="web-crawler">Web Crawler</h3>
                  <p></p>
                  <div className="image-container">
                    <img
                      src={systemLandscape}
                      alt="System Landscape"
                      className="img-fluid mb-3"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <h2 id="vision">Vision</h2>
                  <p></p>

                  <h3 id="onboarder-2.0">Onboarder 2.0</h3>
                  <p></p>
                  <div className="image-container">
                    <img
                      src={onboardingIst}
                      alt="onboarding ist"
                      className="img-fluid mb-3"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      src={onboardingSoll}
                      alt="onboarding soll"
                      className="img-fluid mb-3"
                    />
                  </div>

                  <h3 id="web-crawler-2.0">Web Crawler 2.0</h3>
                  <p></p>

                  <h3 id="rules">Rules</h3>
                  <p></p>

                  <h3 id="dashboard">Dashboard</h3>
                  <p></p>

                  <h2 id="implications">Implications</h2>
                  <p></p>

                  <h2 id="conclusion">Conclusion</h2>
                  <p></p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Onboarding;
