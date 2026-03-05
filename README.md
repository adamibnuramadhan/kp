# KP Pertamina – Internship Photo Gallery

A modern, responsive React website to document an internship experience at PT Pertamina (Persero).

## ✨ Features

- 📸 **Gallery** – Photo grid with Lightbox preview
- 📅 **Timeline** – Chronological internship activities
- 👥 **Team** – Member card layout
- 💬 **Contact** – Contact form with social links
- 📱 **Responsive** – Mobile-friendly with hamburger menu
- 🎨 **Modern Design** – Tailwind CSS, smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm 10+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx        # Responsive navbar with hamburger menu
    Footer.jsx        # Site footer
    Gallery.jsx       # Photo grid with Lightbox
    TeamCard.jsx      # Team member card
    TimelineItem.jsx  # Single timeline entry
  pages/
    Home.jsx          # Landing page with hero section
    GalleryPage.jsx   # Gallery page
    TimelinePage.jsx  # Timeline page
    TeamPage.jsx      # Team page
    ContactPage.jsx   # Contact page with form
  data/
    photos.json       # Photo data (title, description, src)
    team.json         # Team member data
    timeline.json     # Internship timeline events
  styles/
  assets/
  index.css           # Global styles + Tailwind import
  App.jsx             # Router setup
  main.jsx            # Entry point
```

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react-router-dom` | Client-side routing |
| `yet-another-react-lightbox` | Photo lightbox/modal |
| `tailwindcss` | Utility-first CSS |

## 🌐 Deployment

### Vercel

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite – click **Deploy**

### Netlify

1. Push the repository to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) and click **Add new site**
3. Connect your GitHub repo
4. Build command: `npm run build`, publish directory: `dist`
5. Click **Deploy site**

## 📷 Customizing Photos

Edit `src/data/photos.json` to add your own Google Drive images:

```json
{
  "id": 1,
  "title": "Your Photo Title",
  "description": "A short description",
  "src": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
  "thumb": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
}
```

> **Tip:** To get a direct Google Drive link, share the file publicly and use the file ID from the share URL.
