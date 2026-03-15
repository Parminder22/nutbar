# 🥜 THE NUTBAR — Website

> *Not your regular bar.*

Premium D2C product website for THE NUTBAR — a nut-based protein bar brand.
Built with Next.js 14, TailwindCSS, and Framer Motion.

---

## 🚀 Run Locally

```bash
cd the-nutbar
npm install
cp .env.example .env.local   # fill in your Google Script URL
npm run dev                  # → http://localhost:3000
```

---

## 📋 Google Sheets Contact Form Setup

Contact form submissions are saved to a Google Sheet — **no email credentials needed**.

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) → create a new sheet
2. Name it: **THE NUTBAR Contacts**
3. Add headers in Row 1:
   ```
   A: Timestamp | B: Name | C: Email | D: Phone | E: Message
   ```
4. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
   ```

### Step 2 — Create the Apps Script

1. In your Sheet: **Extensions → Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (floppy disk icon)

### Step 3 — Deploy the Script

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Type" → select **Web app**
3. Set:
   - Description: `NUTBAR Contact Form`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Authorize the app when prompted (click "Allow")
6. **Copy the Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

### Step 4 — Add to Environment

Paste the URL in `.env.local`:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID_HERE/exec
```

For Vercel: Dashboard → Project → Settings → Environment Variables → add `GOOGLE_SCRIPT_URL`

> ✅ Every form submission now appears as a new row in your Google Sheet instantly.

---

## 🌐 Deploy to Vercel

### Option A — GitHub (Recommended)

```bash
git init
git add .
git commit -m "Initial commit — THE NUTBAR"
# Create repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/the-nutbar.git
git push -u origin main
```

Then: [vercel.com](https://vercel.com) → New Project → Import repo → Add `GOOGLE_SCRIPT_URL` env var → Deploy

### Option B — Vercel CLI

```bash
npx vercel
# Add GOOGLE_SCRIPT_URL when prompted for env vars
```

---

## 📁 Project Structure

```
the-nutbar/
├── app/
│   ├── layout.tsx              # Fonts, SEO metadata
│   ├── globals.css             # Brand palette, animations
│   ├── page.tsx                # Home page
│   ├── our-story/page.tsx      # Our Story (Chapter 1 & 2)
│   └── api/contact/route.ts   # → Google Sheets API
├── components/
│   ├── Navbar.tsx              # Sticky nav, mobile hamburger
│   ├── Hero.tsx                # Full-screen, real product photo
│   ├── WhyNutbar.tsx           # Benefits + photo strip
│   ├── Ingredients.tsx         # 3D flip cards
│   ├── ProductShowcase.tsx     # Bar + animated macros
│   ├── Performance.tsx         # Gym/energy/recovery
│   ├── Taste.tsx               # Flavor + real photos
│   ├── Testimonials.tsx        # Review slider
│   ├── InstagramGallery.tsx    # Real product photos → IG
│   ├── Contact.tsx             # Form → Google Sheets
│   ├── Footer.tsx              # Logo, links, contacts
│   └── LoadingScreen.tsx       # Animated intro
├── public/
│   ├── logo.png                # Brand logo
│   ├── nut1.jpg                # Seed nut bars
│   ├── nut2.jpg                # Chocolate drizzle bars
│   ├── nut3.jpg                # Stacked bars
│   ├── bar-product.png         # Packaged product
│   └── ingredients-spread.png  # Ingredients flat lay
├── tailwind.config.ts
├── next.config.js
└── .env.example
```

---

## 🎨 Brand Palette

| Token | Hex | Use |
|---|---|---|
| `choco-dark` | `#0D0806` | Page background |
| `choco-mid` | `#1A0E08` | Section backgrounds |
| `caramel` | `#C8833A` | Primary accent |
| `caramel-gold` | `#E8B86D` | Highlights |
| `nutty-cream` | `#FAF3E8` | Body text |

---

## 📞 Contact

**Aman Sakhuja** · [+91 9873904155](tel:9873904155) · [amansakhuja2011@gmail.com](mailto:amansakhuja2011@gmail.com)
