# Arian Kanani - Modern Warrior Training Website

## Project Overview

This is a professional fitness coaching and training website for Arian Kanani, featuring a modern, warrior-themed design focused on strength training, mindset coaching, and community-based fitness programs. The site is built with React, TypeScript, and Tailwind CSS, using Vite as the build tool.

**Live Domain**: https://ariankanani.com

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Design System](#design-system)
4. [Pages & Routes](#pages--routes)
5. [Components](#components)
6. [Features & Functionality](#features--functionality)
7. [Third-Party Integrations](#third-party-integrations)
8. [SEO Implementation](#seo-implementation)
9. [Assets & Media](#assets--media)
10. [Development](#development)
11. [Build & Deployment](#build--deployment)

---

## Technology Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **React Router DOM 7.9.1** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework

### Animation & UI Libraries
- **Framer Motion 12.23.12** - Animation library for React
- **Lucide React 0.344.0** - Icon library

### Additional Libraries
- **React Helmet Async 2.0.5** - SEO meta tag management
- **@supabase/supabase-js 2.57.4** - Supabase database client (configured but not actively used in current implementation)

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

---

## Project Structure

```
project/
├── .bolt/                      # Bolt configuration
│   ├── config.json
│   └── prompt
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # NPM dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration (root)
├── tsconfig.app.json           # TypeScript app configuration
├── tsconfig.node.json          # TypeScript node configuration
├── vite.config.ts              # Vite configuration
├── public/                     # Static assets
│   ├── image.png              # Local image asset
│   └── vimeo-player.js        # Vimeo player script
└── src/                        # Source code
    ├── App.tsx                 # Root application component
    ├── main.tsx                # Application entry point
    ├── index.css               # Global styles
    ├── vite-env.d.ts           # Vite TypeScript definitions
    ├── components/             # Reusable components
    │   ├── BackToTop.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── MobileStickyCTA.tsx
    │   ├── ParallaxHero.tsx
    │   ├── SEO.tsx
    │   ├── TestimonialCard.tsx
    │   ├── TestimonialModal.tsx
    │   ├── VideoModal.tsx
    │   ├── WarriorResetForm.tsx
    │   └── WarriorResetPopup.tsx
    ├── data/                   # Data files
    │   └── testimonials.ts
    ├── pages/                  # Page components
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── Home.tsx
    │   ├── OneOnOnePage.tsx
    │   ├── Programs.tsx
    │   ├── Stories.tsx
    │   └── ThankYou.tsx
    └── utils/                  # Utility functions
        └── mailchimp.ts
```

---

## Design System

### Color Palette

The design uses a sophisticated, earthy color scheme inspired by warrior and martial arts aesthetics:

```javascript
colors: {
  cream: '#F8F5EE',        // Background color
  sandstone: '#D6C29C',    // Secondary background
  bronze: '#6F5B3E',       // Primary accent (headers, emphasis)
  shadow: '#1C1B1A',       // Dark backgrounds, text
  yellow: '#FFB703',       // Call-to-action color
  gray: {
    50: '#F7F7F7',
    100: '#E6E6E6',
    400: '#BDBDBD',
    600: '#757575',
    800: '#2E2E2E',
  }
}
```

### Typography

#### Font Families
- **Bebas (Oswald)**: `font-bebas` - Used for all headings, uppercase, bold, tracking-tighter
- **Inter**: `font-inter` - Used for body text, paragraphs

#### Font Loading
Fonts are loaded from Google Fonts via CDN in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### Typography Scale
- Headings use responsive sizing: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`
- Body text: `text-base sm:text-lg`
- Small text: `text-sm`
- Extra small: `text-xs`

### Spacing System
Uses Tailwind's default 8px spacing system:
- `p-4` = 16px padding
- `mb-6` = 24px margin-bottom
- `gap-8` = 32px gap
- Responsive spacing: `py-12 sm:py-16 lg:py-20`

### Breakpoints
Standard Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Pages & Routes

### Route Configuration (App.tsx)

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/programs" element={<Programs />} />
  <Route path="/stories" element={<Stories />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/1on1" element={<OneOnOnePage />} />
  <Route path="/ThankYou" element={<ThankYou />} />
</Routes>
```

### Page Details

#### 1. Home Page (`/`)
**File**: `src/pages/Home.tsx`

**Sections**:
- **Hero Section**: Full-screen parallax hero with headline "So you think you're fit?"
  - Background image: `https://i.imgur.com/dunHzzD.jpeg` (desktop)
  - Mobile background: `https://i.imgur.com/qITKPSp.jpeg`
  - CTAs: "Book Free Consultation" and "Become a Member"

- **Core Philosophy**: "Discipline First. Results Follow."
  - Three pillars: Brutal Simplicity, Mental Mastery, Strength Redefined

- **Evolution Path**: "Rebuild From the Ground Up"
  - Three steps: RESET, REINFORCE, RECLAIM

- **Programs Preview**:
  - The Academy (Community) - $100 USD/month
  - Private Coaching - Custom pricing

- **Success Stories**:
  - Desktop: 3-column grid (top row) + 2-column centered (bottom row)
  - Mobile: Horizontal scroll with snap
  - All 5 testimonials displayed

- **Lead Magnet CTA**: "Claim Your Free 90-Day Warrior Training Preview"
  - Uses WarriorResetForm component
  - Yellow background section with form

**SEO**:
- Default title: "Arian Kanani - So you think you're fit?"
- Schema.org Organization and WebSite structured data

#### 2. About Page (`/about`)
**File**: `src/pages/About.tsx`

**Sections**:
- **Hero**: Gradient background with title "About Arian Kanani"
- **Stats Section**:
  - 500+ Clients Transformed
  - 12 Years Experience
  - 100K+ Social Followers

- **The Man Behind the Movement**:
  - Image: `https://i.imgur.com/nuXWrN3.jpeg`
  - Biography covering Arian's journey from age 5
  - The 5 Pillars of Fitness
  - Philosophy on fitness as spiritual practice

**SEO**:
- Title: "About Arian Kanani - The Man Behind the Movement"
- Breadcrumb structured data

#### 3. Programs Page (`/programs`)
**File**: `src/pages/Programs.tsx`

**Sections**:
- **Hero**: "Programs" with gradient background
- **Choose Your Path**: Side-by-side program comparison
  - **The Academy** (Community Program):
    - Daily programming & workouts
    - Mindset & discipline training
    - Community support & accountability
    - Live Q&A sessions
    - Movement library access
    - $100 USD/month
    - CTA: Skool community link

  - **Private Coaching** (Elite Mentorship):
    - 1-on-1 personalized programming
    - Direct access to Arian
    - Weekly check-ins & adjustments
    - Mindset & life coaching
    - Priority support
    - Custom nutrition planning
    - Custom pricing
    - CTA: Calendly booking link

- **Lead Magnet CTA**: Free 90-Day Warrior Training Preview

**SEO**:
- Title: "Programs - Sensei Academy Community & Private Coaching"
- Breadcrumb structured data

#### 4. Stories Page (`/stories`)
**File**: `src/pages/Stories.tsx`

**Sections**:
- **Hero**: "Transformation Stories" with subtitle
- **Real People, Real Results**: All testimonials displayed
  - Mobile: Horizontal scroll cards
  - Tablet: 2-column grid
  - Desktop: Full detailed layout with side-by-side images

- **CTA**: Free 90-Day Warrior Training Preview

**Layout Variations**:
- Mobile (`< 768px`): Horizontal scroll with `TestimonialCard` variant="homepage"
- Tablet (`768px - 1024px`): 2-column grid with `TestimonialCard` variant="homepage"
- Desktop (`>= 1024px`): Full-width cards with `TestimonialCard` variant="stories"

**SEO**:
- Title: "Transformation Stories - They Thought They Were Fit Too"
- Breadcrumb structured data

#### 5. Contact Page (`/contact`)
**File**: `src/pages/Contact.tsx`

**Sections**:
- **Hero**: "Contact" with subtitle about transformation journey
- **Get Started Today**: Two quick action cards
  - Become a Member (Skool link)
  - Book Consultation (Calendly link)

- **See What Others Have to Say**:
  - All 5 testimonials displayed
  - Same layout as Home page (3+2 grid on desktop, horizontal scroll on mobile)

**SEO**:
- Title: "Contact Arian Kanani - Get in Touch"
- Breadcrumb structured data

#### 6. 1-on-1 Coaching Page (`/1on1`)
**File**: `src/pages/OneOnOnePage.tsx`

**Sections**:
- **VSL Hero**: Video Sales Letter section
  - Vimeo video embed: `https://player.vimeo.com/video/1122021359`
  - Play button overlay with logo
  - "Book Your Free Consultation" CTA below video
  - Social proof stats: 200+ clients, 15+ years, 100K+ followers

- **Success Stories**:
  - First 3 testimonials always visible
  - "Show More" button reveals remaining 2
  - "View All Success Stories" link to `/stories`

- **From Plateau to Progress**: Pain points and solution
  - Three pain point checkmarks
  - Tags: Discipline-driven, Individually-crafted, Built for warriors

- **The Warrior's Path**: 4-step process
  1. Initiation (assessment)
  2. Forging the Plan (customization)
  3. Battle Drills (coaching sessions)
  4. Mastery in Motion (adaptation)

- **The Arsenal**: 6 key features in 2-column grid

- **Who Thrives Here**: Two-column comparison
  - For Warriors Ready to Rise (green theme)
  - Not for Pretenders (red theme)

- **Why This, Not That**: Comparison table
  - Traditional Training vs Online Programs vs Arian's Program
  - Desktop: Full table
  - Mobile: Stacked cards

- **Coach's Story**: Side-by-side with image
  - Image: `https://i.imgur.com/nuXWrN3.jpeg`
  - 5 Pillars of Fitness
  - Link to About page

- **FAQ Section**: Expandable accordion
  - 6 common questions with answers

- **Final CTA**: "Ready to Transform Your Life?"
  - Yellow background
  - "Apply Now - Limited Spots Available"

**SEO**:
- Title: "1-on-1 Coaching - Unlock Your Full Potential with Personalized Training"
- Keywords: "1-on-1 coaching, personalized training, elite mentorship"
- Breadcrumb structured data

#### 7. Thank You Page (`/ThankYou`)
**File**: `src/pages/ThankYou.tsx`

**Purpose**: Redirect page after booking a discovery call

**Sections**:
- **Full Screen Hero**: Black background with white/yellow text
  - Title: "Thank You For Booking Your Call"
  - Subtitle: "Watch the video below for next steps"
  - Vimeo video embed: `https://player.vimeo.com/video/1122033244`

**SEO**:
- Title: "Thank You - Call Booked Successfully"

---

## Components

### Navigation Components

#### Header (`src/components/Header.tsx`)
**Features**:
- Fixed position header with scroll behavior
- Transparent on top, solid background (#shadow/95) when scrolled
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with slide-down animation
- Logo: `https://i.imgur.com/R8nphs9.png`
- Brand text: "Arian Kanani" in yellow

**Navigation Items**:
- Home (/)
- About (/about)
- Programs (/programs)
- Stories (/stories)
- Contact (/contact)

**CTAs** (Desktop):
- "Free Guide" button (scrolls to #free-guide-section on home)
- "Premium Coaching" link (/1on1) - Bronze background
- "Become a Member" link (Skool) - Yellow background

**Mobile Behavior**:
- Header hides on scroll down, shows on scroll up
- Always visible on desktop
- Burger menu: Top-right corner, always visible
- Full-screen menu overlay with navigation + CTAs

**Styling**:
- Height: `h-16 sm:h-20`
- Background blur: `backdrop-blur-md`
- Shadow when scrolled: `shadow-lg`

#### Footer (`src/components/Footer.tsx`)
**Sections**:
1. **Brand Column**:
   - Logo and brand name
   - Tagline: "This is the training ground for modern warriors..."
   - Social links (placeholders): Instagram, YouTube, LinkedIn

2. **Quick Links Column**:
   - About
   - Programs
   - Stories
   - Contact
   - Apply

3. **Newsletter Column** (spans 2 columns):
   - Heading: "Claim Your Free 90-Day Warrior Training Preview"
   - Description of the offer
   - Form fields: Name, Email
   - "Get Free Preview" button
   - Mailchimp integration
   - UTM tracking

4. **Bottom Bar**:
   - Copyright notice with dynamic year

**Form Integration**:
- Uses `subscribeToMailchimp` utility
- Source: 'footer'
- Type: 'warrior-reset'
- Captures UTM parameters from localStorage

**Styling**:
- Background: `bg-shadow` (dark)
- Text: `text-cream` (light)
- Yellow accents for headings and links

#### BackToTop (`src/components/BackToTop.tsx`)
**Features**:
- Appears after scrolling 300px down
- Fixed position: `bottom-20 right-4` (mobile), `bottom-6 right-6` (desktop)
- Mobile: Higher position to avoid overlap with sticky CTA
- Smooth scroll animation to top
- Yellow circular button with chevron-up icon
- Framer Motion entrance/exit animations

**Behavior**:
- Visible when `pageYOffset > 300`
- onClick: Smooth scroll to top
- z-index: 40

#### MobileStickyCTA (`src/components/MobileStickyCTA.tsx`)
**Features**:
- Only visible on mobile (`md:hidden`)
- Fixed to bottom of screen
- Two-button layout:
  1. "Become a Member" (yellow) - Links to Skool
  2. "Apply Now" (bronze) - Opens Calendly
- Safe area inset support for iOS devices
- Framer Motion slide-up entrance animation

**Styling**:
- Background: `bg-shadow`
- Border top: `border-bronze/20`
- z-index: 40
- Buttons: Full width, rounded, min-height 48px

### Hero & Layout Components

#### ParallaxHero (`src/components/ParallaxHero.tsx`)
**Props**:
- `backgroundImage`: Desktop background image URL
- `mobileBackgroundImage?`: Optional mobile-specific image
- `children`: Content overlay
- `height?`: CSS height class (default: `h-screen`)
- `overlay?`: Overlay color class (default: `bg-black/60`)

**Features**:
- Parallax scroll effect using Framer Motion
- Responsive image switching (mobile vs desktop)
- Lazy loading for images
- Overlay gradient for text readability
- Scroll-based vertical translation (0% to 50%)

**Usage Example**:
```tsx
<ParallaxHero
  backgroundImage="https://i.imgur.com/dunHzzD.jpeg"
  mobileBackgroundImage="https://i.imgur.com/qITKPSp.jpeg"
  height="h-screen"
  overlay=""
>
  <div className="text-center text-white">
    <h1>So you think you're fit?</h1>
  </div>
</ParallaxHero>
```

### Form Components

#### WarriorResetForm (`src/components/WarriorResetForm.tsx`)
**Purpose**: Lead magnet form for free 90-day preview

**Fields**:
- Name (required)
- Email (required)

**Features**:
- Mailchimp integration via `subscribeToMailchimp`
- UTM tracking from localStorage
- Loading state during submission
- Success state with CTA to join community
- Error handling and user feedback
- Minimum input height: 48px (accessibility)

**Submission Data**:
```typescript
{
  email: string,
  name: string,
  source: 'homepage',
  type: 'warrior-reset',
  ...utmData
}
```

**Success UI**:
- Shows "Success!" message
- Displays submission confirmation
- "Become a Member" button to Skool community

#### WarriorResetPopup (`src/components/WarriorResetPopup.tsx`)
**Purpose**: Timed popup for lead capture

**Timing**: Appears after 3 seconds of page load

**Design**:
- Full-screen overlay with backdrop blur
- "Coming Soon" banner at top (yellow)
- Gradient background: `from-cream to-sandstone/30`
- Close button (X) in top-right
- Same form as WarriorResetForm
- Success state with checkmark animation

**Features**:
- Auto-displays after 3 seconds
- Click outside to close
- Mailchimp integration
- UTM tracking
- Social proof badges: "500+ Warriors Transformed", "Exclusive Preview"

**Note**: Currently not actively used on any pages, but available for future implementation.

### Testimonial Components

#### TestimonialCard (`src/components/TestimonialCard.tsx`)
**Variants**:
1. **homepage**: Used on Home, Contact, and Stories (mobile)
   - Centered layout
   - Fixed minimum height: 480px
   - Profile image at top
   - Quote in middle
   - Result at bottom
   - "Watch Video" button if video available

2. **contact**: Compact version for Contact page
   - Horizontal layout
   - Fixed height: 280px
   - Smaller profile image
   - Truncated text with line-clamp
   - "Watch Video" button at bottom

3. **stories**: Full detailed version for Stories page desktop
   - Side-by-side layout (image + content)
   - Large image (1/3 width)
   - Full biography text (2/3 width)
   - Timeline badge
   - Detailed sections: Challenge, Process, Result

**Props**:
```typescript
{
  testimonial: Testimonial,
  variant?: 'homepage' | 'stories' | 'contact',
  onClick?: () => void,          // Opens full modal
  onVideoClick?: () => void,     // Opens video modal
  className?: string
}
```

**Interactive Elements**:
- Click card to open TestimonialModal
- Click video button/image to open VideoModal
- Hover effects on cards and buttons

#### TestimonialModal (`src/components/TestimonialModal.tsx`)
**Purpose**: Full-screen modal showing complete testimonial details

**Layout**:
- White rounded modal
- Max width: 2xl
- Max height: 95vh (scrollable)
- Close button (X) top-right
- Profile image and name header
- Large quote display
- Timeline badge
- Three sections:
  1. The Challenge
  2. The Process
  3. The Result

**Props**:
```typescript
{
  testimonial: Testimonial | null,
  isOpen: boolean,
  onClose: () => void
}
```

**Animation**:
- Backdrop fade-in
- Modal slide-up with scale
- Exit animations

#### VideoModal (`src/components/VideoModal.tsx`)
**Purpose**: Display Vimeo video testimonials

**Features**:
- Extracts Vimeo ID from URL
- Responsive iframe embed
- Portrait aspect ratio (9:16)
- Max width: lg
- Title header
- Close button
- Click backdrop to close
- Fallback if video can't load

**Vimeo Embed Settings**:
- No title, byline, or portrait
- Autoplay enabled
- Fullscreen supported
- Picture-in-picture supported

**Props**:
```typescript
{
  isOpen: boolean,
  onClose: () => void,
  videoEmbed: string,  // Vimeo URL
  title: string
}
```

### SEO Component

#### SEO (`src/components/SEO.tsx`)
**Purpose**: Dynamic meta tags for each page using React Helmet Async

**Default Props**:
```typescript
{
  title: 'Arian Kanani - So you think you\'re fit?',
  description: 'This is the training ground for modern warriors...',
  keywords: 'fitness, strength training, mindset coaching...',
  image: 'https://i.imgur.com/R8nphs9.png',
  url: 'https://ariankanani.com',
  type: 'website',
  jsonLd?: object | object[]  // Schema.org structured data
}
```

**Meta Tags Generated**:
- Standard: title, description, keywords
- Open Graph: og:title, og:description, og:image, og:url, og:type
- Twitter Card: twitter:card, twitter:title, twitter:description, twitter:image
- JSON-LD structured data (if provided)

**Usage Example**:
```tsx
<SEO
  title="About Arian Kanani - The Man Behind the Movement"
  description="Discover the story of Arian Kanani..."
  jsonLd={breadcrumbJsonLd}
/>
```

---

## Features & Functionality

### Testimonials System

#### Data Structure
**File**: `src/data/testimonials.ts`

**Interface**:
```typescript
interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;              // Profile image URL
  videoEmbed?: string;         // Vimeo URL (optional)
  quote: string;               // Main testimonial quote
  result: string;              // Key result/outcome
  timeline: string;            // e.g., "6 weeks", "2 months"
  challenge: string;           // Initial challenge
  process: string;             // What they did
  metrics: Array<{            // Before/after metrics
    label: string;
    before: string;
    after: string;
  }>;
}
```

**Current Testimonials**:
1. **Ernie** (Miami, Florida) - 6 weeks
   - Image: `https://i.imgur.com/DhuV0Og.png`
   - Video: `https://vimeo.com/1120663237`

2. **Darius** (Chicago, USA) - 7 months
   - Image: `https://i.imgur.com/ZB8l83m.png`
   - Video: `https://vimeo.com/1120663227`

3. **Tanner** (Los Angeles, California) - 2 months
   - Image: `https://i.imgur.com/gg6axTp.png`
   - Video: `https://vimeo.com/1120663252`

4. **Hooch** (Vancouver, Canada) - 1 year
   - Image: `https://i.imgur.com/BJmdNJm.png`
   - Video: `https://vimeo.com/1120663273`

5. **Lucas** (Vancouver, Canada) - 2 years
   - Image: `https://i.imgur.com/6pTPVRX.png`
   - Video: `https://vimeo.com/1120663246`

### Animation System

All animations use **Framer Motion** for smooth, performant effects.

#### Common Animation Patterns

**Fade-in with slide-up**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

**Staggered animations**:
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
))}
```

**Button hover/tap**:
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

**AnimatePresence for modals**:
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
  )}
</AnimatePresence>
```

### Scroll Behavior

#### Smooth Scroll to Top
- Implemented in BackToTop component
- Uses `window.scrollTo({ top: 0, behavior: 'smooth' })`

#### Smooth Scroll to Section
- "Free Guide" button in header scrolls to `#free-guide-section`
- Implemented in Header component
- Handles cross-page navigation (navigates to home first, then scrolls)

#### Auto Scroll to Top on Route Change
- `ScrollToTop` component in App.tsx
- Listens to pathname changes
- Scrolls to top on every route transition

#### Parallax Scroll Effect
- ParallaxHero component
- Uses Framer Motion's `useScroll` and `useTransform`
- Vertical translation: 0% to 50% based on scroll progress

### Mobile Optimizations

#### Touch Targets
- Minimum height/width: 48px for all interactive elements
- Declared in index.css: `touch-action: manipulation`

#### Safe Area Insets
- Mobile sticky CTA respects iOS safe areas
- Class: `safe-area-inset-bottom`
- CSS: `padding-bottom: env(safe-area-inset-bottom)`

#### Horizontal Scrolling
- Testimonial cards on mobile
- CSS classes:
  - `overflow-x-auto`: Enable horizontal scroll
  - `snap-x snap-mandatory`: Snap scrolling
  - `snap-start`: Snap to start of each item
  - `scrollbar-hide`: Hide scrollbar
  - `touch-pan-x`: Optimize touch scrolling
  - `-webkit-overflow-scrolling: touch`: iOS momentum scrolling

#### Responsive Typography
- Text sizes scale down on mobile
- Example: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`

#### Responsive Layouts
- Desktop: Multi-column grids
- Tablet: Reduced columns
- Mobile: Single column or horizontal scroll

---

## Third-Party Integrations

### Mailchimp

#### Configuration
**Account**: `ariankanani.us4.list-manage.com`
**User ID**: `4a385a24cc4029d7e345c9f8b`
**List ID**: `0ef0849f43`

**Script**: Loaded in `index.html`
```html
<script id="mcjs">!function(c,h,i,m,p){...}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/4a385a24cc4029d7e345c9f8b/34193cc99d83361b1d7910b64.js");</script>
```

#### Implementation
**File**: `src/utils/mailchimp.ts`

**Function**: `subscribeToMailchimp(subscriber: MailchimpSubscriber)`

**Subscriber Interface**:
```typescript
interface MailchimpSubscriber {
  email: string;
  name?: string;
  source?: string;          // e.g., 'homepage', 'footer', 'popup'
  type?: string;            // e.g., 'warrior-reset', 'contact', 'inquiry'
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}
```

**Process**:
1. Creates hidden form element
2. Sets action to Mailchimp list endpoint
3. Populates form fields:
   - EMAIL (required)
   - FNAME (first name from full name)
   - LNAME (last name)
   - UTMSOURCE, UTMMEDIUM, UTMCAMP, UTMTERM, UTMCONT
   - SOURCE, TYPE
4. Includes honeypot field for spam prevention
5. Submits form programmatically
6. Returns success/error message

**Form Locations**:
- Footer newsletter form
- WarriorResetForm component
- WarriorResetPopup component
- Contact page form
- Programs page form

### Google Tag Manager

#### Configuration
**Container ID**: `GTM-P9DD2XWL`

**Implementation**:
```html
<!-- Head Script -->
<script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-P9DD2XWL');</script>

<!-- Body NoScript -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9DD2XWL"...></iframe></noscript>
```

**Purpose**:
- Track page views
- Track conversions
- Custom event tracking
- Analytics integration

### Google Analytics 4

**Status**: Placeholder in `index.html` (commented out)

**Setup Instructions**:
```html
<!-- Uncomment and replace GA_MEASUREMENT_ID with actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### UTM Tracking

#### Implementation
**File**: `index.html`

**Captured Parameters**:
- utm_source
- utm_medium
- utm_campaign
- utm_term
- utm_content

**Process**:
1. Script runs on page load
2. Parses URL query parameters
3. Stores in `localStorage` as `utm_data` (JSON string)
4. Forms retrieve and include in Mailchimp submissions

**Code**:
```javascript
<script>
  (function() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {};

    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
      }
    });

    if (Object.keys(utmData).length > 0) {
      localStorage.setItem('utm_data', JSON.stringify(utmData));
    }
  })();
</script>
```

### Vimeo

#### Videos Used
1. **1-on-1 VSL**: `https://player.vimeo.com/video/1122021359`
   - Location: OneOnOnePage hero section
   - Autoplay on button click
   - Full controls enabled

2. **Thank You Video**: `https://player.vimeo.com/video/1122033244`
   - Location: ThankYou page
   - Auto-loads on page visit

3. **Testimonial Videos**:
   - Ernie: `https://vimeo.com/1120663237`
   - Darius: `https://vimeo.com/1120663227`
   - Tanner: `https://vimeo.com/1120663252`
   - Hooch: `https://vimeo.com/1120663273`
   - Lucas: `https://vimeo.com/1120663246`

#### Player Script
**File**: `public/vimeo-player.js`
Loaded for advanced Vimeo player API features (if needed)

#### Embed Configuration
```html
<iframe
  src="https://player.vimeo.com/video/{VIDEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479"
  frameBorder="0"
  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
/>
```

**Parameters**:
- `badge=0`: Hide Vimeo badge
- `autopause=0`: Don't autopause on blur
- `player_id=0`: Player instance ID
- `app_id=58479`: App identification

### Calendly

**Primary Link**:
`https://calendly.com/ariankananicoaching/discovery-call`

**Usage Locations**:
- Header "Premium Coaching" button
- Contact page "Book Consultation" button
- 1-on-1 page multiple CTA buttons
- Programs page "Apply Now" button
- MobileStickyCTA "Apply Now" button

**Behavior**:
- Opens in new tab (`target="_blank"`)
- Security: `rel="noopener noreferrer"`

**Thank You Redirect**:
- After booking: Redirects to `/ThankYou` page
- Configured in Calendly event settings

### Skool Community

**Primary Link**:
`https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054`

**Usage Locations**:
- Header "Become a Member" button
- Home page "Become a Member" CTAs
- Footer "Become a Member" link
- Programs page "Become a Member" button
- MobileStickyCTA "Become a Member" button
- WarriorResetForm success state

**Referral Parameter**:
`ref=ef162307115940808d7f594a0c500054`

**Pricing**: $100 USD/month

### Supabase

#### Configuration
**Environment Variables** (`.env`):
```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw
```

**Status**: Configured but not actively used in current implementation

**Potential Use Cases**:
- User authentication
- Contact form submissions storage
- Newsletter subscriber management
- Testimonial management system
- Analytics data storage

**Package**: `@supabase/supabase-js@2.57.4`

---

## SEO Implementation

### Meta Tags

#### Default Tags (index.html)
```html
<title>Arian Kanani - So you think you're fit?</title>
<meta name="description" content="This is the training ground for modern warriors..." />

<!-- Favicon -->
<link rel="icon" type="image/png" href="https://i.imgur.com/R8nphs9.png" />
<link rel="apple-touch-icon" href="https://i.imgur.com/R8nphs9.png" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ariankanani.com/" />
<meta property="og:title" content="Arian Kanani - So you think you're fit?" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://i.imgur.com/R8nphs9.png" />

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://ariankanani.com/" />
<meta property="twitter:title" content="..." />
<meta property="twitter:description" content="..." />
<meta property="twitter:image" content="https://i.imgur.com/R8nphs9.png" />
```

### Structured Data (JSON-LD)

#### Organization Schema (Home Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Arian Kanani - Sensei Academy",
  "url": "https://ariankanani.com",
  "logo": "https://ariankanani.com/logo.png",
  "sameAs": [
    "https://instagram.com/ariankanani",
    "https://youtube.com/@ariankanani",
    "https://linkedin.com/in/ariankanani"
  ]
}
```

#### Website Schema (Home Page)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Arian Kanani",
  "url": "https://ariankanani.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ariankanani.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### Breadcrumb Schema (All Sub-Pages)
Example for About page:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ariankanani.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://ariankanani.com/about"
    }
  ]
}
```

### SEO Fallback Content

**Purpose**: Ensure search engines can crawl content even if JavaScript fails

**Location**: `index.html` within `<div id="seo-fallback">`

**Content**:
- H1: Main page title
- H2/H3: Section headings
- Paragraphs: Key content
- Hidden with `display: none`
- Removed after React renders (via JavaScript)

**Key Sections**:
- Main headline
- Core philosophy (3 pillars)
- Evolution path (RESET, REINFORCE, RECLAIM)
- Programs (Academy, Private Coaching)
- Testimonial quotes
- Lead magnet CTA

### Heading Visibility

**CSS Rule** (index.css):
```css
h1, h2, h3, h4, h5, h6 {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: static !important;
  clip: auto !important;
  width: auto !important;
  height: auto !important;
  overflow: visible !important;
}
```

**Purpose**: Ensure all headings are always visible to search engine crawlers

**Applied**: All heading elements throughout the site

### Image Optimization

#### Hero Images
- Preload hero image in `<head>`:
  ```html
  <link rel="preload" as="image" href="https://i.imgur.com/dunHzzD.jpeg">
  ```

#### Lazy Loading
- All non-hero images use `loading="lazy"`
- Applied to testimonial images, about page images

#### Alt Tags
- All images have descriptive alt attributes
- Example: `alt="Arian Kanani Logo"`

---

## Assets & Media

### Logo
**URL**: `https://i.imgur.com/R8nphs9.png`
**Usage**:
- Header
- Footer
- Favicon
- Social media share image

### Hero Images

#### Desktop Hero
**URL**: `https://i.imgur.com/dunHzzD.jpeg`
**Usage**: Home page ParallaxHero desktop view

#### Mobile Hero
**URL**: `https://i.imgur.com/qITKPSp.jpeg`
**Usage**: Home page ParallaxHero mobile view (< 768px)

### Profile Images

#### Arian Kanani
**URL**: `https://i.imgur.com/nuXWrN3.jpeg`
**Usage**:
- About page "The Man Behind the Movement"
- 1-on-1 page "Meet Your Coach"

### Testimonial Images

All hosted on Imgur:
- Ernie: `https://i.imgur.com/DhuV0Og.png`
- Darius: `https://i.imgur.com/ZB8l83m.png`
- Tanner: `https://i.imgur.com/gg6axTp.png`
- Hooch: `https://i.imgur.com/BJmdNJm.png`
- Lucas: `https://i.imgur.com/6pTPVRX.png`

### Video Assets

#### VSL (Video Sales Letter)
**Vimeo ID**: 1122021359
**URL**: `https://player.vimeo.com/video/1122021359`
**Usage**: 1-on-1 page hero section

#### Thank You Video
**Vimeo ID**: 1122033244
**URL**: `https://player.vimeo.com/video/1122033244`
**Usage**: Thank You page

#### Testimonial Videos
All hosted on Vimeo:
- Ernie: 1120663237
- Darius: 1120663227
- Tanner: 1120663252
- Hooch: 1120663273
- Lucas: 1120663246

### Local Assets

#### Public Folder
- `public/image.png`: Local image asset (usage TBD)
- `public/vimeo-player.js`: Vimeo player SDK script

---

## Development

### Prerequisites
- Node.js 16+ recommended
- npm or yarn package manager

### Installation

```bash
# Clone repository
git clone [repository-url]

# Install dependencies
npm install

# Copy .env file (if not present)
cp .env.example .env
```

### Environment Variables

Create `.env` file in project root:
```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=[your-anon-key]
```

**Note**: Currently Supabase is configured but not actively used.

### Development Server

```bash
npm run dev
```

- Opens at: `http://localhost:5173`
- Hot module replacement (HMR) enabled
- Vite dev server with fast refresh

### Code Quality

#### Linting
```bash
npm run lint
```

**Configuration**: `eslint.config.js`
- TypeScript ESLint
- React Hooks plugin
- React Refresh plugin

**Rules**:
- Recommended JS and TypeScript rules
- React Hooks rules enforced
- Component export warnings

#### Type Checking
TypeScript is configured with strict mode:
```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true
}
```

### File Organization Best Practices

1. **Components**: Reusable UI elements in `src/components/`
2. **Pages**: Route-specific components in `src/pages/`
3. **Data**: Static data files in `src/data/`
4. **Utils**: Utility functions in `src/utils/`
5. **Styles**: Global styles in `src/index.css`

### Adding New Pages

1. Create page component in `src/pages/[PageName].tsx`
2. Add route to `App.tsx`:
   ```tsx
   <Route path="/page-name" element={<PageName />} />
   ```
3. Add SEO component with page-specific meta tags
4. Add navigation link to Header component
5. Test responsive design on all breakpoints

### Adding New Testimonials

1. Add testimonial object to `src/data/testimonials.ts`:
   ```typescript
   {
     id: 'unique-id',
     name: 'Name',
     location: 'City, Country',
     image: 'https://imgur.com/...',
     videoEmbed: 'https://vimeo.com/...',
     quote: '...',
     result: '...',
     timeline: 'X months',
     challenge: '...',
     process: '...',
     metrics: [...]
   }
   ```
2. Testimonial will automatically appear on all testimonial sections

---

## Build & Deployment

### Production Build

```bash
npm run build
```

**Output**: `dist/` folder

**Process**:
1. TypeScript compilation
2. Vite bundling and optimization
3. Asset optimization (images, fonts)
4. Code splitting
5. Minification

**Build Configuration** (`vite.config.ts`):
```typescript
{
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  }
}
```

### Preview Production Build

```bash
npm run preview
```

- Serves production build locally
- Test before deployment
- Opens at `http://localhost:4173`

### Deployment Checklist

1. **Environment Variables**:
   - Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` on hosting platform

2. **Build Command**: `npm run build`

3. **Output Directory**: `dist`

4. **Redirects**:
   Configure SPA fallback (all routes to index.html):
   ```
   /*    /index.html    200
   ```

5. **Custom Domain**:
   - Point DNS A record to hosting provider
   - Configure SSL certificate (automatic on most platforms)

6. **Analytics**:
   - Verify Google Tag Manager is firing
   - Test Mailchimp form submissions
   - Check UTM tracking

7. **Testing**:
   - Test all routes
   - Verify mobile responsiveness
   - Check video embeds
   - Test form submissions
   - Validate meta tags (use Facebook Debugger, Twitter Card Validator)

### Hosting Recommendations

**Suggested Platforms**:
1. **Vercel** (Recommended)
   - Automatic deployments from Git
   - Free SSL
   - Global CDN
   - Environment variable management

2. **Netlify**
   - Similar features to Vercel
   - Drag-and-drop deployment option

3. **Cloudflare Pages**
   - Fast global distribution
   - Free tier available

### Post-Deployment

1. **Submit Sitemap**:
   - Generate sitemap.xml
   - Submit to Google Search Console

2. **Monitor Performance**:
   - Use Google PageSpeed Insights
   - Test Lighthouse scores
   - Monitor Core Web Vitals

3. **A/B Testing**:
   - Test different CTAs
   - Optimize form conversion rates
   - Track user behavior with GTM

---

## Browser Support

### Target Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### Polyfills
Not required - Vite handles modern JavaScript features

### CSS Compatibility
- Tailwind CSS handles vendor prefixes
- Autoprefixer configured via PostCSS
- CSS Grid and Flexbox used (supported in all modern browsers)

---

## Performance Optimizations

### Lazy Loading
- All images: `loading="lazy"`
- Route-based code splitting via React Router

### Asset Optimization
- Images hosted on Imgur CDN
- Videos hosted on Vimeo CDN
- Fonts loaded from Google Fonts CDN with `display=swap`

### Code Splitting
- Dynamic imports for pages (automatic with Vite)
- Lucide React icons excluded from optimizeDeps

### Caching Strategy
- Static assets have long cache lifetimes
- index.html has short cache lifetime
- Service Worker not currently implemented

### Bundle Size
- Framer Motion: ~50KB gzipped
- React + React DOM: ~45KB gzipped
- Total JS bundle: ~150-200KB gzipped (typical)

---

## Accessibility

### Standards
- WCAG 2.1 Level AA target compliance

### Features
- Semantic HTML elements
- ARIA labels on buttons and links
- Keyboard navigation support
- Focus indicators on interactive elements
- Minimum touch target size: 48x48px
- Color contrast ratios meet WCAG guidelines

### Screen Reader Support
- Alt text on all images
- Proper heading hierarchy
- Form labels and instructions
- Skip to main content (can be added)

---

## Browser Console Notes

### Expected Console Output
- Mailchimp integration logs (development only)
- Form submission logs (development only)
- No errors should appear in production

### Common Warnings
- React key warnings (should be addressed)
- Framer Motion deprecation notices (if any)

---

## Maintenance & Updates

### Regular Tasks
1. **Update Dependencies**:
   ```bash
   npm update
   npm audit fix
   ```

2. **Review Analytics**:
   - Check Google Analytics for traffic
   - Monitor conversion rates
   - Review form submissions

3. **Content Updates**:
   - Add new testimonials
   - Update pricing if changed
   - Refresh images/videos

4. **Performance Monitoring**:
   - Run Lighthouse audits monthly
   - Check page load times
   - Monitor Core Web Vitals

### Breaking Changes to Watch
- React Router updates (major versions)
- Framer Motion API changes
- Tailwind CSS major version updates
- Vite major version updates

---

## Support & Contact

### Technical Issues
- Check console for errors
- Verify environment variables
- Review network tab for failed requests
- Test in incognito mode to rule out extensions

### Third-Party Service Issues
- **Mailchimp**: Check account status and list settings
- **Vimeo**: Verify video privacy settings
- **Calendly**: Confirm event is active
- **Skool**: Verify community link is valid

---

## Project Context & Notes

### Design Philosophy
- **Warrior Theme**: Dark, earthy colors with yellow accents
- **Minimalism**: Clean layouts with ample whitespace
- **Typography**: Bold, uppercase headings (Bebas/Oswald)
- **Imagery**: Authentic, raw training photos
- **Copy**: Direct, no-nonsense messaging

### Brand Voice
- **Tone**: Disciplined, motivational, authentic
- **Language**: Strong verbs, short sentences
- **Approach**: No gimmicks, no shortcuts, real transformation

### Target Audience
- High-achievers seeking transformation
- Age: 25-55
- Willing to invest in coaching
- Value discipline and accountability
- Looking for sustainable results, not quick fixes

### Conversion Strategy
1. **Awareness**: SEO, social media, word of mouth
2. **Interest**: Compelling copy, testimonials, video content
3. **Desire**: Free lead magnet (90-day preview)
4. **Action**: Book consultation or join community

---

## Changelog

### Current Version: 1.0.0

**Features**:
- 7 main pages (Home, About, Programs, Stories, Contact, 1on1, ThankYou)
- 5 detailed testimonials with video support
- Mailchimp email capture with UTM tracking
- Google Tag Manager integration
- Mobile-optimized design
- SEO-optimized with structured data
- Smooth animations and interactions

**Future Enhancements**:
- Supabase integration for form submissions
- Blog/content section
- Members portal
- Video library
- Progress tracking tools
- Community forum integration

---

This README provides a complete technical reference for the Arian Kanani website. For questions or clarifications, refer to individual component files or configuration files mentioned throughout this document.
