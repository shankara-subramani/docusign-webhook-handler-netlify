# Netlify Function - Docusign Webhook

If you want your own copy to play around with, the quickest way to get it up
and running is clicking the Deploy to Netlify button below. It will clone
this repository into your own account, and deploy the site to Netlify.

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shankariyerr/docusign-webhook-handler-netlify)

## Setup 🛠

To run the examples locally, here’s what you’ll need:

**System Requirements:**

* [git](https://git-scm.com)
* [NodeJS](nodejs.org) 8 or greater
* [yarn](yarnpkg.com)

`cd` into your local copy of the repository and run `yarn` or `npm install`

```
cd docusign-webhook-netlify-lambda
yarn
```

## Running 🔥

```
yarn start
```

This will start the netlify-lambda server on http://localhost:8080/.netlify/functions/docusign_webhook.

[netlify-lambda](https://github.com/netlify/netlify-lambda) isn’t required to deploy Lambda functions to Netlify, but it offers some handy features out of the box that make it quicker to get started, like the local dev server and nice defaults for transpiling and bundling functions in production.

The client server is configured to proxy `/.netlify` requests to the Lambda server (see [webpack.client.js](webpack.client.js)). This is the same behavior the site has when it’s deployed to Netlify.

## Tutorials 📚

- [Netlify Functions (Build and Deploy)](https://www.youtube.com/watch?v=_1qXQM3Mt4Q)
- [DocuSign Developer: Webhooks with API Demo](https://www.youtube.com/watch?v=wTDorhnAjbM)
- [Adding Connect Webhooks to your Application](https://www.docusign.com/blog/dsdev-adding-webhooks-application/)
- [How to use Netlify Lambda Functions and add dynamic processing to JAMstack sites](https://flaviocopes.com/netlify-functions/)
