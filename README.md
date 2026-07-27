# AIML Student Portfolio

A professional, responsive portfolio website for an AIML student with hands-on experience in robotics and web design.

## Features

- **Dynamic landing page** with name, tagline, and professional photo
- **About Me** — AIML specialization, robotics projects, web design experience
- **Projects** — Interactive filterable cards with hover effects and model-type tags (CNN, NLP, etc.)
- **Skills & Tools** — Icon showcase for Python, TensorFlow, PyTorch, ROS, Arduino, HTML, CSS, JavaScript
- **Experience & Education** — LinkedIn-style timeline (editable in `js/data.js`)
- **Certificates & Achievements** — Grid with thumbnails and verification links
- **Contact** — LinkedIn, email, GitHub links + contact form
- **Theme toggle** — Light/dark mode with smooth CSS transitions (🌞/🌙)
- **Mobile-friendly** — Recruiter-focused, minimalistic UI with scroll animations

## Quick Start

Open `index.html` in a browser, or run a local server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Customization

Edit **`js/data.js`** to update all portfolio content:

| Section | What to edit |
|---------|-------------|
| Profile | Name, tagline, bio, email, LinkedIn, GitHub |
| About | AIML, robotics, and web design descriptions |
| Projects | Add/remove projects with images, tags, links |
| Skills | Tool icons and skill categories |
| Experience | Work history (LinkedIn-synced format) |
| Education | Degrees and schools |
| Certificates | Titles, issuers, verification URLs |

### Replace Images

- **Profile photo**: Replace `assets/profile.svg` with your photo (update path in `data.js`)
- **Project screenshots**: Add images to `assets/projects/`
- **Certificate thumbnails**: Add images to `assets/certs/`

### LinkedIn Integration

Experience and education use a LinkedIn-compatible data structure in `js/data.js`. For live LinkedIn sync, you would need:

1. LinkedIn Developer App with OAuth 2.0
2. A backend proxy (LinkedIn API does not allow direct browser calls)
3. Update `js/main.js` to fetch from your API endpoint

For most portfolios, manually updating `data.js` from your LinkedIn profile is the simplest approach.

## Project Structure

```
├── index.html          # Main HTML
├── css/
│   └── styles.css      # All styles + theme variables
├── js/
│   ├── data.js         # Portfolio content (edit this!)
│   └── main.js         # Interactivity & rendering
└── assets/
    ├── profile.svg     # Your photo
    ├── projects/       # Project screenshots/GIFs
    └── certs/          # Certificate thumbnails
```

## Tech Stack

- HTML5, CSS3 (custom properties for theming)
- Vanilla JavaScript (no build step required)
- Font Awesome icons
- Google Fonts (Inter, JetBrains Mono)

## License

MIT — customize freely for your personal portfolio.
