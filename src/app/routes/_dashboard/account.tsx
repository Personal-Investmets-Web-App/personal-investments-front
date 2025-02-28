import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/account')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Account</div>;
}
