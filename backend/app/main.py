from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="UsahaKu+ API",
    description="Business Health Copilot for MSMEs",
    version="1.0.0",
)

# Set up CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://usahaku.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to UsahaKu+ API"}

@app.get("/api/v1/health")
def health_check():
    return {"status": "ok"}
