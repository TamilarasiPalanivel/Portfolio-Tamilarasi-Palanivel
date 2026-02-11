const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10">
      <h2 className="text-3xl font-bold text-teal-400 text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="text-xl font-bold">Face Liveness Detection</h3>
          <p className="text-gray-400 mt-3">
            Developed a CNN-based system to differentiate real faces from 
            spoofed images or videos for secure authentication.
          </p>
          <a 
            href="https://github.com/TamilarasiPalanivel/Face-Liveness-Detection"
            target="_blank"
            className="text-teal-400 mt-3 inline-block"
          >
            View on GitHub →
          </a>
        </div>

        <div className="bg-black/40 p-6 rounded-xl border border-teal-500/20">
          <h3 className="text-xl font-bold">MediNexus - Hospital Management</h3>
          <p className="text-gray-400 mt-3">
            Full-stack hospital management system developed in 24 hours 
            hackathon for appointment scheduling and patient data management.
          </p>
          <a 
            href="https://github.com/TamilarasiPalanivel/MediNexus-Hospital-Management-System"
            target="_blank"
            className="text-teal-400 mt-3 inline-block"
          >
            View on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
