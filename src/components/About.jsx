// import {
//   FaGraduationCap,
//   FaShieldAlt,
//   FaDatabase,
//   FaCode,
//   FaBrain,
//   FaLightbulb   
// } from "react-icons/fa";

// import "./about.css";

// const About = () => {
//   return (
//     <section id="about" className="about-section">

//       <h2 className="about-title">
//         About Me
//       </h2>

//       <div className="about-wrapper">

//         {/* LEFT SIDE – EDUCATION */}
//         <div className="about-card">

//           <h3>
//             <FaGraduationCap />
//             Education
//           </h3>

//           <div className="edu-item">
//                         <p> Final-year Computer Science Engineer passionate about building secure and scalable applications. Experienced in full-stack development and biometric authentication systems, with a strong focus on data privacy and system security.
// </p>

//             <strong>B.E – Computer Science and Engineering</strong>
//             <p>Kongu Engineering College, Perundurai (2022–2026)</p>
//             <p>CGPA: 8.60</p>
//           </div>
//           <div className="edu-item">
//             <strong>Honours Degree – Data Science</strong>
//             <p>(2022–2026)</p>
//           </div>

//           <div className="edu-item">
//           <strong>S.V.V Higher Secondary School, Trichy</strong>
//     <p>Higher Secondary Certificate (HSC)
// </p>
//             <p>(2021–2022)</p>
//              <p>
//               Percentage: 95.33%
//             </p>
//             <p>Secondary School Leaving Certificate (SSLC)</p>
//            <p>(2019–2020)</p>
//               <p>
//            Percentage: 98.5%
//            </p>
//           </div>
         

//         </div>


//         {/* RIGHT SIDE – AREAS OF INTEREST */}
//         <div className="about-card">
//          <h3>
//             <FaLightbulb />
//             What I’m Interested In
//           </h3>
          
//           <ul className="interest-list">
//             <li>
//               <FaShieldAlt />
//               Cybersecurity:
//               Passionate about protecting systems and data from cyber threats. Interested in ethical hacking, penetration testing, and developing secure applications.
//             </li>

//             <li>
//               <FaDatabase />
//               Database Management Systems:
//               Experienced in designing and managing databases using SQL and NoSQL technologies. Skilled in optimizing database performance and ensuring data integrity.
//             </li>

//             <li>
//               <FaCode />
//               MERN Development:
//               Skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. Experienced in creating responsive and user-friendly interfaces.
//             </li>

//             <li>
//               <FaBrain />
//               Machine Learning & Data Science:
//               Interested in applying machine learning algorithms to solve real-world problems. Experienced in data analysis, feature engineering, and model deployment.
//             </li>
//           </ul>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default About;
import {
  FaGraduationCap,
  FaShieldAlt,
  FaDatabase,
  FaCode,
  FaBrain,
  FaLightbulb
} from "react-icons/fa";

import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">

      <h2 className="about-title">About Me</h2>

      <div className="about-wrapper">

        {/* LEFT SIDE – EDUCATION TIMELINE */}
        <div className="about-card">

          <h3>
            <FaGraduationCap />
            Education
          </h3>

          {/* <div className="timeline">
<p> Final-year Computer Science Engineer passionate about building secure and scalable applications. Experienced in full-stack development and biometric authentication systems, with a strong focus on data privacy and system security.
</p>
  <div className="timeline-item">

    <strong>Kongu Engineering College, Perundurai</strong>
    <p>B.E. Computer Science and Engineering</p>
    <p>2022 – 2026 | CGPA: 8.60</p>
  </div>

  <div className="timeline-item">
    <strong>Honours in Data Science</strong>
    <p>Specialized academic track</p>
    <p>2022 – 2026</p>
  </div>

  <div className="timeline-item">
    <strong>S.V.V Higher Secondary School, Trichy</strong>
    <p>Higher Secondary Certificate (HSC) 2021 – 2022
       <p>Percentage: 95.33%</p> </p>
    <p>Secondary School Leaving Certificate (SSLC)  2019 – 2020
           <p>Percentage: 98.50%</p> </p>

  </div> */}
  {/* Intro Paragraph (OUTSIDE timeline) */}
<p className="edu-intro">
  Final-year Computer Science Engineer passionate about building secure and
  scalable applications. Experienced in full-stack development and biometric
  authentication systems, with a strong focus on data privacy and system security.
</p>

<div className="timeline">

  <div className="timeline-item">
    <strong>Kongu Engineering College, Perundurai</strong>
    <p>B.E. Computer Science and Engineering</p>
    <p>2022 – 2026 | CGPA: 8.60</p>
  </div>

  <div className="timeline-item">
    <strong>Honours in Data Science</strong>
    <p>Specialized academic track</p>
    <p>2022 – 2026</p>
  </div>

  <div className="timeline-item">
    <strong>S.V.V Higher Secondary School, Trichy</strong>
    <p>HSC (2021 – 2022) | 95.33%</p>
    <p>SSLC (2019 – 2020) | 98.50%</p>
  </div>




</div>

        </div>

        {/* RIGHT SIDE – INTEREST BOXES */}
        <div className="about-card">

          <h3>
            <FaLightbulb />
            What I’m Interested In
          </h3>

          <div className="interest-grid">

            <div className="interest-box">
              <FaShieldAlt />
              <h4>Cybersecurity</h4>
              <p>Ethical hacking, penetration testing and building secure systems.</p>
            </div>

            <div className="interest-box">
              <FaDatabase />
              <h4>Database Systems</h4>
              <p>SQL, NoSQL design, performance optimization & data integrity.</p>
            </div>

            <div className="interest-box">
              <FaCode />
              <h4>MERN Development</h4>
              <p>Building scalable full-stack applications using modern tech.</p>
            </div>

            <div className="interest-box">
              <FaBrain />
              <h4>Machine Learning</h4>
              <p>Applying ML models to solve real-world problems.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
