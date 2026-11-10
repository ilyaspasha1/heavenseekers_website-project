# HeavenSeekers website

A responsive, static travel-agency website for HeavenSeekers. It includes destination cards, sample tour packages, an inclusions section, and a booking inquiry form that opens WhatsApp with the customer's details.

## Before publishing — important edits

1. Open `script.js` and replace `923001234567` with your real WhatsApp number in international format (digits only; Pakistan example: `92` + number without the leading `0`).
2. Update the Instagram handle, email address and brand details in `index.html`.
3. Confirm every package price, duration, route and inclusion before accepting bookings. Current prices are illustrative estimates only.
4. Replace the sample stock photos with your own licensed travel photos when available. The current photos load from Unsplash and require an internet connection.
5. Add your actual business registration, terms, cancellation policy, safety information and payment instructions before taking deposits.

## Preview locally

Open `index.html` in a browser. For a local development server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy free with Netlify

1. Extract the ZIP file.
2. Visit https://app.netlify.com/drop
3. Drag the extracted `heavenseekers_website` folder onto the page.
4. Netlify will publish the static site and provide a public URL.
5. You can connect a custom domain in Netlify's site settings.

Alternative: create a GitHub repository, upload these files, then import the repository into https://vercel.com/ or enable GitHub Pages.

## Notes

- This is a static website; it does not yet have a database, customer login, online payment, admin dashboard or automatic booking confirmation.
- The inquiry form sends the information to your WhatsApp; it does not reserve a seat or collect payment.
- The contact details and phone number in the starter site are placeholders and must be changed.
