import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { use, useEffect, useRef } from 'react'
import ImgFile from '../../public/images/profile/oji.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNum = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 },)
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if(isInView) {

      motionValue.set(value);
    }

  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Portofolio Website" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'>Halo, Saya fauzi, saya merupakan seorang lulusan sarjana sistem komputer di salah satu perguruan tinggi swasta di daerah depok, saya memiliki ketertarikan dibidang
              teknologi, minat saya dibidang programming dan Robotik, karena latar belakang saya adalah sistem komputer yang cenderung ke hardware dan robotik, saya juga memiliki minat dibidang web development dan DevOps. </p>
              <p className=' my-4 font-medium'>
               Selama kuliah Saya juga aktif mengikuti bootcamp/kursus diluar kampus dan menghasilakan beberapa proyek. saya juga menjadi asisten laboratorium Multimedia dan Robotika Universitas Gunadarma
               bagian divisi reset untuk membuat dan mengembangkan robot untuk keperluan praktikum, lomba, proyek dosen dan event seperti Kampus merdeka pada bagian Matching fund yang bekerja sama antara kampus gunadarma dan pemerintah kota penajam paser utara
              </p>
              <p className='font-medium'>
                
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-2'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image src={ImgFile} alt="not Image" className="w-full h-auto rounded-2xl" />
            </div>

            <div className='col-span-2  flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNum value={20} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Robotics Project</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNum value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Website Project</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold' >
                  <AnimatedNum value={4} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>IT Support</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNum value={200} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>statisfied</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>

    </>
  )
}

export default about