# Firebase Auth Setup

This README provides instructions for setting up your Firebase project with Firebase Authentication.

## Prerequisites

Before starting, ensure you have the following installed:
- Node.js (latest stable version)
- npm (Node package manager)

## Setup Instructions

Follow these steps to set up Firebase Authentication for your project:

### 1. Install Dependencies
First, navigate to your project directory and install the necessary dependencies:

```bash
pnpm install
```

### 2. Firebase Configuration
- Navigate to the `src` directory of your project:

```bash
cd src
```

- Add your Firebase credentials in a file named `firebaseservice.json`. This file contains the configuration details of your Firebase project (API keys, service account details, etc.). You can download this file from the Firebase Console.

- Next, create an `.env` file in the `src` directory and add the required environment variables. Ensure that you store sensitive data like API keys and credentials in this file.

### 3. Set Up Firebase Authentication
After you've added your `firebaseservice.json` and configured your `.env` file, Firebase Authentication will be ready to use.

### 4. Run the Application
Once the configuration is complete, run the `app.js` file to start the application:

```bash
node app.js
```

The app should now be running, and Firebase Authentication will be integrated.

---

## Troubleshooting

- If you encounter any errors, ensure the `firebaseservice.json` and `.env` files are correctly configured.
- If you see errors related to missing dependencies, run `pnpm install` again.
