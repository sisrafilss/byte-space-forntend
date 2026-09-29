<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# User Strict Rules

## Git Commit & Push Policy
- **STRICT PROHIBITION:** DO NOT automatically commit or push code after making changes.
- **AUTHORIZATION REQUIRED:** Only run `git commit` and `git push` when the user explicitly commands it (e.g. "এখন কোডগুলো commit & push করো").
- All intermediate work, modifications, refactors, and setups must remain staged or unstaged until user gives explicit instruction to commit and push.
