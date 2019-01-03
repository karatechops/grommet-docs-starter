import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Markdown as GrommetMarkdown, Box, Text, Paragraph } from 'grommet';

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

const Code = styled.code`
    display: inline-block;
    background: ${({theme}) => theme.global.colors['dark-1']};
    color: ${({theme}) => theme.global.colors['light-1']};
    padding: 0 6px;
    border-radius: 3px;
`;

const Pre = ({ children, ...rest }) =>
  <Box
    as="pre"
    background="dark-1"
    pad="medium"
    round="medium"
    {...rest}
  >
    <Text>
      <code>
      {children}
      </code>
    </Text>
  </Box>;

export const Markdown = ({ children, ...rest }) =>
  <GrommetMarkdown
    components={{
      blockquote: {
        component: Quote
      },
      pre: {
        component: Pre
      },
      code: {
        component: Code
      },
      p: {
        component: Paragraph,
        props: {
          size: 'large'
        }
      }
    }}
    {...rest}
  >
    {children}
  </GrommetMarkdown>;

Markdown.propTypes = {
  children: PropTypes.node.isRequired
};

export default Markdown;
