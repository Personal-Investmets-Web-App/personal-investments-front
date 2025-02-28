import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const SectionBox = React.forwardRef((props: PropsWithChildren, ref) => (
  <Box
    as="section"
    ref={ref}
    padding={{ base: 3, md: 4 }}
    border={'1px solid {colors.gray.500}'}
    borderRadius="2xl"
    height="100%"
    {...props}
  >
    {props.children}
  </Box>
));

export default SectionBox;
