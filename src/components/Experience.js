import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react';
import Lilcon from './Lilcon';
const Details = ({ position, company, companyLink, time, address, works }) => {
  const ref = useRef(0);
  return (<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <Lilcon reference={ref} />
    <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
      <h3 className='capitalize font-bold text-2xl'>{position} &nbsp;
        <a href={companyLink} target='_blank' className='capitalize text-primary'>@{company}</a>
      </h3>
      <span className='capitalize font-medium text-dark/75'>
        {time}| {address}
      </span>
      <p className='font-medium w-full'>
        {works}
      </p>
    </motion.div>
  </li>
  );
}
const Experience = () => {
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
        Experience
      </h2>

      <div ref={ref} className='w-{75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYprogress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 '>
          <Details
            position="Research Division at Laboratorium Robotics and Multimedia" company="Gunadarma University"
            time="2020 - Present" address="Margonda Raya Street, Depok"
            works="Melakukan riset terhadap robot dalam mengerjakan beberapa proyek dan membuat robot beserta modul (praktikum,workshop dan kurus) dan dokumentasi serta melakukan pemeliharaan pada robot yang sudah dibuat."
          />
          <Details
            position="Intership Artificial intelligence Division" company="PT Sari Technology"
            time="2021 - 2022" address="Cengkareng, Jakarta Barat"
            works="Membantu membuat Robot yang sedang di bangun oleh divisi Artificial Intelligence serta melakukan maintenance terhadap website yang nantinya akan digunakan untuk beberapa robot."
          />
          <Details
            position="freelancer IT Support" company="PT GreatWall"
            time="2022 - 2022" address="JB Tower, Jakarta Pusat"
            works="Melakukan Pemeliharaan Komputer dan laptop seperti mengupgrade Spesifikasi, melakukan install ulang serta membackup data dan melakukan perbaikan terkait masalah komputer."
          />
          <Details
            position="Intership IT Support Department" company="PT PLN DisJaya"
            time="2018 - 2018" address="Gambir, Jakarta Pusat"
            works="Membantu menyelesaikan Masalah terkait Komputer seperti penginstalan antivirus dan melakukan pengecekan secara berkala komputer yang bermasalah melalui sistem tiket."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience