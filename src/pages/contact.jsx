"use client"

import React from 'react'
import Layout from './Layout'
import Contact from '@/components/Contact'

const contact = ({darkmode}) => {
  return (
    <Layout>
      <Contact darkmode={darkmode}/>
    </Layout>
  )
}

export default contact