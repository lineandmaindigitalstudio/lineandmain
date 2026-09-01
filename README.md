# Line & Main Digital Studio — Version 10

V10 keeps the broader digital-studio positioning and replaces the V4 About-section
systems diagram with a cleaner card-based workflow.

## V10 changes
- Rebuilt the About visual as Capture → Organize → Automate → Follow through.
- Removed the abstract curved-line systems graphic.
- Replaced “Start a conversation”:
  - navigation: “Get started”
  - hero/About CTA: “Tell us what needs fixing”
- Keeps the actual transparent LINE & MAIN logo.
- Includes the full deployable static-site file set.

## Upload to GitHub
Upload the files inside this folder to the root of the `lineandmain` repository,
replacing files with the same names. Do not upload the ZIP itself.

Cloudflare should automatically build and deploy after the GitHub commit.

## Before public launch
The email `hello@lineandmain.ca` is still a placeholder and should be replaced
with the final Line & Main email.

V10 replaces the About-section left-side workflow cards with a distinct systems console visual.

V10 is a visual polish pass: cleaner About hierarchy, reduced microcopy, improved spacing, and removal of the public placeholder email note.

V10 aligns all service-card numbers, titles, and descriptions to consistent horizontal levels.

V10 adds the approved hero/copy changes and a branded inquiry form. The form currently composes an email to hello@lineandmain.ca rather than using a third-party processor.

V10 Forminit setup:
1. Create a new form in Forminit.
2. Set the form authentication mode to Public for client-side submission.
3. Copy the Form ID.
4. Open script.js and replace PASTE_YOUR_FORMINIT_FORM_ID_HERE with that Form ID.
5. In Forminit, turn on email notifications for new submissions.
The website form then submits directly on-page and shows a success/error message without opening the visitor's email app.
