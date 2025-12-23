import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./onboarding.css";
import systemLandscape from "../../Assets/Blog/Onboarding/system-landscape.jpeg";
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
                    tasks: onboarding product data from suppliers. In today's
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
                    reduces profit margins. Fortunately, there's a better way: a
                    strategic combination of the right Product Information
                    Management (PIM) system and custom-built micro services can
                    dramatically boost the efficiency and increase your data
                    quality.
                  </p>
                  <p>
                    In the sections that follow, I'll walk you through my
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
                    let's take a closer look at the current retail system
                    landscape. Each component plays a specific role, and
                    recognizing their interactions will help us to identify
                    dependencies and understand the complexity of the processes
                    involved.
                  </p>

                  <h3 id="erp">ERP</h3>
                  <p>
                    An ERP system handles core operations such as procurement,
                    finance, HR, and logistics. However, it's not built to
                    manage enriched product data. Customizing an ERP can also be
                    costly or impossible if it lacks accessible APIs. As a
                    result, you can't rely on the ERP alone to drive
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
                    platforms. In the next sections, we'll explore:
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
                    With this view, you'll discover how to streamline your
                    retail operations, reduce manual work, and maintain
                    high-quality product information. All of which are important
                    for a smooth onboarding process.
                  </p>
                  <h3 id="pim">PIM</h3>
                  <p>
                    A Product Information Management (PIM) platform serves as
                    the centralized repository for detailed, customer-facing
                    product information, such as descriptions, material
                    composition, care instructions, images, and other
                    marketing-oriented attributes. In contrast, ERP systems
                    handle operational and transactional data which is essential
                    for business processes, including pricing, inventory
                    management, production scheduling, and supplier details.
                    While ERP data supports mainly operations, a PIM enriches
                    product content to enhance the customer experience.
                  </p>

                  <p>
                    To illustrate this distinction clearly, consider an example
                    involving apparel products. If you sell pants, your ERP
                    system would manage operational details like inventory
                    levels, supplier information, and prices. Meanwhile, your
                    PIM would categorize these pants within "fashion" or "men's
                    fashion," specify that they're "pants" within your product
                    hierarchy, and record attributes like sizes, colors,
                    materials, and care instructions. Additionally, the PIM
                    would associate relevant media assets, such as product
                    images or videos. By consolidating all this customer-facing
                    information, a PIM provides the right information to the
                    digital storefront.
                  </p>

                  <p>
                    Now that we understand the purpose of a PIM, we need to
                    understand the concepts that a PIM offers to handle the
                    complexity of product data management. We will take a quick
                    look at the concepts to understand why they are important
                    for automating the onboarding process. These are:
                  </p>

                  <table>
                    <thead>
                      <tr>
                        <th>Concept</th>
                        <th>Description</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Reference Entity</strong>
                        </td>
                        <td>
                          Stores reusable structured data such as rules, product
                          types, or brands.
                          <br />
                          <br />
                          Multiple products can reference the same entity and
                          use their attributes.
                        </td>
                        <td>
                          A reference entity called <strong>Brand</strong> that
                          includes attributes like a <strong>logo</strong>,{" "}
                          <strong>description</strong>, and{" "}
                          <strong>country</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Family</strong>
                        </td>
                        <td>
                          Groups products that share the same set of attributes.
                          <br />
                          <br />
                          Standardize the attribute structure of similar items.
                        </td>
                        <td>
                          A <strong>Clothing</strong> family with attributes
                          like{" "}
                          <strong>
                            size, color, material, and care instructions
                          </strong>
                          . A <strong>T-shirt</strong> product assigned to this
                          family inherits these attributes.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Attribute</strong>
                        </td>
                        <td>
                          Defines specific characteristics of a product, such as
                          size, color, or features.
                        </td>
                        <td>
                          An attribute called <strong>Color</strong>, which is a
                          simple select with options like{" "}
                          <strong>Red, Blue, Green</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Category</strong>
                        </td>
                        <td>
                          Organizes products into hierarchical classifications
                          (e.g., Men's Shoes &gt; Running Shoes).
                          <br />
                          <br />
                          Helps in catalog navigation, or product filtering.
                        </td>
                        <td>
                          A category called <strong>Men's Shoes</strong> in a
                          category tree, organizing{" "}
                          <strong>running shoes</strong> and{" "}
                          <strong>formal shoes</strong>.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Products with Variants</strong>
                        </td>
                        <td>
                          Manages products that have different versions based on
                          variant-specific attributes like size or color.
                          <br />
                          <br />
                          Maintains shared product information (root level)
                          while allowing for differentiation at the variant
                          level.
                        </td>
                        <td>
                          A <strong>T-shirt</strong> product model with{" "}
                          <strong>variants</strong> based on{" "}
                          <strong>color and size</strong> (e.g.,{" "}
                          <strong>Red, Small</strong> and{" "}
                          <strong>Blue, Medium</strong>).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    Product Information Management (PIM) systems primarily
                    handle the representation of final product data rather than
                    the initial processes of onboarding or enriching this data.
                    This limitation is shared by ERP systems and similar
                    business applications. Ideally, suppliers would deliver
                    detailed and accurate product information automatically via
                    sophisticated EDI connections. However, such ideal scenarios
                    are uncommon in retail.
                  </p>

                  <p>
                    To address this challenge, we implemented an automated
                    solution that uses data workflows to interact with the PIM's
                    REST API. These workflows apply customized data enrichment
                    rules defined by users. Additionally, we developed a
                    dedicated onboarding system that runs on several virtual
                    machines. This system integrates incoming ERP data and
                    enriches product information through techniques such as
                    machine learning, fuzzy matching, custom user-defined
                    mappings, and web scraping. As a result, we get
                    consistently enriched data within the PIM.
                  </p>

                  <p>
                    Understanding the role of PIM sets the foundation for seeing
                    how all components interconnect. Next, I'll explore the
                    micro services called Onboarder and Web Crawler in greater
                    detail and explain how they formed the backbone of our
                    automated onboarding workflow.
                  </p>
                  <h2 id="microservices">Microservices</h2>
                  <p></p>

                  <h3 id="onboarder">Onboarder</h3>
                  <p>
                    The Onboarder is a microservice that automates the
                    enrichment of basic product data from the ERP systems or
                    other sources into detailed, market-ready information in the
                    PIM. For example, after the ERP data is transformed into the
                    PIM’s format via an initial workflow, the Onboarder steps in
                    to apply user-defined static mappings—such as matching ERP
                    size details to appropriate PIM sizes and determining
                    variant configurations. It then leverages machine learning
                    to use product descriptions and predict the correct product
                    type. In essence, the Onboarder enriches raw operational
                    data, and ultimately enables you to bring millions of
                    products to market in shorter time periods.
                  </p>

                  <h3 id="web-crawler">Web Crawler</h3>
                  <p>
                    The web crawler is a dedicated microservice designed to
                    continuously seek out additional product information—whether
                    from publicly accessible websites or secure supplier
                    portals. It operates on user-defined mappings (for example,
                    a specific landing page or search URL) and systematically
                    gathers any details it can find, feeding them directly into
                    the PIM. What makes it particularly effective is its
                    persistence: if it doesn’t uncover the required data on the
                    first pass, it will automatically revisit the source on
                    subsequent days. This ongoing retrieval process ensures that
                    missing attributes or updated product details eventually
                    make their way into the PIM system.
                  </p>
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
                  <p>
                    Now the Onboarder and Web Crawler are just two of the
                    microservices that enrich product data and accelerates the
                    onboarding process. Many more specialized services could
                    join this ecosystem. For instance, if the Web Crawler
                    identifies new details about a product, another service
                    might analyze that information and generate fresh attributes
                    with the help of large language models. This modular
                    approach allows retailers to add or update microservices
                    without disrupting existing workflows. It also ensures that
                    each step in the onboarding pipeline benefits from
                    collective intelligence. As a result, the future of
                    automated onboarding holds enormous potential for more
                    sophisticated data enrichment and faster time to market.
                  </p>

                  <h3 id="onboarder-2.0">Onboarder 2.0</h3>
                  <p>
                    Currently, the Onboarder relies on a single machine learning
                    model to predict basic properties such as product type. A
                    more advanced version could incorporate multiple models,
                    each specializing in a particular attribute or feature. One
                    model might read product descriptions to extract relevant
                    keywords or generate new features. Another could analyze
                    images or videos to extract informations. A third model
                    might manage internal sizes or materials when textual
                    information is incomplete.
                  </p>

                  <p>
                    When the Onboarder uses multiple models in combination, it
                    captures richer information for every product. The next step
                    is to integrate reinforcement learning with human feedback
                    (RLHF). This approach allows the Onboarder to learn from
                    real-world corrections and suggestions. As a result, it will
                    reduce its error rate over time. More accurate predictions
                    also accelerate the onboarding process.
                  </p>
                  {/* <div className="image-container">
                    <img
                      src={onboardingIst}
                      alt="onboarding ist"
                      className="img-fluid mb-3"
                    />
                  </div> */}
                  <div className="image-container">
                    <img
                      src={onboardingSoll}
                      alt="onboarding soll"
                      className="img-fluid mb-3"
                    />
                  </div>

                  <h3 id="web-crawler-2.0">Web Crawler 2.0</h3>
                  <p>
                    The current Web Crawler searches websites and supplier
                    portals to fill gaps in product data. A next-generation
                    version could broaden this search in several ways. One
                    approach is to locate relevant web pages by using a
                    product’s International Article Number (EAN) and examining
                    multiple pages of search-engine results. Another approach is
                    to query AI-powered answer engines through their APIs. This
                    method would reduce the need for writing traditional web
                    scrapers because the answer engines would gather product
                    details from diverse online sources.
                  </p>

                  <p>
                    These advances would give retailers more ways to find,
                    validate, and enrich missing attributes. They would also
                    save time for development teams that previously built custom
                    crawlers for each new data source. Web Crawler 2.0 has the
                    potential to become a dynamic hub of online product
                    information.
                  </p>

                  <h3 id="rules">Rules</h3>
                  <p>
                    PIM users possess extensive knowledge about their products
                    and how those items relate to each other. They often want to
                    transform and update large numbers of products at once, but
                    the current approach can be cumbersome. Many tasks rely on
                    clicking through multiple drop-down menus and navigating
                    separate pages. This workflow can be frustrating, especially
                    when the end result is not what the user intended.
                  </p>

                  <p>
                    A more efficient “Rules 2.0” concept would let users apply
                    flexible transformations through queries or rule-based
                    commands. They would not have to rely on predefined forms.
                    This approach would speed up mass updates of product
                    relationships or attributes.
                  </p>

                  <h3 id="dashboard">Dashboard</h3>
                  <p>
                    There was no dedicated dashboard in place to show how well
                    the entire onboarding pipeline performed. Because of this
                    gap, it was hard to demonstrate the system’s value to others
                    in the organization. A dashboard could have revealed exactly
                    how much time and money were saved through automated
                    processes. It could have provided clarity on the degree of
                    product data enrichment, highlighted the frequency and
                    nature of misclassifications, and guided any improvements in
                    the machine learning models. That level of visibility would
                    have made it easier to secure future investments in more
                    sophisticated onboarding services. It also would have given
                    stakeholders a way to see how the Onboarder, Web Crawler,
                    and other microservices contributed to quicker and better
                    product launches.
                  </p>

                  <h2 id="implications">Implications</h2>
                  <p>Tbd</p>

                  <h2 id="conclusion">Conclusion</h2>
                  <p>Tbd</p>
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
