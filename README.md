# BanFeed

## Setup

Download all the dependencies with `yarn setup`

Create a .env file in packages/banfeed-server/ and create variables for:

```
PORT
TWITTER_API_KEY
TWITTER_API_SECRET
TWITTER_API_BASE_ENDPOINT
TWITTER_ACCESS_TOKEN
```

Obviously you will need your own twitter application for the key related variables.

## Scripts

`yarn dev` runs `yarn dev` in all the packages in parallel

`yarn dev:server` runs `yarn dev` for the server

`yarn dev:client` runs `yarn dev` for the client

`yarn dev:storybook` launches the client storybook
