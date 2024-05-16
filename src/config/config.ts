const env = import.meta.env;

export const config = {
  google: {
    clientId: env.VITE_APP_GOOGLE_CLIENT_ID,
  },
  baseUrl: env.VITE_APP_API_BASE_URL,
};
