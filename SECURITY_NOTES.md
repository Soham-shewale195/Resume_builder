# ResumeForge Security Notes

## Client-Side API Key Visibility
ResumeForge currently operates entirely in the browser without a backend. This architecture means that environment variables prefixed with `VITE_` (such as `VITE_GEMINI_API_KEY`) are bundled into the client-side JavaScript. 

**Risk**: The Gemini API key is visible to any user who inspects the network traffic or the source code.

## Current Mitigations & Limitations
- **Free-Tier Limits**: To prevent abuse, we have implemented a client-side daily limit (10 AI generations per user per day). This is tracked via `localStorage`. 
- **API Key Quotas**: It is highly recommended to set hard billing and usage quotas in the Google Cloud Console for the Gemini API key used in production. This prevents unexpected charges if the key is scraped and abused.

## Future Recommendations
For a completely secure, scalable solution in future versions, we recommend migrating the AI generation logic to a secure server environment. Options include:
1. **Cloudflare Workers**: Deploy a lightweight serverless worker to proxy requests to the Gemini API. The API key would be stored securely as a Cloudflare Secret.
2. **Backend Server**: Implement a small Node.js/Express backend to handle AI requests.
3. **Bring Your Own Key (BYOK)**: Remove the built-in key entirely and require users to provide their own Gemini API key in the settings to use the AI features.
