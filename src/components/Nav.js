import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Box, Text } from 'grommet';

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data =>
      <Box gap="small">
      {data.allMarkdownRemark && data.allMarkdownRemark.edges.length > 0 &&
        data.allMarkdownRemark.edges.map(({ node }) =>
          <Link
            to={node.frontmatter.path}
            style={{ // Temp styles
              textDecoration: 'none'
            }}
            key={node.frontmatter.path}
          >
            <Text
              color="light-2"
              margin={{ right: 'small' }}
            >
              {node.frontmatter.title}
            </Text>
          </Link>
        )
      }
      </Box>}
  />
)

export default Nav
