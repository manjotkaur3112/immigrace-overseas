# Immigrace Overseas Website

🌐 **Live Website:** [https://immigraceoverseas.com](https://immigraceoverseas.com)

## About the Project

The **Immigrace Overseas Website** is the official business website for Immigrace Overseas. It provides visitors with information about the business and a convenient way to contact the team for enquiries.

The website is built using HTML, CSS, and JavaScript and is hosted on GitHub Pages with a custom domain.

## Features

- Responsive website design for desktop and mobile devices
- Business information and service enquiry sections
- Contact form for visitor enquiries
- Contact options such as phone and WhatsApp, where configured
- Custom domain integration
- HTTPS-secured website
- Contact-form email notification workflow using Cloudflare Workers and Resend, when configured

## Technologies Used

- **HTML5** — Website structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Interactive functionality and form handling
- **GitHub Pages** — Website hosting and deployment
- **Cloudflare Workers** — Contact-form backend endpoint
- **Resend** — Email delivery for website enquiries

## Live Demo

Visit the deployed website:

👉 https://immigraceoverseas.com

## Repository Structure

```text
immigrace-overseas/
├── index.html
├── CSS files
├── JavaScript files
├── Images and other assets
└── README.md
```

*The exact file and folder structure may vary depending on the current repository contents.*

## Run the Website Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the Live Server extension.
4. Test the website navigation, responsive layout, and contact form.

## Deployment

The website is deployed using GitHub Pages.

To publish updates:

1. Update the required HTML, CSS, JavaScript, or asset files.
2. Test your changes locally.
3. Commit and push the changes to the configured GitHub Pages branch.
4. Wait for GitHub Pages to finish deployment.
5. Visit the live website to verify the changes.

**Live URL:** https://immigraceoverseas.com

## Contact Form and Email Notifications

The website's contact form is configured to send enquiries to:

**Email:** info@immigraceoverseas.com

The email workflow uses a Cloudflare Worker and Resend when configured.

For security, API keys and other secrets must be stored in Cloudflare's secret settings and must never be committed to this public repository.

After making changes to the contact form or email configuration, submit a test enquiry and check the recipient inbox and spam folder.

## Domain and Security

- **Custom domain:** immigraceoverseas.com
- **Hosting:** GitHub Pages
- **HTTPS:** Enabled for secure website access
- **Domain verification:** Successfully completed through GitHub

Avoid changing DNS records without checking whether they are required for website hosting, domain verification, or business email.

## Project Status

The website is deployed and available online. Visitors can access it using the live website URL above.

## License

No open-source license is currently specified. Unless a license is added, permission to reuse or redistribute this project's code should not be assumed.

---

**Thank you for visiting the Immigrace Overseas project!**
