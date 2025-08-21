import {
    Outlet,
    RouterProvider,
    Link,
    createRouter,
    createRoute,
    createRootRoute,
  } from '@tanstack/react-router'
  import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
  import HelloElectron from '@/components/HelloElectron'

  const rootRoute = createRootRoute({
    component: () => (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  })
  
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: function Index() {
      return (
        <HelloElectron />
      )
    },
  })
  
  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: function About() {
      return <div className="p-2">Hello from About!</div>
    },
  })
  
  const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
  
  export const router = createRouter({ routeTree })

  declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }
  