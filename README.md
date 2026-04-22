# All Plumbing Systems Website

## What This Project Is

Custom React website for All Plumbing Systems, a Bay Area plumbing business. The site provides a professional public web presence with clear service messaging, mobile-friendly contact options, and a lightweight quote request workflow. It was intentionally built as a frontend-only site so the business can maintain a polished online presence without backend infrastructure or ongoing server overhead.

## Live Site

https://allplumbingsystems.org/

## Features

- Responsive single-page marketing website for a real plumbing business
- Hero section with 24/7 service messaging and clear calls to action
- Service overview section covering core plumbing offerings
- Mobile-friendly contact actions for phone, SMS, and WhatsApp
- Quote request form powered by EmailJS without a custom backend
- Business branding, contact details, and footer navigation

## Tech Stack

- React 18
- Create React App
- Bootstrap 5
- Font Awesome
- EmailJS
- Jest and React Testing Library

## Screenshots

Screenshots can be added here as the repo is polished further:

- `docs/screenshots/homepage.png`
- `docs/screenshots/services.png`
- `docs/screenshots/contact-form.png`

The live site above is currently the best way to review the project.

## Setup

```bash
npm install
npm start
```

The app runs locally at `http://localhost:3000`.

## Environment Variables

Create a local `.env` file in the project root using `.env.example` as the template:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID_CUSTOMER=your_customer_template_id
REACT_APP_EMAILJS_TEMPLATE_ID_INTERNAL=your_internal_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Do not commit your real `.env` file. Because this is a frontend-only React app, these values are configuration rather than true secrets and will still be exposed to the client at runtime.

## Available Scripts

- `npm start` runs the development server
- `npm test` runs the test suite
- `npm run build` creates a production build

## Author

Built by [Saam Khosravi](https://github.com/khosravi11).
