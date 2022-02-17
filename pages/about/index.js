import { useState, useEffect } from 'react'

const About = ({ translationsObj }) => {
  const [myAge, setMyAge] = useState(21)

  useEffect(() => {
    const myBirthday = new Date(2001, 1, 8)
    console.log(myBirthday)
    setInterval(() => {
      let now = new Date()
      let myAgeInMs = now - myBirthday
      setMyAge(myAgeInMs / 1000 / 60 / 60 / 24 / 365)
    }, 10)
  }, [])

  return (
    <div>
      <h2>{translationsObj.aboutTitle}</h2>

      <p className="about-body">
        {translationsObj.aboutBody1}
        <span className="age">
          <span className="age-integer">
            {myAge.toFixed(9).substring(0, 2)}
          </span>
          <span className="age-decimal">{myAge.toFixed(9).substring(2)}</span>
        </span>
        {translationsObj.aboutBody2}
      </p>
    </div>
  )
}

export default About
