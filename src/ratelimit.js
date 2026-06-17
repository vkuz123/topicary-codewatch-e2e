// Acme API rate limiting.
// The default limit was lowered from 100 to 60 requests per minute per API key.
const DEFAULT_RATE_LIMIT_PER_MINUTE = 60; // was 100
const BURST_ALLOWANCE = 10;
function isRateLimited(requestsThisMinute) {
  return requestsThisMinute > DEFAULT_RATE_LIMIT_PER_MINUTE + BURST_ALLOWANCE;
}
module.exports = { DEFAULT_RATE_LIMIT_PER_MINUTE, BURST_ALLOWANCE, isRateLimited };
