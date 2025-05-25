# 0x04. Typescript Project

## Overview

This project is a series of tasks designed to help you learn and master TypeScript fundamentals including basic types, interfaces, classes, functions, generics, namespaces, declaration merging, and working with the DOM. The project also covers advanced concepts such as nominal typing and ambient namespaces for external libraries.

The tasks progressively build your TypeScript knowledge and involve practical exercises including interface creation, class implementation, type guards, string literal types, and working with external libraries via ambient namespaces.

## Learning Objectives

By the end of this project, you will be able to:

- Understand and use basic TypeScript types
- Define and implement interfaces and classes
- Use TypeScript with the DOM
- Create and use generic types
- Work with namespaces and declaration merging
- Utilize ambient namespaces for external libraries
- Implement basic nominal typing in TypeScript
- Write type-safe functions and type predicates

## Project Setup

### Prerequisites

- Node.js and npm installed
- Recommended editors: Visual Studio Code, vim, emacs
- Ubuntu 18.04 environment (for transpilation)

### Installation and Setup

For each task directory (e.g., task_0, task_1, etc.), run the following commands:

npm install
npm run build
npm start-dev

- npm install will install dependencies
- npm run build will transpile TypeScript code and bundle with Webpack
- npm start-dev will start the Webpack development server and open the project in your browser

### Configuration Files

Each task directory includes:

- package.json: Project dependencies and scripts
- .eslintrc.js: ESLint configuration for TypeScript linting
- tsconfig.json: TypeScript compiler configuration
- webpack.config.js: Webpack configuration for bundling and development server

## Tasks Summary

### Task 0: Creating an Interface for a Student

- Define a Student interface
- Create two student objects and render their first name and location in a table using vanilla JavaScript

### Task 1: Building a Teacher Interface

- Create a Teacher interface with optional and readonly properties
- Allow dynamic addition of arbitrary attributes

### Task 2: Extending the Teacher Class and Advanced Types

- Extend Teacher interface to create Directors
- Implement functions like printTeacher
- Create classes implementing specific interfaces for Teacher and Director
- Implement functions createEmployee, isDirector, and executeWork with type predicates
- Use string literal types for teaching subjects

### Task 3: Ambient Namespaces and External Libraries

- Define types and interfaces to represent database row elements
- Create ambient declarations (crud.d.ts) for external CRUD operations in a crud.js library
- Use ambient namespace to import and call CRUD functions while maintaining full type safety

## How to Run Tests

This project uses Jest for testing. To run tests for each task, navigate to the task directory and run:

npm test

## Notes

- All source files have the .ts extension.
- Code compiles without warnings or errors.
- Follow TypeScript best practices for typing and interfaces.
- Configuration files are consistent across tasks for uniform build and linting processes.

## Acknowledgements

This project was completed as part of the curriculum at ALX Africa. Special thanks to the ALX team and mentors for their guidance and support in learning TypeScript and software development best practices.

## Author

Joel Anarba Amuni  
Twitter: [@joel_anarba](https://x.com/joel_anarba)  
GitHub: [joelanarba](https://github.com/joelanarba)  
LinkedIn: [joelanarba](https://www.linkedin.com/in/joelanarba/)

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Jest Testing Framework](https://jestjs.io/)
- [Webpack Documentation](https://webpack.js.org/)
- [ALX Africa](https://www.alxafrica.com)