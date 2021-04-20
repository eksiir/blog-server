This is a modern blog server using the advanced Next.js features.

# Setup
To setup the build, run, test or any other operations you must first do

```$ npm ci```

# Development Environment
To run the server in the development environment there is no need to build the server, simply do

```$ npm run dev```

This will start the client at ```localhost:3000``` by default.

## Customizing the Port
Pass the desired port e.g. 4000

```npx next dev -p 4000```

# Build
Build the server before attempting to start it in the production mode, or if you wish to deply
to a hosting provider other than Vercel. 

To build the server do

```$ npm run build```

This builds the production application in the ```.next``` folder.
# Production Environment
To run the server in the production environment after building it, do

```$ npm run start```

This will start the Node.js server on default port  `3000` . The server supports hybrid pages, serving both `statically` generated and `server-side rendered` pages, and `API Routes`.

## Customizing the Port
Pass the desired port e.g. 4000

```npx next start -p 4000```
