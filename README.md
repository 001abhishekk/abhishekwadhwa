# Abhishek Wadhwa — Portfolio Site

Personal portfolio site for Abhishek Wadhwa, Digital & Brand Marketing Manager (B2B Demand Generation, Paid Acquisition, Lifecycle Marketing & Brand Strategy).

Live site: [abhishekwadhwa.netlify.app](https://abhishekwadhwa.netlify.app/)

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/en/) installed on your system.

Install dependencies:
```
npm install
```

Run the development server:
```
npm run dev
```

The site will be available at [http://localhost:5173/](http://localhost:5173/)

Build for production:
```
npm run build
```

## Contact Form

The contact form uses a Vercel serverless function (`/api/contact.js`) for form handling.

**Features:**
- Spam protection (honeypot field + keyword filtering)
- Frontend and backend validation
- Basic IP-based rate limiting
- CORS headers and input sanitization

**To enable email delivery**, add SMTP environment variables:
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
```

## Project Structure

```
src/
  components/     Shared and homepage components
  components/about/    About page sections
  components/hire/     Hire Me page sections
  components/contact/  Contact page sections
  components/work/     Work/Portfolio page sections
  components/start-project/  Start Project page sections
  pages/          Route-level pages
public/           Static assets
api/              Vercel serverless functions
```
