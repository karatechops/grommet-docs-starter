import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Text } from 'grommet';

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
    render={data => <>
      {data.allMarkdownRemark && data.allMarkdownRemark.edges.length > 0 &&
        data.allMarkdownRemark.edges.map(({ node }) =>
          <Link
            to={node.frontmatter.path}
            style={{ // Temp styles
              textDecoration: 'none'
            }}
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
    </>}
  />
)
export default Nav
