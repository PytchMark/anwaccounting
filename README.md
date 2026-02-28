<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6e9b3df8-8700-494e-b302-ccbcc920b395

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Deploy to Google Cloud Run

This repository includes container configuration for Cloud Run.

### Build locally

```bash
docker build -t anwaccounting .
```

### Run locally

```bash
docker run --rm -p 8080:8080 anwaccounting
```

### Deploy with gcloud

```bash
gcloud run deploy anwaccounting \
  --source . \
  --region <YOUR_REGION> \
  --platform managed \
  --allow-unauthenticated
```

### Deploy with Cloud Build image

```bash
gcloud builds submit --config cloudbuild.yaml --substitutions _IMAGE=gcr.io/<PROJECT_ID>/anwaccounting

gcloud run deploy anwaccounting \
  --image gcr.io/<PROJECT_ID>/anwaccounting \
  --region <YOUR_REGION> \
  --platform managed \
  --allow-unauthenticated
```
