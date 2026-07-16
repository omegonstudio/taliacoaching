import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pago/resultado')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pago/resultado"!</div>
}
