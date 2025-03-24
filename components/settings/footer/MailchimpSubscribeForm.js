import { useState } from 'react';

const MailchimpSubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nonce = document.getElementById('mailchimp_nonce').value;

    if (!email) {
      setResponseMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setResponseMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          nonce,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage('Subscription successful!');
        setEmail('');
      } else {
        setResponseMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ia-footer-subscribe__form asdfasdf">
      <div className="ia-sub-title ia-sub-title--red">EMAIL NEWSLETTER</div>
      <div className="entry-content ia-white">
        <p>Get the Latest Inspiration &amp; Insights</p>
      </div>
      <form id="mailchimp-subscribe-form" onSubmit={handleSubmit}>
        <input type="hidden" id="mailchimp_nonce" value="53698e6a53" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <div id="subscribe-response">{responseMessage}</div>
      </form>
    </div>
  );
};

export default MailchimpSubscribeForm;
