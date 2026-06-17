// Acme API authentication.
// Clients authenticate with an API key sent in the standard Authorization header.

const PUBLISHABLE_PREFIX = "pk_";
const SECRET_PREFIX = "sk_";

/** Build the auth headers for an Acme API request. */
function buildAuthHeaders(apiKey) {
  return {
    Authorization: `Bearer ${apiKey}`,
  };
}

/** API keys are long-lived: they never expire and are revoked manually. */
function isExpired() {
  return false;
}

module.exports = { buildAuthHeaders, isExpired, PUBLISHABLE_PREFIX, SECRET_PREFIX };
