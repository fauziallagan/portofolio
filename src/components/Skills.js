import { motion } from 'framer-motion'
import React from 'react'

const Skil = ({ name, x, y }) => {
  return (<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute '
    whileHover={{ scale: 1.09 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }} viewport={{ once: false }}> {name}

  </motion.div >)
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'> Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='fle items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.09 }}> Website
        </motion.div>
        <Skil name="HTML" x="-14vw" y="5vw" />
        <Skil name="CSS" x="1vw" y="-9vw" />
        <Skil name="Javascript" x="1vw" y="9vw" />
        <Skil name="PHP" x="-15vw" y="-3vw" />
        <Skil name="Python" x="15vw" y="-3vw" />
        <Skil name="C++" x="14vw" y="5vw" />
        <Skil name="Arduino IDE" x="-25vw" y="1vw" />
        <Skil name="Arduino UNO" x="-15vw" y="15vw" />
        <Skil name="Arduino Mega" x="-15vw" y="-15vw" />
        <Skil name="Wemos D1 R1" x="15vw" y="-15vw" />
        <Skil name="ESP 8266" x="29vw" y="1vw" />
        <Skil name="ESP 32 LoRa" x="15vw" y="15vw" />
        <Skil name="Cisco Networking" x="1vw" y="-20vw" />
        <Skil name="Mikrotik" x="-1vw" y="20vw" />
      </div>

    </>
  )
}

export default Skills