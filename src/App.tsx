import './App.css'

import { useState } from 'react'
import { ipcLink } from 'electron-trpc/renderer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import superjson from 'superjson';
import { RouterProvider } from '@tanstack/react-router'
import { trpcReact } from '@/lib/trpc';
import { router } from '@/router';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpcReact.createClient({
      links: [ipcLink()],
      transformer: superjson,
    })
  );

  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpcReact.Provider>
  )
}

export default App