// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 mt-4 p-4 border-t-2">
      Created By
      <i className="fa-solid fa-heart text-orange-500"></i>
      <a
        href="https://www.linkedin.com/in/saddam-hussein786/"
        target="_blank"
        title="Saddam's Linkedin Profile"
        className="text-blue-950 font-bold hover:text-orange-500"
      >
        Saddam Hussein
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/work-saddam/Reactjs"
        target="_blank"
        title="Food Github Repository"
      >
        <strong>
          Food<span></span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;