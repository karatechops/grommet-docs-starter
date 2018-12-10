import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Paragraph } from 'grommet';
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading>Hi people</Heading>
      <Paragraph>Welcome to your new Grommet Gatsby site.</Paragraph>
      <Box width="medium">
        <Image />
      </Box>
      <Link to="/page-2/">Go to page 2</Link>
    </Box>
  </Layout>
)

export default IndexPage
