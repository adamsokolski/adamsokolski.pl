import Link from "next/link";

const Privacy = ({ translationsObj }) => {
  const contentArr = [...translationsObj.privacyBody];
  const body = contentArr.map((text, index) => <p key={index}>{text}</p>);
  return (
    <>
      <h2>{translationsObj.privacyLink}</h2>
      {body}
    </>
  );
};

export default Privacy;
