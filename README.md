# Text-to-banger

A simple API converting a user's proposed tweet into a veritable banger.

## To run the app locally

### Clone the repo

```
gh repo clone effectiveaccelerationism/text-to-banger
```

### Install and run the app

```
cd webapp
npm install
npm start
```

The app will be running on http://localhost:3000

### Run the OpenAI api server

Currently the app runs with an OpenAI API server, soon to be dismissed in favor of a custom finetuned model. To run the OpenAI API server, you need to have an OpenAI API key. You can get one [here](https://platform.openai.com/account/api-keys). Once you have your API key, create a file named `.env` in the `apiserver` directory and add the following line to it:

```
OPENAI_API_KEY=your-openai-key
```

Then, run the server with

```
cd api
python -m venv env
pip install -r requirements.txt
source env/bin/activate # on Windows use `env\Scripts\activate`
python server.py
```

NOTE: You must have both the webapp and the apiserver running in two separate terminal instances to use the app.

## Model TODOs

- [x] Get down a list of banger accounts
- [ ] Script getting the last 100 text tweets from the account in the banger accounts list
- [ ] Script filtering the tweets by a set likes/followers ratio TBD
- [ ] Script augmenting data rewriting the bangers in 10 boring ways through the OAI API
- [ ] Fine-tuning script taking as input the boring bangers and outputting the bangers

## API TODOs

- [x] Create OAI API server
- [ ] Add Custom API server with finetuned model

## WebApp TODOs

- [x] Add dark mode and set it as default
- [ ] Get BANGER OAI API prompt
- [ ] Deploy webapp

.....................................................................

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
