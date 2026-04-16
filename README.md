# CargoVerge Logistics Web Application

A modern, production-ready React + Tailwind logistics company website for **CargoVerge Logistics**.

## Features

- Fully responsive UX for mobile, tablet, and desktop
- Sticky navigation with hamburger menu
- Premium hero, services, network, testimonials, and contact sections
- Framer Motion animations and smooth scrolling
- SEO-friendly meta and Open Graph tags
- Working contact form integrated with EmailJS
- Google Maps embeds for USA and Canada office locations

## Tech Stack

- React (JSX)
- Tailwind CSS
- Framer Motion
- EmailJS (frontend email delivery)
- Vite

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy env file and configure EmailJS credentials:

   ```bash
   cp .env.example .env
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Build production bundle:

   ```bash
   npm run build
   ```

## EmailJS Setup

Create an EmailJS service + template and map fields:

- `from_name`
- `company_name`
- `contact_number`
- `from_email`
- `to_email`
- `message`

Then set:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Target recipient email is set to:

- `info@cargovergelogistics.com`

## Folder Structure

```text
src/
  assets/
  components/
  pages/
  styles/
```
