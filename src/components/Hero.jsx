const Hero = () => {
  return (
    <section className="text-center py-40 px-6">
      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, I'm <span className="text-teal-400">Tamilarasi P</span>
      </h1>

      <h2 className="mt-4 text-2xl text-gray-300">
        Computer Science Engineer | Cybersecurity Enthusiast
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Driven by continuous learning and innovation, committed to solving
        real-world challenges and building scalable secure systems.
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <a href="#projects" className="bg-teal-500 px-6 py-3 rounded-full text-black font-semibold">
          View Projects
        </a>
        <a href="#contact" className="border border-teal-500 px-6 py-3 rounded-full text-teal-400">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
