WriteDaily
WriteDaily is a dynamic writing application built with Next.js that helps users build and maintain their daily writing habit. The app features rich text formatting, AI-generated prompts, streak tracking, daily goals, and analytics to monitor your progress. Supabase is used exclusively as the database for storing user data, while NextAuth handles authentication with providers like Google.

Table of Contents
Overview

Features

Technologies Used

Getting Started

Prerequisites

Installation

Environment Variables

Supabase Setup

Authentication Setup

Running the Application Locally

Deployment

Contributing

License

Contact

Overview
WriteDaily is designed to support users in establishing a consistent writing routine through a combination of creative prompts, progress tracking, and data-driven insights. It leverages a modern stack with Next.js for the frontend and Supabase as its database backend.

Features
Rich Text Formatting: Customize your writing using a full-featured text editor.

AI-Generated Prompts: Get creative suggestions to overcome writer's block.

Streak Tracking: Monitor your daily writing streaks and keep yourself accountable.

Daily Goals: Set writing targets to boost productivity.

Analytics: Gain insights into your writing habits with detailed analytics.

Technologies Used
Next.js: For building a fast and scalable React-based frontend.

Supabase: Used solely as the database solution to store user writings, analytics, and other data.

NextAuth: For handling user authentication, including Google sign-in.

Additional Services:

Google Analytics: (via NEXT_PUBLIC_GA_TRACKING_ID) for tracking usage.

OpenRouter API: For any additional AI or prompt generation functionalities.

Gemini API: For additional integrations as needed.

Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v12 or later)

npm or Yarn

Git

Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/mAbdullahrana/writedaily.git
cd writedaily
Install Dependencies:

Using npm:

bash
Copy
Edit
npm install
Or using Yarn:

bash
Copy
Edit
yarn install
Environment Variables
Create a .env.local file in the root directory with the following content. Replace the placeholder values with your own credentials:

ini
Copy
Edit
# Supabase
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
Security Note: Do not expose these keys in a public repository. Consider using environment variable management or secret management services when deploying.

Supabase Setup
Create a Supabase Project:

Sign up at Supabase.

Create a new project and obtain your Supabase URL and SUPABASE KEY.

Database Configuration:

Set up your tables and schemas to store user data such as writings, analytics, and streaks.

Follow the Supabase documentation for guidance.

Authentication Setup
WriteDaily uses NextAuth for authentication. The following variables are required for Google authentication:

AUTH_GOOGLE_ID: Your Google OAuth client ID.

AUTH_GOOGLE_SECRET: Your Google OAuth client secret.

AUTH_SECRET: A secret string for encrypting session tokens.

Set these in your .env.local as shown above. For more details on configuring NextAuth, please refer to the NextAuth documentation.

Running the Application Locally
After configuring your environment variables, start the development server:

Using npm:

bash
Copy
Edit
npm run dev
Or using Yarn:

bash
Copy
Edit
yarn dev
Then open http://localhost:3000 in your browser to view the application.

Deployment
WriteDaily can be deployed on platforms that support Next.js such as Vercel or Netlify. Below is a brief guide for deploying on Vercel:

Push Your Code to GitHub: Ensure all changes are committed.

Import Repository in Vercel: Log into Vercel and import your repository.

Set Environment Variables: In the Vercel dashboard, add all required environment variables.

Deploy: Vercel will build and deploy your application automatically.

For more details, refer to the Vercel documentation.

Contributing
Contributions are welcome! If you’d like to contribute to WriteDaily, please follow these steps:

Fork the Repository

Create a New Branch:

bash
Copy
Edit
git checkout -b feature/your-feature-name
Commit Your Changes:

bash
Copy
Edit
git commit -m "Description of your changes"
Push Your Branch:

bash
Copy
Edit
git push origin feature/your-feature-name
Open a Pull Request: Provide a detailed explanation of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions, suggestions, or feedback, please open an issue on the repository or contact the repository owner.

