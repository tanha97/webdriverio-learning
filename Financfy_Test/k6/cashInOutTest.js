import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 30, // number of users doing transactions
  duration: '30s',
}

let token =''


export default function () {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }

  // Simulate cash-in
  const cashInRes = http.post(
    'http://invoice.staging.financfy.com:3052/transactions',
    JSON.stringify({
      amount: 300,
      accountId: 'df094e44-fd80-401e-8ef8-6ede97a8b76c', // Replace with real data
    }),
    headers
  )

  check(cashInRes, {
    'Cash-In success': (r) => r.status === 200,
  })
  console.log(res.status)

  // Simulate cash-out
  const cashOutRes = http.post(
    'http://invoice.staging.financfy.com:3052/transactions',
    JSON.stringify({
      amount: 50,
      accountId: 'df094e44-fd80-401e-8ef8-6ede97a8b76c',
    }),
    headers
  )

  check(cashOutRes, {
    'Cash-Out success': (r) => r.status === 200,
  })

  sleep(1)
}
