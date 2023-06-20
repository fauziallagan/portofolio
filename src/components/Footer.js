import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full h-auto border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 px-20 flex items-center justify-between'>
        <Link href="/">Term and Conditional</Link>
        <div className='flex items-center'>
          <span>Build With  : </span>
        </div>
        <Link href="/">Copyright &copy; {new Date().getFullYear()}</Link>
      </Layout>
    </footer>
  )
}

export default Footer