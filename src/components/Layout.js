import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
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
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </Grommet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
