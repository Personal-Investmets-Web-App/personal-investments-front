import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { ColorModeButton } from '../ui/color-mode';

const Navbar: FC = () => (
  <Flex as="header" justify="space-between" align="center" py={2} px={{ base: 2, md: 4 }}>
    <Text as="span" textStyle="title" fontWeight="{fontWeights.bold}">
      Navbar
    </Text>
    <ColorModeButton />
  </Flex>
);

export default Navbar;
