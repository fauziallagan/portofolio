import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgProject1 from "../../public/images/projects/agency-website-cover-image.jpg"
import imgProject2 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import imgProject3 from "../../public/images/projects/4.jpg"
import imgProject4 from "../../public/images/projects/5.jpg"

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl rounded-br-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg p-12'>
        <Image src={img} alt={title} className='w-full h-auto rounded-3xl' />
      </Link> {/* Edited!*/}
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark '>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'> <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit My Project</Link>
        </div>
      </div>
    </article>
  )
}
const ProjectContent = ({ type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg p-0'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-auto text-left text-2xl font-bold'>{title}</h2>
        </Link>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'> <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className='ml-1 rounded-lg bg-dark text-light p-2 px-6 w-60 text-md font-semibold'>Visit My Project Content
          </Link>
        </div>
      </div>
    </article>)
}

const project = () => {
  return (
    <>
      <Head>
        <title>Code | Project</title>
        <meta name='project' content='project' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' />

          <div className='grid grid-cols-12 gap-24 gap-y-32'>
            <div className='col-span-12'>
              <FeatureProject
                title=" Crypto Screener Application"
                img={imgProject1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
                link="/"
                github="/"
                type="feature Project"
              />
            </div>
            <div className='col-span-6'>
              <ProjectContent
                title=" React Portfolio Website"
                img={imgProject2}
                type="React Portfolio Website"
                github="/"
                link="/" />
            </div>
            <div className='col-span-6'>
              <ProjectContent
                title=" React Portfolio Website"
                img={imgProject4}
                type="React Portfolio Website"
                github="/"
                link="/" />
            </div>
            <div className='col-span-12'>
              <FeatureProject
                title=" Crypto Screener Application"
                img={imgProject4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
                link="/"
                github="/"
                type="feature Project"
              />
            </div>
            <div className='col-span-6'>
              <ProjectContent
                title=" React Portfolio Website"
                img={imgProject3}
                type="React Portfolio Website"
                github="/"
                link="/" />
            </div>
            <div className='col-span-6'>
              <ProjectContent
                title=" React Portfolio Website"
                img={imgProject4}
                type="React Portfolio Website"
                github="/"
                link="/" />
            </div>

          </div>
        </Layout>
      </main>
    </>
  )
}

export default project