# Adding a case study (and its Japanese translation)

Content is data, not JSX. Each case study is a pair of locale files rendered by a
shared block renderer, so adding a new one — or translating an existing one — is
mechanical.

## Layout

```
app/content/projects/<slug>/
  en.ts      # full CaseStudy object (English)
  ja.ts      # full CaseStudy object (Japanese)
  index.ts   # export const <camelSlug> = { en, ja }
```

Both locale files export the same `CaseStudy` shape (`app/content/types.ts`), so
TypeScript fails the build if a translation drifts from the source structure.
Each locale owns its own `blocks` array, which means a locale can later swap in a
localised screenshot without restructuring anything.

## Steps for a new case study

1. `mkdir app/content/projects/<slug>` and write `en.ts`, `ja.ts`, `index.ts`.
2. Register it in `app/content/projects/index.ts` — the import plus one entry in
   the `projects` array. That array is also the showcase order on the home page.
3. Create the two route files. Both are ~18 lines and identical apart from the
   locale, so copy an existing one:
   - `app/(en)/projects/<slug>/page.tsx`
   - `app/(ja)/ja/projects/<slug>/page.tsx`

Nothing else changes: the home-page card, SEO metadata, OpenGraph tags, canonical
URL and `hreflang` alternates are all derived from the content file.

## Translating an existing case study

Copy `en.ts` to `ja.ts` and translate the string values, following the
English-label convention below.

Leave these alone: `src`, `width`, `height`, URLs inside `[label](href)`,
`stack` entries (tool names), and brand names.

## What stays English on the Japanese site

Short labels keep their English wording verbatim — their meaning and intent
drift when translated, and they read as brand voice rather than information.
Running prose is translated.

| Stays English | Gets translated |
| --- | --- |
| `card.title`, `card.skills` | `meta.h1Title` |
| `meta.articleTitle`, `meta.role`, `meta.themes`, `meta.timeline` | `meta.heroImageAlt`, `meta.introduction` |
| Meta panel labels (Client / Year / Role / Stack / Themes / Timeline) | `seo.title`, `seo.description` |
| Nav, footer CTAs, section headings, badges, job titles, hero taglines | Block `p` / `ul` / `ol` copy, `image.alt`, `aside` text |

Block headings (`h2`/`h3`/`h4`) inside the article body **are** translated —
they are part of the running document, not chrome.

When in doubt: if it sits in the page furniture, keep it English; if a reader
reads it as a sentence, translate it.

## Block types

See `app/content/types.ts`. Available: `h2`, `h3`, `h4`, `p` (optional
`variant: "subheading"`), `ul`, `ol` (items may nest via
`{ text, items }`), `image`, `video`, `embed`, `aside`.

Inline markup inside any text field: `**bold**`, `*italic*`,
`[label](https://…)`. External links get `target="_blank"` automatically.

## Shared UI strings

Navigation, footer, buttons, the about page and the home page live in
`app/i18n/dictionaries/{en,ja}.ts`, typed by `dictionaries/types.ts`. Adding a key
to the type forces both locales to define it.

## Routing

`app/(en)/**` serves `/…` and `app/(ja)/**` serves `/ja/…`. They are separate root
layouts so each renders its own `<html lang>`. Locale-aware links go through
`localizeHref(locale, path)`; the switcher uses `switchLocalePath` to stay on the
same page across locales.
