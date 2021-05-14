# What is typescipt and what it is not

    Does not add any performance optimisation
    Runs only in development
    Uses annotations to validate js code
    Compiles ts code to js

## Quick Notes

    interface is a short cut for type definitions
    .d.ts files are used to define js modules to typescripts via interfaces
    some js modules already consist their type definitions like axios, other js modules' type definitions can be found @types/<module-name> if already created

# Setting up environment

    npm install -g typescript ts-node // after that we can use tsc command
    tsc index.ts // to compile index.ts to index.js
    ts-node index.ts // equals tsc index.ts && node index.js

# Maps Project

    npm install -g parcel-bundler //makes typescript run in browser by compiling it to js
    parcel index.html // starts up a local server on port 1234
