import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Paragraph } from 'grommet';
import Layout from '../components/Layout'

const SecondPage = () => (
  <Layout>
    <Box pad="medium">
    <Heading>Hi from the second page</Heading>
    <Paragraph>Welcome to page 2</Paragraph>
    <Link to="/">Go back to the homepage</Link>
    </Box>
  </Layout>
)

export default SecondPage
