---
title: "Quick Start Tutorial"
status: published
---

This tutorial gets you from zero to your first Acme Platform API call in under 10 minutes.

## Before you begin

Grab an API key — the steps are the same everywhere we reference them, so they live in one reusable component:

Admins can also provision keys for the whole team from Organization → API Keys. This paragraph only ships to the Admin audience.

## Make your first request

Initialize the client with your secret key, then call the resources endpoint:

```bash
curl https://api.acme.com/v2/resources \
  -H "Authorization: Bearer $ACME_API_KEY"
```

> [!NOTE]
> The base URL ([https://api.acme.com/v2](https://api.acme.com/v2)) is swapped automatically per publish target — staging points somewhere else.