# Rooted — A Guided Study of Scripture

A six-week, 18-session guided study of the Gospel of Mark. Plain HTML, CSS and
JavaScript: no account, no server, no build step, no outside services.

## Put it on GitHub Pages

1. Create a new repository (for example `rooted`) and upload everything in this folder.
2. In the repository, open Settings, then Pages. Under "Build and deployment", choose
   "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. After a minute the app is live at `https://YOUR-USERNAME.github.io/rooted/`.

## Add it to your phone's home screen

- iPhone (Safari): open the address, tap Share, then "Add to Home Screen".
- Android (Chrome): open the address, tap the menu, then "Add to Home screen" or "Install app".

Once it has been opened online one time, it also opens without a connection.
(The link to the Bible passage still needs a connection; your printed Bible does not.)

## Files

| File | What it is |
| --- | --- |
| `content.js` | The whole study: every reading, explanation, question and prayer. Edit this to change wording. |
| `app.js` | Displays the study. You should not need to touch it. |
| `styles.css` | Colors, type and layout. The palette is the short list at the top. |
| `index.html` | The page that loads the three files above. |
| `manifest.webmanifest`, `sw.js`, `icons/` | Home-screen install and offline support. |
| `fonts/` | Newsreader and Source Sans 3 (SIL Open Font License). |

## Editing the study

Open `content.js` in any text editor. The notes at the top explain the format.
Each session is one block with five parts: `read`, `understand`, `remember`,
`respond`, `prayer`.

- To change the Bible translation the reading link opens, change `translation: "NKJV"`
  near the top to another BibleGateway version code (ESV, NIV, CSB, NLT, KJV ...).
- Words inside `[[double brackets]]` are quotations from the World English Bible
  (public domain) and are shown in quotation marks. Every one was checked against the
  WEB text of Mark. If you add your own, keep them to the WEB or another public-domain
  translation.
- Words inside `*asterisks*` are shown in italics.

## What the app remembers

Only two things, and only in the browser on your own device: where you are in the
study, and any one-line notes you choose to keep. Nothing is sent anywhere. If the
browser blocks storage (private browsing, for example), the study still works; it
simply starts from the list of sessions each time, and the note field is hidden.
