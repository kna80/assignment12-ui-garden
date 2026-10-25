# 🌸 UI Garden — Web Component Library

## Assignment 12

A reusable and responsive web component library built using React, TypeScript, Styled Components, and Storybook.

## Technologies Used

- React
- TypeScript
- Styled Components
- Storybook
- Jest
- React Testing Library
- Docker
- Nginx

## Components

1. Button
2. Label
3. Text
4. Table (Header, Rows, Cells, Footer)
5. Dropdown
6. Radio Button
7. Image
8. Hero Image
9. Card

Each component includes Default and Disabled states in Storybook.

## Installation

Open the project folder and run:

```bash
npm install
```

## Run React Application

```bash
npm start
```

Open the application at:

http://localhost:3000

## Run Storybook

```bash
npm run storybook
```

Open Storybook at:

http://localhost:6006

## Run Tests

```bash
npm test -- --watchAll=false
```

The project includes component tests using Jest and React Testing Library.

## Production Build

```bash
npm run build
```

## Docker Deployment

Build the Docker image:

```bash
docker build -t ui-garden .
```

Run the Docker container:

```bash
docker run -d --name Kaur_Khushdeep_coding_assignment12 -p 8083:8083 ui-garden
```

Open the deployed application at:

http://localhost:8083

## Docker Verification

Check running containers:

```bash
docker ps
```

The React production application is served using Nginx on port 8083.

## Features

- Reusable React components
- TypeScript support
- Responsive styling
- Styled Components
- Storybook documentation
- Customizable component properties
- Default and Disabled states
- Component testing
- Docker deployment

## Author

Assignment 12 — Web Component Library