const https = require('https');
const querystring = require('querystring');

const code = process.argv[2];

if (!code) {
  console.log('\n❌ Usage: node get-refresh-token.js YOUR_AUTH_CODE\n');
  process.exit(1);
}

const params = querystring.stringify({
  code:          code,
  client_id:     '1000.KYHGH3DKV5FYEGWN07UG42AI1O2RTB',
  client_secret: 'f4980030e33ea0c45c1baccddac6caa61aea0ac924',
  redirect_uri:  'http://localhost:5173',
  grant_type:    'authorization_code',
});

const options = {
  hostname: 'accounts.zoho.in',
  path:     '/oauth/v2/token',
  method:   'POST',
  headers:  {
    'Content-Type':   'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(params),
  },
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    if (json.refresh_token) {
      console.log('\n✅ SUCCESS! Your Refresh Token:\n');
      console.log(json.refresh_token);
      console.log('\n👆 Copy this and update ZOHO_REFRESH_TOKEN in Supabase → Edge Functions → Secrets\n');
    } else {
      console.log('\n❌ Error response from Zoho:');
      console.log(JSON.stringify(json, null, 2));
      console.log('\nThe auth code may have expired. Get a fresh one and try again.\n');
    }
  });
});

req.on('error', err => console.error('Request error:', err.message));
req.write(params);
req.end();
