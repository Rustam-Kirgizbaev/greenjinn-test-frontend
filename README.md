This is a frontend part of [Test task of GreenJinn](https://greenjinn-test-frontend.vercel.app/) and it can bring some tears to your eyes if you are a professional web designer or have very strict beauty standards 😁.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Key Features](#key-features)
- [Folder Structure](#folder-structure)
- [Acknowledgements](#acknowledgements)

## Prerequisites

To run this project locally, you need the following tools installed on your machine:

- **Node.js**: v20.x or later (v20.10.0 is used to be more specific)
- **npm**: To install dependencies
- **Git**: Version control system to clone the repository and further contribute to it
- **.env Configuration**: Ensure you have an `.env` file configured with any necessary environment variables, like API URLs. You can see all env variables in the `.env.template` file.

## Local Development

To get started with the project on your local machine, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/Rustam-Kirgizbaev/greenjinn-test-frontend.git
cd greenjinn-test-frontend
```

2. Install dependencies using `npm`:

```bash
npm install
```

3. Run the development server via below command, open your browser and navigate to `http://localhost:3000`

```bash
npm run dev
```

## Key Features

- **Responsive Design**: The app layout adapts seamlessly across different screen sizes.
- **Real-time Updates**: Certain data points refresh every 30 seconds without reloading the page.
- **ShadCN UI**: Integrated ShadCN UI components for consistency and ease of customization in the design.
- **TypeScript Support**: Fully typed with TypeScript for better developer experience and safety in code.
- **Pre-commit Hooks with Husky**: The project is configured with **Husky** to run **Prettier**, **ESLint**, and tests automatically before each commit, ensuring code quality and consistency. (Sounds too professional, doesn't it 😎)

## Folder Structure

├── public/ # Static files like images, icons, etc.\
├── src/ # Main source code\
│ ├── app/ # Next.js pages and routing\
│ ├── common/ # Shared utilities, interfaces, constants, etc.\
│ ├── components/ # Reusable UI components\
│ ├── lib/ # helper functions, and external libraries\
├── test/ # Unit and integration tests\
├── .env # Environment variables\
├── package.json # Project dependencies and scripts\
└── README.md # Project documentation\

## Acknowledgements

Test coverage is really poor and needs improvement.
