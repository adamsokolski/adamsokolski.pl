const About = ({ translationsObj }) => {
  return (
    <div>
      <h2>{translationsObj.aboutTitle}</h2>

      <p className="about-body">{translationsObj.aboutBody}</p>
    </div>
  );
};

export default About;
