import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading } from 'grommet';
import { Link } from 'gatsby'
import Nav from './Nav';

const Header = ({ siteTitle }) => (
  <Box pad="medium" background="brand" tag="header">
    <Box>
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
    <Box direction="row" pad={{ top: 'small' }}>
      <Nav />
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
