import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/oji.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBlub from '../../public/images/svgs/miscellaneous_icons_1.svg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Portofolio Website" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen" >
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-6/6'>
              <Image src={profilePic} alt="Not Images" className="py-10 h-auto rounded-full" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Tech Enthusiast in Computer Network, Robotics and Programming" className='!text-6xl !text-left' />

              <p className='my-4 text-base font-medium '>as a technology enthusiast I have interest in robotics, IoT and web programming.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'>Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:fauziallagan@gmail.com" className='ml-4 flex capitalize  uderline items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'>Contact</Link>
              </div>
            </div>
          </div >
        </Layout >
        <HireMe />
        <div >
          <Image src={lightBlub} alt='No image' className='w-full h-auto'></Image>
        </div>
      </main >
    </>
  )
}