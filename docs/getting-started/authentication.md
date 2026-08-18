---
title: "Authentication"
status: published
---

Acme uses API keys for authentication. Each key is scoped to a project and can be revoked at any time.

There are two types of keys: publishable (client-side) and secret (server-side). Never expose secret keys in frontend code.

All API requests must include the Authorization header with your API key.