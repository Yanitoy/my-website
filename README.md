# 🧑‍💻 My Personal Website

Welcome to my personal website built with **React** and hosted on **GitHub Pages**. This project includes a feedback form powered by **EmailJS**, allowing users to send messages directly to my email inbox — no backend required.

## 🔧 Technologies Used

- **React** (with Create React App)
- **EmailJS** (client-side email service)
- **GitHub Pages** (static site hosting)
- **Node.js** (v22 compatible with `--openssl-legacy-provider`)

## ✨ Features

- Responsive layout
- Navigation menu (Home, About, Contact, Feedback)
- Form validation and status indicators
- Email delivery via EmailJS

## 📦 Installation

```bash
npm install
```

## 💻 Development

```bash
npm start
```

## 🏗️ Production Build

If you're using Node.js ≥ 17, build with legacy OpenSSL support:

```bash
set NODE_OPTIONS=--openssl-legacy-provider && npm run build
```

Or on Unix/macOS:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

## 🚀 Deployment

Deploy your app to GitHub Pages:

```bash
npm run deploy
```

The site is published at: [https://yanitoy.github.io/my-website](https://yanitoy.github.io/my-website)

## 📨 Feedback Form (via EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email template and get:
   - **Service ID**
   - **Template ID**
   - **Public Key**
3. Replace the placeholders in your `Feedback.js` file with your EmailJS credentials

## 📁 Folder Structure

```
my-website/
├── public/
├── src/
│   ├── components/
│   │   └── Feedback.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 📅 Last Updated

2025-05-08
