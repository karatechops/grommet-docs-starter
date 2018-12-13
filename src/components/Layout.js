import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav'
import Header from './Header'
import './reset.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Grommet theme={grommet} full={true}>
          <Box full direction="row">
            <Box
              background="brand"
              width="medium"
              height="100vh"
              pad="medium"
              style={{ overflow: 'auto' }}
            >
              <Box flex={false}> {/* Disable flex shrink otherwise content is squished */}
                <Header siteTitle={data.site.siteMetadata.title} />
                <Nav />
              </Box>
            </Box>
            <Box
              width="100%"
              height="100vh"
              style={{ overflow: 'auto' }}
            >
              <Box flex={false}> {/* Disable flex shrink otherwise content is squished */}
              {children}
              </Box>
            </Box>
          </Box>
        </Grommet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
