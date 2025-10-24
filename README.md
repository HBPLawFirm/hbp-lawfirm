# HBP Law Firm — Modern Interactive Website (Dark + Gold) v2

This package contains a modern single-page website optimized for HBP Law Firm.
Files included:
- index.html
- assets/logo.svg (replaceable)
- assets/pattern.svg
- assets/favicon.svg
- assets/wa.svg
- README.md

## Hero image (red curtain)
You chose the red curtain hero image. The hero image file `assets/hero.jpg` is included.
If you want to replace it later, upload a new `hero.jpg` into `assets/`.

## Deploy
1. Unzip and upload all files/folders to your GitHub repo root.
2. Go to Settings → Pages and set Source: Branch `main`, Folder `/ (root)`.
3. Wait 1–2 minutes and open: `https://<your-username>.github.io/hbp-lawfirm/`

## EmailJS integration (direct form sending)
1. Create an account at https://www.emailjs.com/ (free plan available).
2. Create an Email Service and Email Template. Note your **User ID**, **Service ID**, and **Template ID**.
3. Open `index.html`, find the block near `// EmailJS integration` and replace the placeholders:
   - EMAILJS_USER_ID -> your user id
   - EMAILJS_SERVICE_ID -> service id
   - EMAILJS_TEMPLATE_ID -> template id
4. Commit changes and the form will send without leaving the page.

## Replace logo
Upload `logo.svg` or `logo.png` to `assets/` (same name). The site will use it automatically.

## Change WhatsApp number
Edit the `href` on the `.wa-floating` element in `index.html` to your preferred WA link (https://wa.me/62...).
