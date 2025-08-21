import { useState } from 'react';
import logoVite from '../assets/logo-vite.svg'
import logoElectron from '../assets/logo-electron.svg'
import UpdateElectron from '@/components/update'
import { trpcReact } from '@/lib/trpc';

export default function HelloElectron() {
    const { data } = trpcReact.greeting.useQuery({ name: 'Electron' });
    trpcReact.subscription.useSubscription(undefined, {
      onData: (data) => {
        console.log(data);
      },
    });
  
    const [count, setCount] = useState(0)
    
  
    return (
      <div className='App'>
        <div className='logo-box'>
          <a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
            <img src={logoVite} className='logo vite' alt='Electron + Vite logo' />
            <img src={logoElectron} className='logo electron' alt='Electron + Vite logo' />
          </a>
        </div>
        <h1>Electron + Vite + React</h1>
        <div>{data?.text || 'Loading...'}</div>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Electron + Vite logo to learn more
        </p>
        <div className='flex-center'>
          Place static files into the<code>/public</code> folder <img style={{ width: '5em' }} src='./node.svg' alt='Node logo' />
        </div>
  
        <UpdateElectron />
      </div>
    )
  }