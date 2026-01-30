# GoldMarket.ge Style Guide

## Design System Documentation

Based on the design mockups provided, this document outlines the visual language of GoldMarket.ge.

---

## 🎨 Color Palette

### Primary Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Brand Teal** | `#0D6B5F` | Header, primary buttons, links, active states |
| **Brand Teal Light** | `#0A8A7A` | Hover states |
| **Brand Teal Dark** | `#0A5A50` | Active/pressed states |

### Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Gold** | `#E8B44B` | Price badges, secondary CTAs, highlights |
| **Gold Dark** | `#D97706` | Gold hover states |

### VIP Badge Colors
| Level | Color | Hex |
|-------|-------|-----|
| **Super VIP (S-VIP)** | Red | `#DC2626` |
| **VIP+** | Teal | `#0D6B5F` |
| **VIP** | Gray | `#6B7280` |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#F5F5F5` | Page background |
| **Surface/Card** | `#FFFFFF` | Cards, modals, inputs |
| **Text Primary** | `#1A1A1A` | Headings, body text |
| **Text Secondary** | `#6B7280` | Descriptions, captions |
| **Border** | `#E5E7EB` | Dividers, input borders |

### Semantic Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Error** | `#DC2626` | Form errors, destructive actions |
| **Success** | `#16A34A` | Success messages, verified badges |

---

## 📝 Typography

### Font Family
- **Primary**: System sans-serif (Georgian-compatible)
- **Georgian**: BPG Glaho WEB Caps (for Georgian text)

### Font Sizes
| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 12px | 16px | Badges, labels |
| sm | 14px | 20px | Secondary text, captions |
| base | 16px | 24px | Body text |
| lg | 18px | 28px | Subheadings |
| xl | 20px | 28px | Card titles |
| 2xl | 24px | 32px | Section headings |
| 3xl | 30px | 36px | Page titles |

### Font Weights
- **Normal (400)**: Body text
- **Medium (500)**: Labels, buttons
- **Semibold (600)**: Prices, emphasis
- **Bold (700)**: Headings

---

## 📐 Spacing

### Container
- **Max Width**: 1280px
- **Padding Mobile**: 16px
- **Padding Tablet**: 24px
- **Padding Desktop**: 32px

### Component Spacing
| Element | Value |
|---------|-------|
| Card padding | 16px |
| Card gap | 12px |
| Section gap | 32px |
| Section margin | 48px |

---

## 🔲 Border Radius

| Size | Value | Usage |
|------|-------|-------|
| sm | 4px | Small badges |
| DEFAULT | 8px | Buttons, inputs |
| md | 8px | Cards |
| lg | 12px | Larger cards |
| xl | 16px | Modals |
| full | 9999px | Avatars, pills |

---

## 🎭 Shadows

| Name | Value | Usage |
|------|-------|-------|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | Default cards |
| DEFAULT | `0 1px 3px rgba(0,0,0,0.1)` | Elevated elements |
| md | `0 4px 6px rgba(0,0,0,0.1)` | Dropdowns |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | Modals |

---

## 🧩 Components

### Header
- **Background**: Brand Teal (`#0D6B5F`)
- **Height**: 64px (desktop), 56px (mobile)
- **Logo**: Left aligned
- **Search**: Center (desktop)
- **Actions**: Right aligned (Add Listing, Wishlist, Language, User)

### Category Strip
- **Layout**: Horizontal scroll
- **Card Style**: White bg, rounded corners, image + text
- **Active State**: Brand teal background, white text
- **First Card**: "All Categories" with icon

### Listing Card
- **Background**: White
- **Border Radius**: 12px
- **Image**: Top, aspect ratio 1:1
- **Price Badge**: Top-left, gold background
- **VIP Badge**: Top-left (above price), colored by level
- **Content**: Title, seller name, location below image

### Modal/Dialog
- **Background**: White
- **Border Radius**: 16px
- **Overlay**: Black 50% opacity
- **Close Button**: Top-right X icon
- **CTA Button**: Full width, brand teal

### Form Inputs
- **Border**: 1px solid `#E5E7EB`
- **Border Radius**: 8px
- **Focus Ring**: Brand teal
- **Error State**: Red border + error message below

### Buttons
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | Brand Teal | White | None |
| Secondary | Gold | White | None |
| Outline | Transparent | Gray | Gray |
| Ghost | Transparent | Gray | None |

### Filters Sidebar
- **Width**: 280px (desktop)
- **Sections**: Collapsible with chevron
- **Checkboxes**: Brand teal when checked
- **Range Slider**: Brand teal track

### Wishlist Drawer
- **Position**: Right side sheet
- **Width**: 400px
- **Header**: "ჩემი რჩეულები" with count
- **Item**: Image + title + price + remove button
- **Empty State**: Illustration + message

---

## 📱 Responsive Breakpoints

| Name | Min Width | Description |
|------|-----------|-------------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1536px | Extra large |

---

## 🇬🇪 Localization

- **Default Language**: Georgian (ka)
- **Secondary**: English (en)
- **Text Direction**: LTR
- **Currency**: ლარი (₾) / GEL
- **Date Format**: DD/MM/YYYY
