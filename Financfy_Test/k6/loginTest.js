import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
  vus: 50, // 50 virtual users
  duration: '30s', // run for 30 seconds
};

export default function () {
  const url = 'http://invoice.staging.financfy.com:3052/auth/login?callbackUrl=%2Freports%2Ftransactions'; // Replace this
  const payload = JSON.stringify({
    mobileNumber: '01500-000000',     // Use test credentials
    password: 'A12345678a',
  });

  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Login successful': (r) => r.status === 200,
  });

  sleep(1); // simulate user wait
}
