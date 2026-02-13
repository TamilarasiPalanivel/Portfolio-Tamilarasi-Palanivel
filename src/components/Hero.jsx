// const Hero = () => {
//   return (
//     <section className="text-center py-40 px-6">
//       <h1 className="text-5xl md:text-6xl font-bold">
//         Hi, I'm <span className="text-teal-400">Tamilarasi P</span>
//       </h1>

//       <h2 className="mt-4 text-2xl text-gray-300">
//         Computer Science Engineer | Cybersecurity Enthusiast
//       </h2>

//       <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
//         Driven by continuous learning and innovation, committed to solving
//         real-world challenges and building scalable secure systems.
//       </p>

//       <div className="mt-8 flex justify-center gap-6">
        
//         <a
//               href="https://leetcode.com/"
//               target="_blank"
  
//               className="border border-teal-500 px-6 py-3 rounded-full text-teal-400"
//             >
//               LeetCode
//             </a>

//             <a
//               href="https://linkedin.com/in/tamilarasi-palanivel"
//               target="_blank"
//               className="border border-teal-500 px-6 py-3 rounded-full text-teal-400"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="https://github.com/TamilarasiPalanivel"
//               target="_blank"
//               className="border border-teal-500 px-6 py-3 rounded-full text-teal-400"
//             >
//               GitHub
//             </a>
//       </div>



      
//         {/* RIGHT SIDE PHOTO */}
//         <div className="flex justify-center mt-12 md:mt-0 relative">

//           {/* Green Circle Ring */}
//           <div className="absolute w-80 h-80 border-4 border-green-400 rounded-full animate-pulse"></div>

//           {/* Profile Image */}
//           <img
//             src="/profile.png"
//             alt="Tamilarasi"
//             className="w-72 h-72 object-cover rounded-full relative z-10 shadow-lg"
//           />

//         </div>
//     </section>
//   );
// };

// export default Hero;
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-12 pt-32">

      <div className="grid md:grid-cols-2 items-center w-full gap-10">

        {/* LEFT SIDE CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-teal-400">Tamilarasi P</span>
          </h1>

          <h2 className="mt-4 text-2xl text-gray-300">
            Computer Science Engineer | Cybersecurity Enthusiast
          </h2>

          {/* <p className="mt-6 text-gray-400 max-w-lg leading-7">
            Final-year Computer Science Engineer passionate about building secure and scalable applications. Experienced in full-stack development and biometric authentication systems, with a strong focus on data privacy and system security.

          </p> */}

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6">

            {/* LeetCode */}
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition duration-300"
            >
              <SiLeetcode size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tamilarasi-palanivel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/TamilarasiPalanivel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition duration-300"
            >
              <FaGithub size={20} />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE PHOTO */}
        <div className="flex justify-center relative">

          {/* Glowing Teal Circle */}
         { /*<div className="absolute w-80 h-80 rounded-full border-4 border-teal-400 shadow-[0_0_40px_#2dd4bf] animate-pulse"></div>*/}
          <div className="absolute w-80 h-80 rounded-full border-4 border-teal-400 shadow-[0_0_60px_#14b8a6] animate-pulse"></div>


          {/* Profile Image */}
          <img
            src="/profile.png"
            alt="Tamilarasi"
            className="w-72 h-72 object-cover rounded-full relative z-10 shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;
