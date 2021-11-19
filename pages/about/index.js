const About = ({ translationsObj }) => {
  return (
    <div>
      <h2>{translationsObj.aboutTitle}</h2>

      <p>{translationsObj.aboutBody}</p>
    </div>
  );
};

export default About;
