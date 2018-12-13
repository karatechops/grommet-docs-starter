import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading } from 'grommet';
import { Link } from 'gatsby'
import Nav from './Nav';

const Header = ({ siteTitle }) => (
  <Box tag="header" margin={{ bottom: 'medium' }}>
    <Heading margin="none">
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
