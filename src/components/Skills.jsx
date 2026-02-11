const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10">
      <h2 className="text-3xl font-bold text-teal-400 text-center mb-10">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-gray-300">

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="font-bold text-teal-400 mb-3">Languages</h3>
          C, Java, Python, JavaScript
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="font-bold text-teal-400 mb-3">Web Development</h3>
          React.js, Node.js, Express.js, HTML, CSS, Bootstrap
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="font-bold text-teal-400 mb-3">Core CS</h3>
          OOPS, OS, DBMS, Computer Networks
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="font-bold text-teal-400 mb-3">Databases</h3>
          MySQL, MongoDB
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="font-bold text-teal-400 mb-3">Tools</h3>
          Git, Postman, Figma, Power BI
        </div>

      </div>
    </section>
  );
};

export default Skills;
