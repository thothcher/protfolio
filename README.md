# Portfolio Site

Static portfolio site with a contact form and simple interactive scripts.

## Contents

- index.html - Main landing page
- style.css - Global styles
- cursor.js - Custom cursor behavior
- totopbtn.js - Back-to-top button behavior
- mail_handler.php - Contact form handler
- thanks.html - Thank-you page
- imgs/ - Image assets

## Run locally

Option 1: Open index.html directly in a browser.

Option 2: Use a simple local server.

Python (from this folder):

    python -m http.server 8000

Then open:

    http://localhost:8000

## Contact form

The form posts to mail_handler.php. Update the recipient address in that file and ensure your hosting supports PHP mail.

## License

No license specified.
