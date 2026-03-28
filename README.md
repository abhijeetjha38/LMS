# LMS — Learning Management System

A full-stack learning management system built with **Next.js** (frontend) and **FastAPI** (backend).

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS, shadcn/ui |
| Backend  | FastAPI, Python 3.11+               |
| Database | SQLite (via SQLAlchemy — coming soon) |

## Project Structure

```
├── frontend/            # Next.js app (TypeScript + Tailwind CSS + shadcn/ui)
│   ├── app/
│   │   ├── login/
│   │   │   └── page.tsx # Login page (Sign In form)
│   │   ├── layout.tsx   # Root layout (Inter font, global styles)
│   │   ├── page.tsx     # Redirects to /login
│   │   └── globals.css  # Tailwind + design tokens (slate/amber palette)
│   ├── components/
│   │   └── ui/          # shadcn/ui components (Button, Input, Label, Card)
│   ├── lib/
│   │   └── utils.ts     # cn() utility for class merging
│   └── package.json
├── backend/             # FastAPI server (Python)
│   ├── main.py          # API server with /api/health endpoint
│   └── requirements.txt # Python dependencies
├── src/
│   └── login.html       # Standalone HTML login page (no build step required)
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** 20+ and **npm**
- **Python** 3.11+

### Frontend — Next.js

```bash
cd frontend
npm install
npm run dev
```

The app starts at [http://localhost:3000](http://localhost:3000) and redirects to the login page.

### Backend — FastAPI

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The API server starts at [http://localhost:8000](http://localhost:8000).

- Health check: `GET http://localhost:8000/api/health` → `{"status": "ok"}`
- API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

### Standalone Login Page

Open `src/login.html` directly in any browser — no server or build step required. This is a self-contained HTML file using Tailwind CSS via CDN.

## Design System

- **Base palette**: Slate (cool blue-gray) — backgrounds, borders, text
- **Accent**: Amber — buttons, focus rings, highlights
- **Border radius**: `rounded-lg` (8px) on all interactive elements
- **Typography**: Inter font family
