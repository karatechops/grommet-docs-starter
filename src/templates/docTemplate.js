import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Markdown } from 'grommet';
import Layout from '../components/Layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, rawMarkdownBody } = markdownRemark
  return (
    <Layout>
      <Box pad="medium">
        <Heading>{frontmatter.title}</Heading>
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