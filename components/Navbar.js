import Flag from './Flag'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ translationsObj, switchLang, langPolish }) => {
  return (
    <>
      <Link href="/projects">
        <a className="fancy-link">
          <span>01.</span> {translationsObj.projectsLink}
        </a>
      </Link>
      <Link href="/contact">
        <a className="fancy-link">
          <span>02.</span> {translationsObj.contactLink}
        </a>
      </Link>
      <AnimatePresence exitBeforeEnter>
        {langPolish ? (
          <Flag
            flag="pl"
            key="pl"
            switchLang={switchLang}
            langPolish={langPolish}
          />
        ) : (
          <Flag
            flag="en"
            key="en"
            switchLang={switchLang}
            langPolish={langPolish}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
