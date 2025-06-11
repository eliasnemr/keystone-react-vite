require('dotenv').config();
// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core'

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema'

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth'
import { DatabaseProvider } from '@keystone-6/core/types';

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: process.env.DATABASE_PROVIDER! as DatabaseProvider,
      url: process.env.DATABASE_URL!,
    },
    lists,
    session,
    // Disable the Admin UI
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    // Configure CORS for your frontend
    server: {
      cors: {
        origin: ['http://localhost:5173'], // Your Vite dev server
        credentials: true,
      },
      extendExpressApp: (app, createContext) => {
        // Add any custom Express middleware here if needed
      },
    },
    // Make GraphQL API publicly accessible
    graphql: {
      path: '/api/graphql',
      debug: process.env.NODE_ENV !== 'production',
    },
  })
)
