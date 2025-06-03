# Project Guidelines

This AstroJS project is intended to be the Landing Page of TopNetworks Inc., a company focused on providing financial solutions and educational content. The following rules and guidelines are established to ensure consistency, maintainability, and quality across the project.

## Project Specifics

- The language of the project is **Spanish**, as it targets a Spanish-speaking audience.
- The project is built using **AstroJS**.
- The project is hosted on **GitHub**.
- The project is designed to be a **Landing Page** for TopNetworks Inc.
- The project is based on the **Astrowind** template, which provides a modern and responsive design.

## Documentation Requirements

- Update relevant documentation in `src/lib/documents/DOCUMENTATION.md` when modifying features
- Keep `README.md` in sync with new capabilities
- Maintain changelog entries in `/CHANGELOG.md`

## Project Awareness & Context

- Always read the `2-WHAT-IS-TOPNETWORKS.md` markdown document at the start of a new conversation, as it provides essential context about TopNetworks, its objectives and also provides guidelines for the content of the TopNetworks landing page.
- Refer to `3-PUSH-AND-COMMIT.md` for commit and push guidelines.
- Consult the `src/lib/documents/Pitch-Inversionistas-Top-Networks-2024.pdf` to have analyze the color palette and design guidelines for the project.

## Architecture Decision Records

Create ADRs in `src/lib/documents/ADRs.md` for:

- Major dependency changes
- Architectural pattern changes
- New integration patterns

## Code Style & Patterns

- Generate API clients using OpenAPI Generator
- Prefer composition over inheritance
- Use repository pattern for data access

## Testing Standards

- Unit tests required for business logic
- Integration tests for API endpoints
- E2E tests for critical user flows

## Tool Usage

A suite of MCP Server tools is available for your use. These tools should be employed as needed to perform various tasks.

### MCP Server Discovery

To identify available MCP Servers, utilize the `@modelcontextprotocol/server-filesystem` to read the configuration file located at:
`/Users/macbookpro/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

This will provide you with a complete list of configured MCP servers and their capabilities.

### Astro Project Documentation

As this is an Astro project, before executing any task related to the structure of the project, you should use the `@upstash/context7-mcp@latest` MCP server tool to look for Astro documentation in <https://docs.astro.build/en/getting-started/>. This will ensure you have the most up-to-date information about Astro's patterns, conventions, and best practices.

### Effective Tool Selection

Analyze the capabilities of these tools to determine the most appropriate approach for your tasks.
