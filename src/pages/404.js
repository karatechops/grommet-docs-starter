import React from 'react'
import Layout from '../components/layout'
import { Box, Heading, Paragraph } from 'grommet';

const NotFoundPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading>404</Heading>
      <Paragraph>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Paragraph>
    </Box>
  </Layout>
)

export default NotFoundPage
