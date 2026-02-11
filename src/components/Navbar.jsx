const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-md">
      <h1 className="text-xl font-bold text-teal-400">TAM.</h1>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li><a href="#about" className="hover:text-teal-400">About</a></li>
        <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#achievements" className="hover:text-teal-400">Achievements</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>

      <a 
        href="/Tamilarasi P-22CSR220.pdf" 
        target="_blank"
        className="bg-teal-500 hover:bg-teal-400 px-5 py-2 rounded-full text-black font-semibold"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
