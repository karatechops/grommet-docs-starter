import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading } from 'grommet';
import { Link } from 'gatsby'
import Nav from './Nav';

const Header = ({ siteTitle }) => (
  <Box tag="header">
    <Heading margin={{ bottom: 'medium' }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </Heading>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
