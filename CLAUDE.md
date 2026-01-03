# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Kommunkollen** is a Swedish municipality tax and budget transparency dashboard. Users can input their monthly salary and home municipality to see a breakdown of their tax payments and where the money goes. The application enables drilling down into municipal budgets, cost structures, and supplier invoices.

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL (planned)
- **Deployment**: Railway (planned)

## Common Commands

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (when configured)
# TBD: Add database migration commands
```

## Project Structure

```
kommunkollen/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page with salary/municipality input
│   └── globals.css        # Global styles with Tailwind directives
├── components/            # Reusable React components (to be created)
├── lib/                   # Utility functions and shared logic (to be created)
├── public/                # Static assets (to be created)
└── next.config.ts         # Next.js configuration
```

## Architecture Notes

### Data Flow (Planned)
1. User inputs salary and selects municipality
2. Calculate tax breakdown using Swedish tax rates
3. Either fetch budget data from external API or query own PostgreSQL database
4. Display visualizations with drill-down capabilities into:
   - Tax distribution (state, county, municipality)
   - Municipal budget categories
   - Supplier invoices and cost structures

### Database Considerations
The project is designed to support either:
- External API calls for municipality budget data
- Self-hosted PostgreSQL database with manually imported invoice data

When implementing data access layers, ensure the architecture supports both approaches.

### Swedish Context
- Language: Swedish (sv)
- Currency: SEK (Swedish Krona)
- Tax structure: Progressive income tax with municipal, county, and state components
- Municipalities (kommuner): 290 in Sweden
- Public data: Municipal budgets and supplier invoices are public information but often require manual collection
