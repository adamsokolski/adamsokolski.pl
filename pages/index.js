import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import Projects from './projects'

export default function Home({ translationsObj }) {
  const containerVariants = {
    initial: {
      opacity: 0,
      x: '-200px',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25,
      },
    },
    exit: {
      opacity: 0,
      x: '200px',
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  }
  return (
    <motion.div
      className="containerVariants"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2 className={styles.name}>Adam Sokólski</h2>
      <h3 className="prof">Front-End Developer</h3>
      <div className="index-buttons-box">
        <div className="mainButton">
          <Link href="/contact">
            <a>{translationsObj.contactButton}</a>
          </Link>
        </div>
        <div className="mainButton projectsButton">
          <Link href="/projects">
            <a>{translationsObj.projectsLink}</a>
          </Link>
        </div>
      </div>

      <Projects translationsObj={translationsObj} />
    </motion.div>
  )
}
