/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { css } from 'react-emotion';
import { Box } from '../components/Layout';
import colors from '../utils/colors';
import bedfordresume from '../assets/docs/BedfordResume.pdf';

const resume = css`
  * {
    line-height: 1.6;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
  }
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 0;
    line-height: 0.2;
  }
  p {
    color: ${colors.dark};
  }
  ul li {
    color: ${colors.accent};
    line-height: 1.4;
    margin: 0.5rem;
    font-size: 16px;
  }
  ul.highlights li {
    font-size: 20px;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-top: 0;
    color: ${colors.secondary};
  }
  ul ul li {
    color: ${colors.accent};
    line-height: 1.2;
    margin: 0.5rem;
    font-size: 16px;
  }
  ul.highlights ul li {
    color: ${colors.accent};
    line-height: 1.2;
    margin: 0.5rem;
    font-size: 16px;
  }
  ul.highlights ul li:last-child {
    margin-bottom: 1rem;
  }
  div.italics {
    font-style: italic;
    font-size: 16px;
    margin: 0;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid;
    margin: 0;
    padding: 0;
  }
`;

const Resume = () => (
  <Box bg={colors.primary}>
    <Box
      width={[1, 1, 3 / 4]}
      m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
      px={[3, 3, 0]}
      color={colors.secondary}
      className={resume}
    >
      <h1>Bedford West</h1>
      <a href={bedfordresume} download>
        Download the PDF version.
      </a>
      <hr />
      <h2>QUALIFICATIONS</h2>
      <ul className="highlights">
        <li>
          10 years of professional experience involving full-stack and mobile
          quality assurance, automation, statistics, probability, software
          metrics, and configuration management
        </li>
        <li>Knowledge of and experience with:</li>
        <ul>
          <li>
            Python, Java, Rust, Go, C, C++, C#, Objective-C, Tcl/Tk, HTML, and
            CSS
          </li>
          <li>
            iOS, Android, Mac OS X, Linux, and Windows operating environments
          </li>
          <li>
            Mobile and Web Automation w/Appium, Selenium WebDriver, Maven,
            Gradle, Calabash, and Jenkins
          </li>
          <li>JIRA, Rally, and HP Quality Center</li>
        </ul>
        <li>
          ISTQB CTFL, CTAL-TA, & CTAL-TM (Certified Tester Foundation Level &
          Advanced Level for Test Analysis and Management)
        </li>
      </ul>
      <hr />
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div className="italics">
        5/2017 – Current · Quality Assurance Manager
      </div>
      <h3>Sprout Social · Chicago, Illinois</h3>
      <ul>
        <li>
          Lead test strategy and execution for publishing feature sets for the
          web app, iOS and Android mobile apps, and platform.
        </li>
        <li>
          Championed the effort to reduce false negatives in the Selenium test
          suite, dropping the failure rate from more than 10 false failures per
          deploy to typically seeing no false failures.
        </li>
        <li>
          Drove the initiative to move the Selenium test infrastructure from
          on-premises statically configured machines to a dynamic, scalable
          infrastructure on Amazon Web Services.
        </li>
        <li>
          Directly supervised three QA engineers and was jointly responsible for
          the test strategy for Sprout Social along with two other QA managers.
        </li>
      </ul>
      <div className="italics">6/2016 – 5/2017 · Software Manager in Test</div>
      <div className="italics">
        3/2015 – 6/2016 · Quality Assurance Engineer
      </div>
      <h3>
        University of Chicago, Center for Data Intensive Science · Chicago,
        Illinois
      </h3>
      <ul>
        <li>
          Led the QA effort for the NCI Genomic Data Commons project, a world
          first, petabyte-scale cloud data repository facilitating cancer
          genomic studies and precision medicine.
        </li>
        <li>
          Executed deployment of all services to OpenStack environments via
          SaltStack and a custom orchestration library.
        </li>
        <li>
          Utilized Emacs to develop Python Selenium, API, and data test scripts
          across Ubuntu VMs.
        </li>
        <li>
          Interfaced with government clients at Leidos Biomedical and the
          National Cancer Institute.
        </li>
        <li>
          Managed stress testing efforts prior to the project&apos;s go-live
          launch.
        </li>
      </ul>
      <div className="italics">
        10/2012 – 2/2015 · Mobile Quality Assurance Lead
      </div>
      <h3>Solstice Mobile · Chicago, Illinois</h3>
      <ul>
        <li>
          Established a working mobile automation prototype framework for the
          company, consisting of open source tools such as Appium, Selenium
          WebDriver, TestNG, Java, Maven, and Jenkins.
        </li>
        <li>
          Led and supervised test efforts across multiple projects, with teams
          of up to 8 QA consultants working within iOS, Android, and mobile web
          development projects.
        </li>
        <li>
          Led recruiting efforts for QA by reviewing resumes for and
          interviewing over 40 candidates.
        </li>
      </ul>
      <div className="italics">
        1/2008 – 10/2012 · Quality Assurance Metrics/Software Test Engineer
      </div>
      <h3>Tybrin Corporation · Fort Walton Beach, Florida</h3>
      <ul>
        <li>
          Researched, evaluated, and implemented statistical methods to analyze
          the quality of large scale, system of systems aircraft software
          undergoing developmental test.
        </li>
        <li>
          Acted as the sole representative for metrics on a team of 65+ software
          engineers.
        </li>
        <li>
          Implemented and refined processes for compliance to IEEE and CMMI
          standards.
        </li>
      </ul>
      <div className="italics">
        4/2004 – 8/2004, 5/2005 – 10/2005 · Research Assistant/Programmer
      </div>
      <h3>Florida State University · Tallahassee, Florida</h3>
      <br />
      <hr />
      <h2>EDUCATION</h2>
      <div className="italics">B.S. in Physics and Mathematics · 12/2006</div>
      <h3> Florida State University · Tallahassee, Florida</h3>
      <ul>
        <li>
          Sigma Pi Sigma (&apos;04-&apos;05) Physics Honors Society inductee
        </li>
        <li>Pi Mu Epsilon (&apos;05) Mathematics Honors Society inductee</li>
      </ul>
    </Box>
  </Box>
);

export const pageQuery = graphql`
  query AboutQuery {
    imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default Resume;
