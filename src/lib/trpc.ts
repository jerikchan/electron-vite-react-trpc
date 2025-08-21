import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../electron/main/api';

export const trpcReact = createTRPCReact<AppRouter>();