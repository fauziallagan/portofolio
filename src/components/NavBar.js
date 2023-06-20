import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import InstagramIcon, { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from "framer-motion"

const CosutumeLinks = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[2px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-100 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}
const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CosutumeLinks href="/" title="Home" className='mr-12' />
        <CosutumeLinks href="/about" title="About" className='mx-12' />
        <CosutumeLinks href="/project" title="Project" className='mx-12' />
      </nav>
      <nav className='flex items-center justify-between flex-wrap '>
        <motion.a href="https://twitter.com" target={'_blank'} whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}
          className='w-7 mx-10'>
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://linkedin.com/fauziallagan" target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7 mx-10'>
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://github.com/fauziallagan" target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7 mx-5'>
          <GithubIcon />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar