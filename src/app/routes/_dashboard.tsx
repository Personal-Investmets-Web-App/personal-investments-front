import { Flex } from '@chakra-ui/react';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import Navbar from '../components/shared/Navbar';

export const Route = createFileRoute('/_dashboard')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex direction="column" minHeight="100dvh">
      <Navbar />
      <Outlet />
    </Flex>
  );
}
