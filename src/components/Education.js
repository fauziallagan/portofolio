import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react';
import Lilcon from './Lilcon';
const Details = ({ type, time, place, info }) => {
  const ref = useRef(0);
  return (<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
    <Lilcon reference={ref} />
    <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
      <h3 className='capitalize font-bold text-2xl'>{type}</h3>
      <span className='capitalize font-medium text-dark/75'>
        {time}| {place}
      </span>
      <p className='font-medium w-full'>
        {info}
      </p>
    </motion.div>
  </li>
  );
}
const Education = () => {
  const ref = useRef(0);
  const { scrollYprogress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]

    }
  )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>

      <div ref={ref} className='w-{75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYprogress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 '>
          <Details
            type="Bachelor of Computer Systems"
            time="2019 - now " place="Gunadarma Univeristy"
            info=" Mempelajari Tentang Robotika, Internet of Things, Kecerdasan Buatan, Website menggunakan bahasa PHP, Mikrokontroller seperti ESP, arduino dan beberapa sensor serta membangun dan mengembangkan jaringan komputer."
          />
          <Details
            type="Vocational High School"
            time="2016 - 2019" place="Perguruan cikini 3 Vacational High School"
            info=" Mempelajari tentang cara merakit komputer sampai komputer bekerja dengan baik, konfigurasi jaringan komputer menggunakan perangkat cisco dan mikrotik."
          />
          <Details
            type="Junior High School"
            time="2013 - 2016" place="Perguruan Rakyat 1 Junior High School"
            info=" Mempelajari tentang Microsoft Power Point, Word, Excel dan dasar dasar komputer serta pengetahuan umum lainnya."
          />

        </ul>
      </div>
    </div>
  )
}

export default Education;