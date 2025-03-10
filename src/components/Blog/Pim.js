import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pim.css";

function Pim() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Get all section headings
    const headings = document.querySelectorAll("h2, h3");
    const headingElements = Array.from(headings);

    const handleScroll = () => {
      // Find the current section
      const found = headingElements.find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top > 0 && rect.top < window.innerHeight / 2;
      });

      if (found) {
        setActiveSection(found.id);
      }
    };

    // Add IDs to headings if they don't exist
    headingElements.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TableOfContents = () => (
    <nav className="table-of-contents">
      <ul className="toc-list">
        <li>
          <span
            data-target="motivation"
            className={activeSection === "motivation" ? "active" : ""}
          >
            Motivation
          </span>
        </li>
        <li>
          <span
            data-target="context"
            className={activeSection === "context" ? "active" : ""}
          >
            Context
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="company-background"
                className={
                  activeSection === "company-background" ? "active" : ""
                }
              >
                Company Background
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="project-description"
                className={
                  activeSection === "project-description" ? "active" : ""
                }
              >
                Project Description
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="project-management-methodology"
                className={
                  activeSection === "project-management-methodology"
                    ? "active"
                    : ""
                }
              >
                Project Management Methodology
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="considerations-for-change"
                className={
                  activeSection === "considerations-for-change" ? "active" : ""
                }
              >
                Considerations for Change
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="theory-vs-practice"
            className={activeSection === "theory-vs-practice" ? "active" : ""}
          >
            Theory vs Practice
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="general"
                className={activeSection === "general" ? "active" : ""}
              >
                General
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="events"
                className={activeSection === "events" ? "active" : ""}
              >
                Events
              </span>
            </li>
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
                data-target="key-takeaways"
                className={activeSection === "key-takeaways" ? "active" : ""}
              >
                Key Takeaways
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="soft-skills"
            className={activeSection === "soft-skills" ? "active" : ""}
          >
            Soft Skills
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
                  Experience within a PIM Project
                </span>
              </h1>

              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col md={12} className="project-description">
                  <h2 id="motivation">Motivation</h2>
                  <p>
                    During a two-year project to introduce a new Product
                    Information Management System (PIM) for a retail company, I
                    started as a Scrum Master and later switched to software
                    development. In this article, I will show how we used the
                    agile framework Scrum to our advantage, why the transition
                    to a developer role felt necessary, and what soft skills
                    were essential for success in a complex project, considering
                    perspectives from both roles.
                  </p>
                  <h2 id="context">Context</h2>
                  <h3 id="project-description">Project Description</h3>
                  <p>
                    In late 2019, the retail company I worked for recognized
                    that its product data processes and systems were hindering
                    the swift movement of goods from suppliers to customers. The
                    existing Product Information Management System (PIM) was
                    found to be costly and operationally complex. To address
                    these issues, a new system was chosen for implementation,
                    marking the beginning of a replacement process. However, the
                    project's momentum was stalled by the pandemic.
                  </p>
                  <h3 id="project-management-methodology">
                    Project Management Methodology
                  </h3>
                  <p>
                    Our project management combined a classical waterfall
                    approach with agile/Scrum methods. The waterfall approach,
                    with predefined phases, milestones, and work packages, was
                    required by management. These were external constraints we
                    couldn't change. However, we could decide how we wanted to
                    work within each phase. We chose to work iteratively on
                    deliverable outcomes, which is where Scrum/agile came into
                    play. The duration between each deliverable was 10 days,
                    referred to as a sprint. The ceremonies before, during, and
                    after each sprint (e.g., Daily, Review) were adapted from
                    Scrum. The project team was expanded to include members
                    necessary to achieve our goals, such as requirements
                    engineers, power users, and others.
                  </p>
                  <h3 id="considerations-for-change">
                    Considerations for Change
                  </h3>
                  <p>
                    The story began during the pandemic when I started as a
                    Scrum Master in the early stages of the project. During the
                    lockdown, I was among the employees who didn't work for two
                    months because my role was considered non-essential. This
                    was a pivotal moment in my career, as I gained insight into
                    which roles were critical and which were not. Roles
                    responsible for requirements, operations, and Scrum Master
                    duties were deemed non-essential, while developers and the
                    Product Owner continued working as usual. Fortunately, I had
                    already started learning to code, and after the pandemic, I
                    was eager to join the development team.
                  </p>

                  {/* ----------------------new section------------------------------ */}
                  <h2 id="theory-vs-practice">Theory vs Practice</h2>
                  <p>
                    In this section I want to compare what the theory says about
                    Scrum, how we adopted it and what impact, if any, our
                    changes/approach had.
                  </p>
                  <h3 id="general">General</h3>
                  <div className="metrics-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Theory</th>
                          <th>Practice</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Work is organized in iterative cycles called
                            sprints. Teams deliver functional components in
                            response to changing requirements. Defined
                            ceremonies include daily stand-ups, reviews,
                            planning sessions, and retrospectives. Roles such as
                            developer, Scrum Master, and Product Owner are
                            established.
                          </td>
                          <td>
                            Our project was divided into phases with milestones
                            (waterfall). Scrum was used within individual phases
                            to achieve results iteratively. Ceremonies were held
                            according to Scrum and adapted as needed, such as by
                            removing or shortening certain ceremonies. The team
                            was expanded with requirements engineers, data
                            analysts, and other roles.
                          </td>
                          <td>
                            The phases and milestones provided an overview, a
                            clear path, and a sense of security. Scrum provided
                            flexibility to adapt to changing circumstances, e.g.
                            client needs. Skipping or shortening ceremonies
                            reduced overhead from meeting times. The diverse
                            team contributed additional knowledge.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="events">Events</h3>
                  <div className="metrics-table">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Theory</th>
                          <th>Practice</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="row-header">Phases (Waterfall)</td>
                          <td>
                            It comprises clearly defined processes with project
                            phases that are only continued after the final
                            approval of a phase.
                          </td>
                          <td>
                            Phases were defined, but these were adjusted due to
                            circumstances such as pandemics, i.e. the phases
                            were reduced.
                          </td>
                          <td>
                            By reducing the number of phases, we have simplified
                            the problem and focussed on the essentials.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Milestones (Waterfall)</td>
                          <td>
                            Indicates a significant point or event, often tied
                            to a key deliverable.
                          </td>
                          <td>
                            Milestones were relevant to the management. The
                            Product Owner presented the project status without
                            the participation of other team members.
                          </td>
                          <td>
                            The management without technical knowledge could
                            decide in our favor or to our disadvantage during
                            these meetings.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Sprint (Scrum)</td>
                          <td>
                            Fixed length events of one month or less where ideas
                            are turned into products/values.
                          </td>
                          <td>
                            Two working weeks (10 days) to work on results or
                            create added value for the company.
                          </td>
                          <td>
                            10 days felt short but ensured we could quickly
                            change the course and adapt to new requirements.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">
                            Sprint Planning (Scrum)
                          </td>
                          <td>
                            Work session which lays out the work to be performed
                            for the Sprint. Time boxed for eight hours for a
                            one-month Sprint or shorter for shorter Sprints. The
                            Product Owner ensures that attendees are prepared.
                          </td>
                          <td>
                            The meetings were time boxed to max one hour. The
                            Scrum Master ensured that attendees were prepared.
                            Each person defined their goals and filled the
                            Backlog independently. Team gave feedback if it made
                            sense, but the Product Owner had the last word.
                          </td>
                          <td>
                            Because the Scrum Master was responsible for every
                            event, the Product Owner could focus on Stakeholder
                            Management and other topics. Team members were
                            motivated to form goals and fill the Backlog and
                            convince the team for their necessity.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">
                            Daily stand-ups (Scrum)
                          </td>
                          <td>
                            Hold everyday to ensure everybody had a common
                            understanding of whats going on.
                          </td>
                          <td>
                            Approximately at half time of the project reduced to
                            two days in the week, because we recognized it as
                            overhead and distraction from work.
                          </td>
                          <td>
                            By reducing the number of daily stand-ups, we had
                            more time to concentrate on our work. By doing it
                            twice a week, we had more to talk about instead of
                            artificially prolonging the session.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Sprint Review (Scrum)</td>
                          <td>
                            Inspect the outcomes of the Sprint, by the team
                            presenting their results to key stakeholders. Should
                            be a working session instead of limiting to a
                            presentation.
                          </td>
                          <td>
                            Held in the beginning after every Sprint, say after
                            two weeks. Stakeholders from all departments were
                            invited. We were not able to make it to a working
                            session, instead it was just a presentation with
                            following Q&A.
                          </td>
                          <td>
                            Due to the short sprints, the team had to
                            artificially prolong the meetings. The stakeholders
                            and team members were dissatisfied because the
                            frequency of the meetings was disproportionate to
                            the depth of the discussion. A monthly meeting or a
                            meeting for selected stakeholders only made more
                            sense.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">
                            Sprint Retrospective (Scrum)
                          </td>
                          <td>
                            A way to increase quality of deliverables and
                            effectiveness of work. The team inspects how the
                            last Sprint went, in terms of reaching goals,
                            solving problems, and finishing tasks
                          </td>
                          <td>
                            In the beginning held after every Sprint. As time
                            passed by the events decreased or were not held at
                            all.
                          </td>
                          <td>
                            Less responsibility within the team because a tool
                            for transparency and commitment has disappeared. The
                            team no longer reflected on its own or others'
                            results. The team did not know whether their work or
                            that of others had improved or not.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="team">Team</h3>
                  <div className="metrics-table">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Theory</th>
                          <th>Practice</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="row-header">Owner</td>
                          <td>
                            The Product Owner, as a single accountable
                            authority, manages the Product Backlog, communicates
                            goals, and ensures transparency, with final
                            decision-making power over backlog items while
                            allowing stakeholders to suggest changes by
                            persuasion.
                          </td>
                          <td>
                            Our Product Owner, with 30 years of IT experience,
                            was a trusted authority, managed and prioritized the
                            Backlog with us together during the planning.
                          </td>
                          <td>
                            Allowing us more freedom, in terms of creating
                            Backlog Items, our own goals for the current sprint,
                            prioritizing them together, boosted our motivation
                            and responsibility.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Developers</td>
                          <td>Committed to create usable outcomes.</td>
                          <td>
                            Developing software and if necessary holding
                            requirements meetings directly with stakeholders.
                          </td>
                          <td>
                            The quality of the results increased because the
                            developers received the information directly from
                            the source.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Scrum Master</td>
                          <td>
                            Implements Scrum, supports team and Product Owner,
                            moderates events, coaches, gives advice, and
                            improves the effectiveness of the outcomes.
                          </td>
                          <td>
                            Responsible for Scrum, as mentioned in the theory,
                            for daily operations and for sub-project manager
                            tasks.
                          </td>
                          <td>
                            Due to several jobs, the Scrum Master was encouraged
                            to implement Scrum as efficiently as possible. No or
                            shorter meetings if they were considered
                            unnecessary. Relieve the Product Owner with project
                            management tasks.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Requirements Engineer</td>
                          <td>
                            Responsible for identifying, documenting, and
                            managing the needs and specifications of a project
                            to ensure the final product meets stakeholder
                            expectations.
                          </td>
                          <td>
                            They were employees with years of experience and a
                            lot of connections internally.
                          </td>
                          <td>
                            Faster request recording, because they knew how and
                            where to get the right information.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Data Analyst</td>
                          <td>
                            Collects, processes, and analyzes data to extract
                            insights, identify trends, and support informed
                            decision-making within an organization.
                          </td>
                          <td>
                            Analyzing the data exchange between our company and
                            all suppliers. Technical connection from the
                            supplier system to ours.
                          </td>
                          <td>
                            Their job kept the back free of team members solely
                            working on the project like developers.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Power User</td>
                          <td>
                            Advanced knowledge and skills in using software,
                            systems, or devices, often utilizing features and
                            functions beyond typical users.
                          </td>
                          <td>
                            People with extensive knowledge of the old PIM
                            system, usually buyers with many years of
                            professional experience.
                          </td>
                          <td>
                            Quickly understand requirements and guaranteeing a
                            smooth migration process.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="key-takeaways">Key Takeaways</h3>
                  <ul>
                    <li>
                      General:
                      <br></br>
                      While software companies today mostly work with Agile
                      frameworks, we were not a software company and first had
                      to understand the benefits for us. We were a retail
                      company focused on procurement, looking to implement new
                      software into an existing system landscape. That's why we
                      had to combine waterfall project management (defined
                      sequences of execution) with an iterative approach (Scrum)
                      to balance the need for structure in a hierarchical
                      organization and flexibility in an ever-changing software
                      environment.
                    </li>
                    <li>
                      Events:
                      <br></br>
                      At the beginning of the project, all Scrum events took
                      place. However, as the project progressed, we reduced the
                      daily stand-ups to twice a week to focus more on work
                      rather than discussions. We chose not to conduct reviews
                      after each sprint but invited stakeholders when we had
                      something significant to show. Retrospectives were
                      canceled because most of the team, including the Product
                      Owner, thought they were unnecessary. As Scrum Master, I
                      couldn't convince the team otherwise, even though I
                      believed retrospectives were important. Retrospectives are
                      a powerful way to learn from mistakes and improve soft
                      skills by learning to give and receive constructive
                      criticism.
                    </li>
                    <li>
                      Team:
                      <br></br>
                      Since we were not a software company, our team included
                      more than just Developers, a Scrum Master, and a Product
                      Owner. We needed people with connections within the
                      company who could spread our interests or knew where to
                      get the right information, in our case we called them
                      requirements engineers. Additionally, because we were
                      replacing an old system, we needed power users familiar
                      with the old system to help with the transition. Data
                      Analysts were also needed because our team wasn't just
                      project-focused; daily operations had to be maintained as
                      well. The diverse team made it more challenging for me
                      because I had to switch between many different contexts
                      and roles.
                    </li>
                    <li>
                      Adaptibility:
                      <br></br>
                      We weren't limited to either approach, waterfall or Scrum.
                      When we saw that the previous phases and milestones
                      (waterfall) didn't make sense, we redefined them,
                      simplifying to fewer phases and adjusting the milestones.
                      If we felt certain Scrum events were unnecessary or
                      unhelpful at a particular point in time, we decided to
                      remove them or limit the time spent on them. Throughout
                      the project, we had to adapt and adjust our approach based
                      on what was happening around us, e.g., pandemic, health
                      issues, changing stakeholder requirements, etc.
                    </li>
                  </ul>
                  {/* ----------------------new section------------------------------ */}
                  <h2 id="soft-skills">Soft Skills</h2>
                  <p>
                    Soft skills are important to the success of a project
                    because the who is just as important as the what. People are
                    inherently different, with varying perspectives and thought
                    processes, which make them suited for different roles within
                    a project. Recognising this diversity has enabled me to work
                    together more effectively by practising patience and
                    understanding when conflicts arise. In my roles as Scrum
                    Master and later as Developer, I encountered overlapping and
                    distinct soft skills. I want to highlight now their
                    similarities, and differences.
                  </p>
                  <div className="metrics-table">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Scrum Master</th>
                          <th>Developer</th>
                          <th>Comment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="row-header">Problem-solving</td>
                          <td>x</td>
                          <td>x</td>
                          <td>
                            As a Scrum Master, I addressed issues related to
                            team dynamics and relationships. As a Developer, my
                            focus shifted to technical problem-solving.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Commun.</td>
                          <td>x</td>
                          <td>x</td>
                          <td>
                            As a developer, I had to simplify my explanations
                            without using too much technical jargon. As a Scrum
                            Master, I acted as a mediator, spoke to different
                            personalities and had to adapt my behaviour
                            accordingly.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Adaptibility</td>
                          <td>x</td>
                          <td>x</td>
                          <td>
                            As a Developer I had to adapt to new technologies,
                            changes in dependencies, and unexpected bugs. As a
                            Scrum Master, I had to quickly understand diverse
                            topics and communicate them effectively. For
                            instance, when each Developer worked on different
                            aspects, I needed to identify any impediments and
                            offer support.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Patience</td>
                          <td>x</td>
                          <td>x</td>
                          <td>
                            As a Scrum Master, I had to manage people's
                            emotions, dealing with anger or frustration without
                            engaging in arguments. As a Developer, patience was
                            necessary when debugging or working on challenging
                            tasks, knowing that a solution would emerge as long
                            as I kept working on it.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Time Managem.</td>
                          <td>x</td>
                          <td>x</td>
                          <td>
                            As a Developer, I had to meet deadlines, often
                            starting with the first workable solution and
                            iterating to improve it over time. As a Scrum
                            Master, time management focused on the efficiency of
                            events, which ensured that discussions stayed on
                            track.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Teamwork</td>
                          <td>x</td>
                          <td>x</td>
                          <td>
                            A Scrum Master is by definition a person who works
                            with teams. People think that developers are loners,
                            but no single developer is better than a team of
                            them working iteratively on a solution, reviewing
                            the code of each other and sharing insights for new
                            technologies.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Coaching</td>
                          <td>x</td>
                          <td></td>
                          <td>
                            In my role as Scrum Master, I initially spent a lot
                            of time training others in the Scrum methodology.
                            But the further the project progressed and the more
                            independent the employees became, the less my
                            coaching was required. Eventually, I was only
                            guiding newcomers because the others knew how things
                            worked.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Conflict Resolution</td>
                          <td>x</td>
                          <td></td>
                          <td>
                            During Scrum meetings—whether daily stand ups or
                            weekly reviews—conflicting opinions often arose.
                            When I saw tensions escalating, I had to intervene
                            and defuse the situation. If conflicts persisted, I
                            would speak to individuals separately and find
                            common ground to keep the project moving forward.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Emotional Intelligence</td>
                          <td>x</td>
                          <td></td>
                          <td>
                            Every team member is different, and it was important
                            to understand individual personalities. I spent time
                            getting to know each person, whether in casual
                            settings like the coffee corner or through remote
                            and in person meetings. Some people were less
                            comfortable presenting or contributing during
                            meetings, and I needed to respect that and offer
                            support as needed.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Leadership</td>
                          <td>x</td>
                          <td></td>
                          <td>
                            I had to be a servant leader as Scrum Master. While
                            I wasn't dictating tasks, I was responsible for
                            ensuring the team's outcomes met expectations. When
                            outcomes fell short, I would address it—backed by
                            the authority of the Product Owner—without trying to
                            be authoritative. My goal was to highlight
                            weaknesses or incomplete tasks in a supportive,
                            positive and constructive tone.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Creativity</td>
                          <td></td>
                          <td>x</td>
                          <td>
                            As a Developer, I often encountered tasks that were
                            unclear at first. It required creativity at various
                            stages: understanding the customer's needs, figuring
                            out how to implement it and writing code that is
                            also efficient. I found being a Developer more
                            creatively demanding than being a Scrum Master. A
                            Developer faces a wider range of complex technical
                            problems, while a Scrum Master's focus is more on
                            people, tools, and collaboration.
                          </td>
                        </tr>
                        <tr>
                          <td className="row-header">Focus</td>
                          <td></td>
                          <td>x</td>
                          <td>
                            Developers can easily get overwhelmed by the many
                            ways to implement a solution. There's no perfect
                            approach, and finding the right level of detail is
                            tough. I had to stay focused and take a minimalist
                            approach to avoid overthinking, which often led to
                            overtime and pressure from supervisors. I aimed to
                            deliver quality but also needed to deliver quickly.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* ----------------------new section------------------------------ */}
                  <h2 id="conclusion">Conclusion</h2>
                  <p>
                    The unique circumstance of managing a software project
                    within a retail company gave us the opportunity to use agile
                    frameworks like Scrum alongside conventional methods like
                    Waterfall. To adjust for unforeseen events, such as
                    pandemics, health issues, or changing stakeholder
                    requirements, we leveraged the flexibility of iterative
                    approaches like Scrum while still maintaining predefined
                    phases and milestones like Waterfall to satisfy management.
                    Throughout the project, soft skills were essential for
                    success in both my roles as Scrum Master and Developer.
                    While technical expertise mattered, communication, empathy,
                    and a willingness to learn from criticism were equally
                    important for a successful project and for maintaining a
                    positive work environment. As a Scrum Master, I focused on
                    building team dynamics, resolving conflicts, and supporting
                    others through servant leadership. In the Developer role, I
                    applied creativity and worked with focus for hours at a time
                    to solve technical problems. The experience in these two
                    different roles allowed me to grow both technically and
                    interpersonally.
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

export default Pim;
