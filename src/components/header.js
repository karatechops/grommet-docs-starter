import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading } from 'grommet';
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <Box background="brand" tag="header">
    <Box pad="medium">
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
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
