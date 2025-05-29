// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/saddam-hussein786/"
        target="_blank"
        title="Saddam's Linkedin Profile"
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