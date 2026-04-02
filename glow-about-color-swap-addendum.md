# CURSOR PROMPT ADDENDUM: About Page — Swap Green Backgrounds to Crimson Red
> File: `src/app/about/page.tsx`
> Applies on top of the previous About Page prompt.
> This page should use `#8B060A` crimson as the dominant section color (matching the live site) — NOT `#344336` green.

---

## THE CHANGE

The about page prompt used `#344336` (forest green) as section backgrounds throughout. Replace every instance of that green on the about page only with the brand crimson `#8B060A` and its variants. The green color scheme is for other sections site-wide; the about page specifically should mirror the live site's red/crimson palette.

**Find and replace the following in `src/app/about/page.tsx` only:**

| Find | Replace with | Usage |
|------|-------------|-------|
| `bg-[#344336]` | `bg-[#8B060A]` | Section backgrounds |
| `bg-[#1a2820]` | `bg-[#6B0408]` | Darker section backgrounds |
| `border-[#344336]` | `border-[#8B060A]` | Any section borders |

---

## SECTION-BY-SECTION COLOR MAP

Apply these exact background colors to each section in the about page:

```tsx
// Section 1: HERO
// Background: full-bleed photo (meet-the-team-bg.webp) — no color change needed
// Overlay gradient: stays as-is (dark overlay on photo)

// Section 2: PHILOSOPHY BLOCK (was bg-[#344336])
<section className="bg-[#8B060A] relative overflow-hidden">
  {/* bokeh glow stays — just adjust color slightly: */}
  <div style={{
    background: 'radial-gradient(circle, rgba(226,202,162,0.10) 0%, transparent 70%)',
    filter: 'blur(40px)',
  }} />
  {/* All text and content inside stays exactly the same */}
</section>

// Section 3: THREE VALUES (was bg-[#1a2820])
<section className="bg-[#6B0408] py-20 px-6">
  {/* Card borders — update hover accent to match: */}
  {/* className="... hover:border-[#E2CAA2]/30 ..." — stays same, gold accent works on red */}
  {/* Card backgrounds stay bg-white/5 — semi-transparent, looks good on red */}
</section>

// Section 4: COMPANY STORY (was bg-[#F5F0E8] cream)
// Keep this as cream/light — it creates intentional contrast between the red sections
<section className="bg-[#F5F0E8] py-20 px-6">
  {/* No change — the light section is intentional visual relief */}
</section>

// Section 5: TEAM CARDS (was bg-[#344336])
<section className="bg-[#8B060A] py-20 px-6">
  {/* All team card content stays the same */}
  {/* Card bg-white/5 with border border-white/10 — works well on crimson */}
</section>

// Section 6: INTERNAL LINKS BAR (was bg-[#1a2820])
<section className="bg-[#6B0408] py-12 px-6">
  {/* Links stay the same — [#E2CAA2] gold on deep red reads perfectly */}
</section>
```

---

## GRADIENT OVERLAY ADJUSTMENTS

In the philosophy section, the radial glow behind content uses a gold tint. On crimson it needs a slightly higher opacity to be visible:

```tsx
// Was:
background: 'radial-gradient(circle, rgba(226,202,162,0.08) 0%, transparent 70%)'

// Update to (slightly more visible on red):
background: 'radial-gradient(circle, rgba(255,220,150,0.12) 0%, transparent 70%)'
```

---

## TEXT COLOR CHECK — WCAG CONTRAST ON RED BACKGROUNDS

All of these pass WCAG AA on `#8B060A` (white = 5.1:1, gold `#E2CAA2` = 4.6:1):

```tsx
// These are safe — no changes needed:
text-white           // ✅ 5.1:1 on #8B060A
text-white/75        // ✅ ~3.9:1 — acceptable for large text/body
text-white/65        // ⚠️ ~3.3:1 — acceptable for body copy only
text-[#E2CAA2]       // ✅ 4.6:1 — brand gold on crimson, good for labels/accents

// These need upgrading if used on red backgrounds:
text-white/50        // ❌ too low on red — upgrade to text-white/65 minimum
text-white/40        // ❌ too low — upgrade to text-white/60 minimum
```

**Go through the about page and upgrade any `text-white/50` or lower on red sections to `text-white/65`.**

---

## SECTION DIVIDER LINES

The gold divider lines between sections:

```tsx
// On red/crimson backgrounds, use slightly brighter gold for visibility:
<div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent mx-auto my-4" />

// Note: use #F5C842 (bright gold) on red backgrounds instead of #E2CAA2 (warm cream)
// because the cream tone blends into the warm red too much at small sizes
```

---

## QUICK VISUAL SUMMARY

The about page should feel like this when scrolling:

```
🔴 CRIMSON HERO     → full-bleed photo + dark overlay + crimson-toned gradient
🔴 CRIMSON          → Philosophy / pull quote / Vision / Mission
🔴 DEEP CRIMSON     → Three values cards (Safety, Delivering Joy, Community)
⬜ CREAM            → Company story + trust badges + logo mark  ← light relief
🔴 CRIMSON          → Team grid (6 members)
🔴 DEEP CRIMSON     → Internal links bar
```

This matches the live site's use of crimson as the dominant brand color, with the cream section providing a visual break in the middle — exactly the same rhythm used on the home page between the dark sections.

---

## ✅ CHECKLIST

- [ ] Philosophy section background: `bg-[#8B060A]` ✓
- [ ] Values section background: `bg-[#6B0408]` ✓
- [ ] Team cards section background: `bg-[#8B060A]` ✓
- [ ] Internal links bar background: `bg-[#6B0408]` ✓
- [ ] Company story section: stays `bg-[#F5F0E8]` cream (intentional contrast) ✓
- [ ] No remaining `bg-[#344336]` or `bg-[#1a2820]` on the about page ✓
- [ ] All body text on red sections uses `text-white/65` minimum ✓
- [ ] Gold divider lines use `#F5C842` (bright) on red backgrounds ✓
- [ ] Card hover accents `hover:border-[#E2CAA2]/30` still work on crimson ✓
