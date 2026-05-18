# Portfolio Redesign Design

## Goal

Rebuild Sebastian Lopez's personal portfolio as a senior, serious, futuristic security dossier. The new site should make the visitor understand quickly that Sebastian is a Product Security Engineer with real ownership across product security, security operations, incident response, metrics, and emerging-risk management.

The current portfolio's cyberpunk/neon style will be replaced with a controlled security-native visual system: dark, brutalist, readable, technical, and premium. The site must feel credible to recruiters, security leaders, fintech teams, and technical peers.

## Positioning

Primary title:

> Product Security Engineer

Primary hero statement:

> I help companies protect software, POS devices, and edge environments through internal offensive testing, EDR-led incident response, and emerging vulnerability risk management.

Supporting statement:

> I build repeatable security testing processes, find vulnerabilities in local systems and payment devices, own CrowdStrike as both EDR and incident-response platform, and turn dashboards, benchmarks, and postmortems into security decisions.

## Visual Direction

The selected direction is a futuristic executive security dossier.

Key traits:

- Dark tactical background with a subtle technical grid.
- Brutalist compartmentalized layout with visible structural lines.
- High-impact typography for identity and role.
- Small technical metadata labels for navigation and context.
- Red as the primary alert/accent color.
- Controlled mint/green only for security status or live telemetry.
- No matrix rain, heavy neon glow, generic hacker cosplay, or excessive animation.
- Clear reading hierarchy on mobile and desktop.

The site should feel like a polished security profile system: part executive dossier, part product-security telemetry, but still easy to read.

## Information Architecture

Public routes:

- `/en`: canonical/default English version.
- `/es`: Spanish version.
- Language switch visible in the main interface.
- Initial redirect can use browser language, but the user-selected language should persist.

Primary sections:

- Hero / identity: Sebastian Lopez, Product Security Engineer, core statement.
- Security pillars:
  - Product Security
  - Security Operations
  - Metrics Engineering
  - Risk Intelligence
- Experience:
  - Mendel
  - Netrix
  - Additional roles if relevant.
- Evidence / case files:
  - POS and payment-device testing.
  - Internal pentesting process for local systems.
  - CrowdStrike ownership as EDR and incident-response platform.
  - Incident and postmortem work.
  - Emerging Linux vulnerability management.
- Stack / tools:
  - CrowdStrike
  - SIEM/SOAR platforms
  - Cloud/security tooling
  - Dashboards and benchmarking tools
- Certifications and education.
- Contact.

## Content Strategy

English is the source of truth. Spanish is a maintained translation, not mixed into English pages.

The content should be direct, senior, and evidence-based:

- Prefer ownership and outcomes over generic skill claims.
- Avoid percentage-based skill bars.
- Avoid vague claims such as "cybersecurity expert" unless backed by concrete work.
- Present sensitive work in public-safe terms while still naming relevant technologies like POS, CrowdStrike, edge computing, incidents, and postmortems.

## Backend Scope

Use a real backend while keeping maintenance low.

Recommended stack:

- Astro + TypeScript for the public site.
- Supabase Postgres for content, messages, and analytics.
- Supabase Auth for private admin access.
- Supabase Storage only if case-file assets or documents are needed.
- Supabase Edge Functions only if contact handling or rate limiting requires server logic beyond the client.

Core backend entities:

- `profile`: headline, hero copy, summary, contact metadata.
- `experience`: company, role, dates, location, highlights, tools.
- `case_files`: public evidence items and writeups.
- `certifications`: cert name, issuer, date, credential URL if available.
- `messages`: contact form submissions.
- `analytics_events`: private page and interaction events.

## Admin Scope

Build a private admin area for maintaining the site without editing code.

Initial admin capabilities:

- Login with Supabase Auth.
- Edit English content for profile, experience, case files, certifications, and contact metadata.
- View contact messages.
- View private analytics summaries.

Spanish can initially be stored as static translation files or generated from curated source content. Full bilingual editing can be added later if maintaining Spanish in the admin becomes necessary.

## Contact And Analytics

The contact form should be real, not simulated.

Contact requirements:

- Store submissions in Supabase.
- Include name, email, message, source page, language, created timestamp.
- Add basic spam/rate-limit protection.
- Provide clear success and failure states.

Analytics requirements:

- Private-only, lightweight event tracking.
- Track page views, language switch, contact clicks, case-file views, and form submissions.
- Do not add third-party analytics unless explicitly chosen later.

## Accessibility And Performance

Requirements:

- Semantic HTML.
- Keyboard-accessible navigation and language switch.
- High contrast text.
- Reduced-motion support.
- No animation required to understand content.
- Fast static rendering for public pages.
- No heavy canvas effects.
- Mobile-first layout with stable typography and no overlapping text.

## Migration Plan

The current static HTML/CSS/JS implementation will be replaced rather than incrementally polished.

Keep only reusable factual content:

- Name and contact links.
- Experience history.
- Certifications and education.
- Accurate technology/tool references.

Remove:

- Matrix rain.
- Particle systems.
- Glitch effects.
- Skill percentages.
- Simulated contact form.
- Duplicate Font Awesome loading.
- Multiple legacy index files as active site surfaces.

## Open Content Items

The following content still needs to be refined with Sebastian:

- Full English experience entries for Mendel and Netrix.
- Exact list of certifications.
- Which case files can be public and how detailed they can be.
- Preferred contact methods.
- Links to LinkedIn, GitHub, labs, writeups, or other proof.
- Whether to include downloadable resume/CV.

## Approval

Sebastian approved the direction:

- Visual style: futuristic executive security dossier.
- Role positioning: Product Security Engineer.
- Stack direction: Astro + Supabase.
- Backend scope: public site, private admin, database-backed content, contact, and private analytics.
- Language strategy: English source content with EN/ES switch.
