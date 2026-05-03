# Shopify ↔ GitHub Connection Guide — The KC Theory

This guide explains how to connect this GitHub repository to your Shopify store so that every push to `main` automatically syncs to your theme.

---

## Step 1: Connect GitHub to Shopify

1. Log in to your Shopify Admin at `https://admin.shopify.com/store/3ag4nq-rj`
2. Go to **Online Store → Themes**
3. Click **Add theme → Connect from GitHub**
4. Authorise Shopify to access your GitHub account when prompted
5. Select the repository: `krisco12/kc-theory-theme`
6. Select the branch: `main`
7. Click **Connect**

Shopify will create a new theme from the repository. It will appear in your theme list as an **unpublished** theme.

---

## Step 2: Preview Before Publishing

1. In **Online Store → Themes**, find the newly connected theme
2. Click **Preview** to review the store before going live
3. Use the **Customise** button to access the theme editor

---

## Step 3: Add the Hero Image

1. In the theme editor, click on the **KC Cinematic Hero** section on the homepage
2. Under **Hero Background Image**, click **Select image**
3. Upload `kc_hero_theory_final.png` (the "Lone Adventurer" mountain image)
4. Click **Save**

---

## Step 4: Publish the Theme

Once you are happy with the preview:

1. Go back to **Online Store → Themes**
2. Find the GitHub-connected theme
3. Click **Publish**
4. Confirm the publish

---

## Ongoing Deployment Workflow

Any time you (or Manus) push changes to the `main` branch of `krisco12/kc-theory-theme`, Shopify will automatically sync the updated files to the connected theme. You can then preview and publish from the Themes page.

---

## Key Custom Sections (add these to your homepage via the theme editor)

| Section Name | Purpose |
|---|---|
| **KC Cinematic Hero** | Full-viewport hero with parallax and CTAs |
| **KC Quiz CTA** | Lead magnet — drives users to the focus assessment |
| **KC Founder Story** | Authentic brand narrative and trust builder |
| **Featured Collection** | Product grid (use Dawn's built-in section) |

---

## App Integrations to Install Next

| App | Purpose | Install |
|---|---|---|
| **Klaviyo** | Email marketing + quiz segmentation | Shopify App Store |
| **Judge.me** | Product reviews | Shopify App Store |
| **Smile.io** | Loyalty program | Shopify App Store |
| **Printful** | Print-on-demand (planner, merch) | Shopify App Store |
| **Spocket** | Dropship physical products | Shopify App Store |

---

*For support, contact your Manus project or refer to the PROJECT_BRIEF.md in this repository.*
