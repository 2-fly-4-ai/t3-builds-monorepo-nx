import type { AppRouter } from '../../../../../../apps/the-ultimate-blog/src/server/trpc/router/_app';
import { createReactQueryHooks } from '@trpc/react';

export const trpc = createReactQueryHooks<AppRouter>();
