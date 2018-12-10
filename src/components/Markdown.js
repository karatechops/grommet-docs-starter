import React from 'react';
import PropTypes from 'prop-types';
import { Markdown as GrommetMarkdown, Box, Text } from 'grommet';

const Quote = ({ children, ...rest }) =>
  <Box
    pad="medium"
    round="medium"
    border={{
      side: 'all',
      color: 'brand',
      size: '1px'
    }}
    {...rest}
  >
    <Text>
      {children}
    </Text>
  </Box>;

const Code = ({ children, ...rest }) =>
  <Box
    background="dark-1"
    pad="medium"
    round="medium"
    {...rest}
  >
    <Text>
      {children}
    </Text>
  </Box>;

export const Markdown = ({ children, ...rest }) =>
  <GrommetMarkdown
    components={{
      blockquote: {
        component: Quote
      },
      code: {
        component: Code
      },
    }}
    {...rest}
  >
    {children}
  </GrommetMarkdown>;

Markdown.propTypes = {
  children: PropTypes.node.isRequired
};

export default Markdown;
