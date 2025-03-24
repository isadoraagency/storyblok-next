import { NextApiRequest, NextApiResponse } from 'next';

const apiKey = '989b1ba6214919b6eccc8f2cc2856421-us13';
const listId = '59ef5b529b';
const dataCenter = apiKey.split('-')[1];
const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, nonce } = req.body;

    if (!nonce || nonce !== 'your_nonce_value') {
      return res.status(400).json({ message: 'Security check failed.' });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: 'Invalid email address.' });
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'pending',
        }),
      });

      const responseBody = await response.json();

      if (response.ok || responseBody.status === 'subscribed') {
        return res.status(200).json({ message: 'Subscription successful!' });
      } else if (response.status === 400 && responseBody.detail.includes('is already a list member')) {
        return res.status(400).json({ message: 'You are already subscribed!' });
      } else {
        return res.status(400).json({ message: `Subscription failed: ${responseBody.detail || 'Unknown error'}` });
      }
    } catch (error) {
      console.error('Error subscribing to Mailchimp:', error);
      return res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
