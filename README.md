# WriteDaily

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) [![Next.js](https://img.shields.io/badge/Next.js-v15-blue.svg)](https://nextjs.org/) [![Supabase](https://img.shields.io/badge/Supabase-Database-orange.svg)](https://supabase.com/)

**WriteDaily** is a dynamic writing application built with Next.js to help users build and maintain a daily writing habit. It features rich text formatting, AI-generated prompts, streak tracking, daily goals, and analytics to monitor your progress. Supabase is used solely as the database to store user data, while NextAuth handles authentication with providers like Google.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Supabase Setup](#supabase-setup)
- [Authentication Setup](#authentication-setup)
- [Running the Application Locally](#running-the-application-locally)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

WriteDaily is designed to support writers in establishing a consistent daily routine. It combines creative prompts, progress tracking, and data-driven insights in a modern, responsive design powered by Next.js. The database operations are handled by Supabase, ensuring efficient storage and retrieval of your writing data.

---

## Features

- **Rich Text Formatting:** Customize your writing using an intuitive text editor.
- **AI-Generated Prompts:** Get creative suggestions to overcome writer's block.
- **Streak Tracking:** Monitor your daily writing streaks and maintain motivation.
- **Daily Goals:** Set personal writing targets and track your achievements.
- **Analytics:** Gain insights into your writing habits with detailed analytics.

---

## Technologies Used

- **Next.js:** For building a fast, scalable, and SEO-friendly frontend.
- **Supabase:** Serves as the database solution, handling all data operations.
- **NextAuth:** Provides seamless authentication (including Google sign-in).
- **Additional Integrations:**
  - **Google Analytics:** Track user interactions and engagement.
  - **OpenRouter API & Gemini API:** Enhance prompt generation and integration.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mAbdullahrana/writedaily.git
   cd writedaily
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root directory with the following content. **Replace the placeholder values with your own credentials:**

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key

# NextAuth & Authentication
NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret

# Gemini Integration
GEMINI_KEY=your_gemini_key

# Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_tracking_id

# OpenRouter API
OPENROUTER_API_KEY=your_openrouter_api_key
```

> **Security Note:** Do not commit these actual keys or secrets to your public repository. Use a secret management solution when deploying.

---

## Supabase Setup

1. **Create a Supabase Project:**
   - Sign up at [Supabase](https://supabase.com/).
   - Create a new project and obtain your **Supabase URL** and **SUPABASE KEY**.
2. **Database Configuration:**
   - Configure your tables and schemas to store user writings, analytics, and streak data.
   - Refer to the [Supabase documentation](https://supabase.com/docs) for detailed guidance.

---

## Authentication Setup

WriteDaily uses NextAuth for authentication, including Google sign-in. Configure the following in your `.env.local` file:

- **AUTH_GOOGLE_ID:** Your Google OAuth client ID.
- **AUTH_GOOGLE_SECRET:** Your Google OAuth client secret.
- **AUTH_SECRET:** A secret string for session token encryption.

For more details, refer to the [NextAuth documentation](https://next-auth.js.org/).

---

## Running the Application Locally

Once you have configured your environment variables, start the development server:

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## Deployment

WriteDaily is optimized for deployment on platforms that support Next.js, such as Vercel or Netlify.

### Deploying on Vercel

1. **Push Your Code to GitHub:** Make sure all changes are committed and pushed.
2. **Import the Repository in Vercel:** Log into Vercel and import your GitHub repository.
3. **Set Environment Variables:** In the Vercel dashboard, add all required environment variables.
4. **Deploy:** Vercel will automatically build and deploy your application.

For more details, see the [Vercel documentation](https://vercel.com/docs).

---

## Contributing

Contributions are always welcome! To contribute:

1. **Fork the Repository**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add feature or fix issue description"
   ```

4. **Push Your Branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request:** Describe your changes and the benefits they bring.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions, suggestions, or feedback, please [open an issue](https://github.com/mAbdullahrana/writedaily/issues) or contact the repository owner.
