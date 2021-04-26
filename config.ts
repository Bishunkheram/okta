const oktaAuthConfig = {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/login/callback',
  features: {
    idpDiscovery: true
  }
};

const oktaSignInConfig = {
  baseUrl: 'https://{yourOktaDomain}',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/login/callback',
  features: {
    idpDiscovery: true
  }
};

export { oktaAuthConfig, oktaSignInConfig };