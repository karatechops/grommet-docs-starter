import React from "react"
import { graphql } from "gatsby"
import { Box, Heading } from 'grommet';
import Layout from '../components/Layout';
import Markdown from '../components/Markdown';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, rawMarkdownBody } = markdownRemark
  return (
    <Layout>
      <Box width="large">
        <Heading margin="none">{frontmatter.title}</Heading>
        <Markdown>
          {rawMarkdownBody}
        </Markdown>
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
      frontmatter {
        path
        title
      }
    }
  }
`