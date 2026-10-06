# Setup check

Before your interview, please make sure this repo runs for you and that your AI coding tools work in
it. The interview repo uses the same stack and dev container, so if this works, you're ready. Plan for
about 15 minutes.

## 1. Open it

**Codespaces (recommended):** click **Code → Codespaces → Create codespace on main**. Setup runs
automatically; wait for the terminal to finish `bin/setup`.

**Locally (optional):** you'll need Ruby 3.4.7, Node 20 and PostgreSQL 17. Run `bin/setup`.

## 2. Check that it runs

```bash
bin/dev
```

Open port 3000. Codespaces will offer to open it in your browser. You should see **"Your environment
works"** and a button that counts clicks.

## 3. Check the tests

```bash
bin/rails test
npm test
npm run typecheck
```

All three should pass.

## 4. Check your AI tool

Use whatever you normally use: Claude Code, Codex, Cursor, Copilot, or something else. You can sign in
to a CLI tool from the codespace terminal, or connect your editor to the codespace. Ask it to:

> Add a "Reset" button to the Greeting component that sets the count back to zero, with a test.

Make sure it can edit files and run `npm test`. You don't need to send us the result.

If anything doesn't work, reply to the email you got this link in and we'll sort it out before the
interview. If you don't have a paid AI tool, tell us and we'll lend you one for the interview.
