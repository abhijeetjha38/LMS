"""
LMS Backend — FastAPI Server

Minimal API server with a health-check endpoint.
Run with: uvicorn main:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="LMS API",
    description="Learning Management System API",
    version="0.1.0",
)

# CORS configuration — allow the Next.js frontend during development
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health_check():
    """Health-check endpoint to verify the API server is running."""
    return {"status": "ok"}
