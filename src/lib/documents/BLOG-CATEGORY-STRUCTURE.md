# BudgetBee Blog Category Structure

## Overview

This document defines the category structure for BudgetBee's blog content, organized around the TOFU (Top of Funnel) and MOFU (Middle of Funnel) content marketing strategy.

## Content Strategy Framework

### TOFU Content (Top of Funnel)

**Purpose:** Awareness and education for broad audience discovery
**Target Audience:** Cold prospects who may not know our brand yet
**Content Goal:** Attract visitors, provide value, build brand awareness

### MOFU Content (Middle of Funnel)  

**Purpose:** Lead generation and nurturing for warm prospects
**Target Audience:** Problem-aware prospects actively researching solutions
**Content Goal:** Capture leads, build trust, position BudgetBee as solution provider

## Primary Category Structure

### 🎯 TOFU Categories (Educational/Awareness)

#### **personal-finance** (Main TOFU Category)

- **Description:** Educational content about personal finance fundamentals
- **Content Types:** How-to guides, educational articles, financial literacy content
- **Examples:** "How to Create Your First Budget", "Understanding Credit Scores", "Emergency Fund Basics"

#### **budgeting-basics**

- **Description:** Foundational budgeting concepts and methods
- **Content Types:** Beginner guides, budgeting methods, tools explanations
- **Examples:** "50/30/20 Rule Explained", "Zero-Based Budgeting Guide", "Best Budgeting Apps"

#### **financial-literacy**

- **Description:** General financial education and money concepts
- **Content Types:** Educational articles, financial concepts, money psychology
- **Examples:** "Understanding Compound Interest", "Types of Debt", "Financial Goal Setting"

#### **money-management**

- **Description:** Practical money management tips and strategies
- **Content Types:** Tips, strategies, behavioral finance content
- **Examples:** "Ways to Save Money Daily", "Avoiding Impulse Purchases", "Building Financial Habits"

#### **financial-planning**

- **Description:** Long-term financial planning and life goals
- **Content Types:** Planning guides, goal-setting, life events planning
- **Examples:** "Planning for Retirement in Your 20s", "Saving for a House", "Financial Planning by Age"

### 💰 MOFU Categories (Solution-Focused/Lead Generation)

#### **financial-solutions** (Main MOFU Category)

- **Description:** Solution-oriented content for specific financial needs
- **Content Types:** Product comparisons, recommendations, case studies
- **Examples:** "Best Ways to Consolidate Debt", "Choosing the Right Financial Product", "Solution Comparison Guides"

#### **credit-cards**

- **Description:** Credit card recommendations, comparisons, and guidance
- **Content Types:** Product reviews, comparisons, application guides, optimization tips
- **Examples:** "Best Credit Cards for Students", "Cashback vs. Travel Rewards", "How to Apply for Your First Credit Card"

#### **personal-loans**

- **Description:** Personal loan products, comparisons, and application guidance
- **Content Types:** Product comparisons, qualification guides, use case scenarios
- **Examples:** "Best Personal Loans for Debt Consolidation", "Personal Loan vs. Credit Card", "How to Qualify for Low-Rate Loans"

#### **banking-products**

- **Description:** Bank account recommendations and banking solutions
- **Content Types:** Account comparisons, feature guides, recommendation articles
- **Examples:** "Best High-Yield Savings Accounts", "Checking Account Comparison", "Online vs. Traditional Banking"

#### **investment-products**

- **Description:** Investment platforms and product recommendations
- **Content Types:** Platform reviews, investment guides, product comparisons
- **Examples:** "Best Investment Apps for Beginners", "Robo-Advisor Comparison", "401k vs. IRA Guide"

### 🔍 Supporting Categories

#### **reviews**

- **Description:** In-depth product and service reviews
- **Content Types:** Product reviews, service evaluations, pros/cons analyses
- **Examples:** "Mint App Review", "Capital One 360 Review", "Robinhood Platform Review"

#### **comparisons**

- **Description:** Side-by-side product and service comparisons
- **Content Types:** Comparison tables, feature analyses, recommendation matrices
- **Examples:** "Chase vs. Bank of America", "Venmo vs. PayPal vs. Zelle", "Top 5 Budget Apps Compared"

#### **guides**

- **Description:** Comprehensive step-by-step guides
- **Content Types:** How-to guides, process walkthroughs, detailed tutorials
- **Examples:** "Complete Guide to Building Credit", "Step-by-Step Home Buying Process", "Small Business Banking Guide"

#### **tools**

- **Description:** Financial tools, calculators, and resources
- **Content Types:** Calculator guides, tool explanations, resource roundups
- **Examples:** "Best Debt Payoff Calculators", "Investment Return Calculators", "Budget Template Downloads"

## Tag Structure

### Audience-Based Tags

- `millennials`
- `gen-z`
- `students`
- `young-professionals`
- `families`
- `seniors`
- `entrepreneurs`

### Topic-Based Tags

- `credit-score`
- `debt-management`
- `savings`
- `investing`
- `retirement`
- `taxes`
- `insurance`
- `real-estate`
- `side-hustles`
- `financial-goals`

### Content Type Tags

- `beginner-friendly`
- `advanced`
- `quick-tips`
- `deep-dive`
- `case-study`
- `infographic`
- `video-content`
- `downloadable`

## Implementation Notes

### Current Astro.js Setup

- ✅ Content collections already configured in `src/content.config.ts`
- ✅ Categories schema: `categories: z.array(z.string()).default(["others"])`
- ✅ Tags schema: `tags: z.array(z.string()).default(["others"])`
- ✅ Blog collection supports multiple categories and tags per post

### Category Page Generation

Category pages will be dynamically generated using Astro's `getStaticPaths()` function to:

1. Filter blog posts by category
2. Create dedicated landing pages for each category
3. Enable category-based navigation and SEO

### Content Migration Preparation

For the upcoming content migration from UK TopFinanzas:

1. **personal-finance** content → TOFU classification
2. **financial-solutions** content → MOFU classification  
3. **credit-cards** content → MOFU classification
4. **personal-loans** content → MOFU classification
5. All content will be localized for the American market

### SEO Considerations

- Category pages will include targeted meta descriptions
- URL structure: `/blog/category/[category-name]/`
- Breadcrumb navigation for improved UX and SEO
- Category-specific sitemaps for better indexing

---

*Last Updated: May 24, 2025*  
*Status: Ready for content migration implementation*
