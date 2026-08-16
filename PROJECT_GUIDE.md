# CargoVerge Logistics Project Guide

This guide explains what the CargoVerge Logistics project is, what you need to install, how to run it on your own computer, and where to find the main files when you want to change or fix something.

It is written for a person who can follow English instructions but may not have technical experience.

---

## 1. What this project is

CargoVerge Logistics is a business website for a logistics and freight forwarding company. The website presents the company, its services, its global network, reasons to choose the company, testimonials, certifications, office locations, and contact information.

The website includes:

- A loading screen with the CargoVerge logo.
- A top navigation menu.
- A temporary USA and Canada freight banner.
- A hero section with rotating logistics images.
- An About section explaining the company.
- A Services section for air freight, ocean freight, land transport, rail transport, warehousing, vehicle import/export, cargo handling, and logistics services.
- A Global Network section.
- A Why Choose Us section.
- A Client Testimonials section.
- Certification and association icons.
- A contact form that can send messages through EmailJS.
- Google Maps embeds for USA and Canada office locations.
- A footer with quick links, services, and contact details.

---

## 2. What technology this project uses

This project is a frontend website. That means it runs in a web browser like Chrome, Edge, Firefox, or Safari.

The main tools are:

| Tool | Simple explanation |
| --- | --- |
| Node.js | A program that lets your computer run JavaScript tools needed by this project. |
| npm | A package installer that comes with Node.js. It downloads the project packages. |
| React | The library used to build the website screen. |
| Vite | The development server and build tool used to run the website locally. |
| Tailwind CSS | The styling system used for colors, spacing, layout, and responsive design. |
| Framer Motion | The animation package used for moving/fading effects. |
| EmailJS | The service used by the contact form to send email from the browser. |
| lucide-react | The icon package used for icons such as phone, email, menu, and social icons. |

---

## 3. What you need before starting

You need these things installed on your computer:

1. **A web browser**
   - Recommended: Google Chrome or Microsoft Edge.

2. **Node.js**
   - Install the **LTS** version from: <https://nodejs.org/>
   - LTS means “Long Term Support”. It is the safest version for most people.
   - npm will be installed automatically when you install Node.js.

3. **A code editor**
   - Recommended: Visual Studio Code.
   - Install it from: <https://code.visualstudio.com/>

4. **The project folder**
   - You need the CargoVerge Logistics project folder on your computer.
   - If someone gives you a ZIP file, unzip it first.
   - If someone gives you a GitHub link, download or clone it.

---

## 4. How to check Node.js and npm are installed

After installing Node.js, check that it works.

### On Windows

1. Press the **Windows key**.
2. Type **Command Prompt**.
3. Open **Command Prompt**.
4. Type this command and press Enter:

```bash
node -v
```

5. You should see a version number, for example:

```text
v20.11.0
```

6. Then type this command and press Enter:

```bash
npm -v
```

7. You should see another version number, for example:

```text
10.2.4
```

### On Mac

1. Open **Terminal**.
2. Type this command and press Enter:

```bash
node -v
```

3. Then type this command and press Enter:

```bash
npm -v
```

If both commands show version numbers, Node.js and npm are ready.

---

## 5. How to open the project folder

### Option A: Using Visual Studio Code

1. Open **Visual Studio Code**.
2. Click **File**.
3. Click **Open Folder**.
4. Select the CargoVerge Logistics project folder.
5. Click **Open**.
6. In Visual Studio Code, click **Terminal** in the top menu.
7. Click **New Terminal**.
8. A terminal will open at the bottom of Visual Studio Code.

### Option B: Using Command Prompt or Terminal directly

1. Open Command Prompt on Windows or Terminal on Mac.
2. Go to the project folder using the `cd` command.

Example on Windows:

```bash
cd Desktop\Cargo-Verge-Logistics
```

Example on Mac:

```bash
cd ~/Desktop/Cargo-Verge-Logistics
```

If your project is somewhere else, change the path to match where your folder is.

---

## 6. Step-by-step: how to run the website locally

Follow these steps exactly.

### Step 1: Open the project folder

Open the CargoVerge Logistics folder in Visual Studio Code or in your terminal.

### Step 2: Install the project packages

Run this command:

```bash
npm install
```

What this does:

- It reads `package.json`.
- It downloads all required packages.
- It creates a `node_modules` folder.

Wait until the command finishes. It may take a few minutes.

### Step 3: Create the EmailJS settings file

This project includes a file named `.env.example`. It is an example file for private settings.

Create a new file named `.env` in the main project folder.

The `.env` file should contain this:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If you do not have EmailJS details yet, you can leave the example values for now. The website will still open, but the contact form may not send real emails until EmailJS is configured.

### Step 4: Start the website

Run this command:

```bash
npm run dev
```

You should see something similar to this:

```text
Local: http://localhost:5173/
```

### Step 5: Open the website in your browser

1. Open Chrome, Edge, Firefox, or Safari.
2. Go to this address:

```text
http://localhost:5173/
```

The CargoVerge Logistics website should now appear on your computer.

---

## 7. How to stop the website

When the website is running, the terminal stays active.

To stop it:

1. Click inside the terminal.
2. Press these keys together:

```text
Ctrl + C
```

3. If it asks a question like “Terminate batch job?”, type:

```text
y
```

4. Press Enter.

---

## 8. How to make a production build

A production build is the optimized version of the website that can be uploaded to hosting.

Run this command:

```bash
npm run build
```

This creates a folder named `dist`.

The `dist` folder contains the final website files for deployment.

---

## 9. How to preview the production build

After running `npm run build`, you can preview the final version locally.

Run this command:

```bash
npm run preview
```

Then open the local preview address shown in the terminal.

---

## 10. EmailJS setup for the contact form

The contact form uses EmailJS to send messages.

### What EmailJS does

EmailJS allows the website to send form messages without needing a custom backend server.

### Basic EmailJS setup steps

1. Go to <https://www.emailjs.com/>.
2. Create an account or log in.
3. Create an email service.
4. Create an email template.
5. In the template, include these fields:

```text
from_name
company_name
contact_number
from_email
message
```

6. Find your EmailJS service ID.
7. Find your EmailJS template ID.
8. Find your EmailJS public key.
9. Put those values in your `.env` file:

```bash
VITE_EMAILJS_SERVICE_ID=your_real_service_id
VITE_EMAILJS_TEMPLATE_ID=your_real_template_id
VITE_EMAILJS_PUBLIC_KEY=your_real_public_key
```

10. Stop the website if it is already running.
11. Start it again with:

```bash
npm run dev
```

This restart is important because Vite reads `.env` values when the development server starts.

---

## 11. Common problems and simple fixes

### Problem: `npm` is not recognized

This usually means Node.js is not installed correctly.

Fix:

1. Install Node.js LTS from <https://nodejs.org/>.
2. Close the terminal.
3. Open a new terminal.
4. Run:

```bash
node -v
npm -v
```

### Problem: Website does not open

Fix:

1. Make sure `npm run dev` is still running.
2. Look for the local address in the terminal.
3. Open that exact address in your browser.

### Problem: Contact form does not send

Possible reasons:

- `.env` file is missing.
- EmailJS values are still placeholders.
- EmailJS service or template is not configured correctly.
- The development server was not restarted after editing `.env`.

Fix:

1. Check the `.env` file.
2. Confirm the EmailJS values are real.
3. Stop the website with `Ctrl + C`.
4. Start it again with `npm run dev`.

### Problem: A page looks broken after editing

Fix:

1. Undo the last change you made.
2. Save the file.
3. Refresh the browser.
4. If it still looks broken, check the terminal for error messages.

---

## 12. General file reference: what each file or folder does

### Main project files

| File or folder | What it is for |
| --- | --- |
| `package.json` | Lists the project name, commands, dependencies, and development dependencies. Use this to see which packages the project needs. |
| `package-lock.json` | Locks exact package versions so installs are consistent. Usually you do not edit this manually. |
| `index.html` | The base HTML page. It contains the page title, SEO description, favicon, Google Fonts, and the root element where React loads the app. |
| `vite.config.js` | Configuration for Vite, the tool that runs and builds the website. |
| `tailwind.config.js` | Tailwind CSS settings, including brand colors, fonts, grid background, and card shadow. |
| `postcss.config.js` | CSS processing configuration used by Tailwind and Autoprefixer. |
| `.env.example` | Example private environment settings for EmailJS. Copy this to `.env` for local setup. |
| `.gitignore` | Tells Git which files and folders should not be tracked, such as installed dependencies or private files. |
| `README.md` | Short project overview and basic setup notes. |
| `PROJECT_GUIDE.md` | This detailed beginner-friendly guide. |

### Source code folders

| File or folder | What it is for |
| --- | --- |
| `src/main.jsx` | The starting point of the React app. It loads the main `App` component into the page. |
| `src/pages/App.jsx` | The main website file. Most visible page sections, form behavior, navigation behavior, image slider, loader, maps, and footer are here. |
| `src/components/data.js` | Stores reusable website data such as menu items, services, reasons, testimonials, highlights, stats, and icon references. |
| `src/styles/index.css` | Main CSS file. It loads Tailwind and defines shared custom styles such as page background, section width, hero map background, route animation, and loader animation. |
| `src/assets/` | Contains images imported by React code, such as hero images, service images, and certification icons. |
| `public/` | Contains public files that can be referenced directly by URL paths, such as `/logo.png`, `/og-cover.svg`, and `/usa-canada-banner.png`. |

---

## 13. Where to change common website content

| If you want to change... | Go to this file |
| --- | --- |
| Company name in the header or footer | `src/pages/App.jsx` |
| Main hero headline | `src/pages/App.jsx` |
| About section paragraphs | `src/pages/App.jsx` |
| Service names and descriptions | `src/components/data.js` |
| Service images | `src/components/data.js` and `src/assets/` |
| Menu links | `src/components/data.js` |
| Why Choose Us cards | `src/components/data.js` |
| Testimonials | `src/components/data.js` |
| Contact email, phone, addresses, or social links | `src/pages/App.jsx` |
| Google Maps locations | `src/pages/App.jsx` |
| Website title and search description | `index.html` |
| Brand colors | `tailwind.config.js` |
| General page styling | `src/styles/index.css` |
| Logo files | `public/` and `src/assets/` depending on which logo is being used |
| EmailJS keys | `.env` on your computer, using `.env.example` as the template |

---

## 14. Important notes for non-technical users

- Do not delete `package.json`.
- Do not delete `package-lock.json`.
- Do not delete the `src` folder.
- Do not manually edit files inside `node_modules`.
- If `node_modules` is missing, run `npm install` again.
- If you edit `.env`, restart the website using `Ctrl + C` and then `npm run dev`.
- If you change images, keep the file names simple and avoid spaces. Example: `new-hero-image.webp`.
- Always save files before refreshing the browser.

---

## 15. Quick command checklist

Use these commands in the project folder:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Meaning:

- `npm install` downloads packages.
- `npm run dev` starts the local website.
- `npm run build` creates the final production files.
- `npm run preview` previews the production build locally.
