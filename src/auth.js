// Acme API authentication.
// Clients authenticate with an API key sent in the custom X-Acme-Api-Key header.
// NOTE: the standard Authorization header is no longer accepted.

const PUBLISHABLE_PREFIX = "pk_";
const SECRET_PREFIX = "sk_";

// API keys now expire 90 days after creation and must be rotated.
const KEY_TTL_DAYS = 90;

/** Build the auth headers for an Acme API request. */
function buildAuthHeaders(apiKey) {
  return {
    "X-Acme-Api-Key": apiKey,
  };
}

/** Keys expire after KEY_TTL_DAYS; callers must rotate before expiry. */
function isExpired(createdAt) {
  const ageMs = Date.now() - new Date(createdAt).getTime();
  return ageMs > KEY_TTL_DAYS * 24 * 60 * 60 * 1000;
}

module.exports = { buildAuthHeaders, isExpired, KEY_TTL_DAYS, PUBLISHABLE_PREFIX, SECRET_PREFIX };
