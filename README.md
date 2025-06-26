# Kuriftu Membership

Kuriftu Membership is a modern web application designed to manage memberships efficiently and intuitively .

## Tech Stack

- **React** for building user interfaces
- **Vite** for lightning-fast development and builds
- **ESLint** for code linting

## Project Structure

Your app is located in the `my-app` folder:

```
kuriftu-membership/
└── my-app/
    ├── public/
    ├── src/
    ├── package.json
    ├── vite.config.js
    └── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/rodas-awgichew/kuriftu-membership.git
   cd kuriftu-membership/my-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:
```sh
npm run dev
# or
yarn dev
```

### Building for Production

Create an optimized production build:
```sh
npm run build
# or
yarn build
```

Preview the production build locally:
```sh
npm run preview
# or
yarn preview
```

### Linting

To check your code for linting errors:
```sh
npm run lint
# or
yarn lint
```

## Deployment on Vercel

To deploy this project from the root (where `my-app` is a subdirectory):

1. **Set the root directory in Vercel:**
   - Go to your project on [Vercel Dashboard](https://vercel.com/dashboard).
   - In "Settings" > "General", find the "Root Directory" option.
   - Set it to `my-app`.
   - Redeploy.

Now Vercel will recognize your app and build it correctly!

## License

[MIT](LICENSE)

---

> _Built with React and Vite for Kuriftu Membership management._
