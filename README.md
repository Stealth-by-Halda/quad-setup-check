# Setup check

Before your interview, please make sure this repo runs for you and that your AI coding tools work in
it. At the start of the interview we'll send you the interview repo as a git bundle (one file). It
uses the same stack and dev container, and you'll open it exactly the way you open this one. Plan for
about 20 minutes.

## 1. Get the code

```bash
git clone https://github.com/Stealth-by-Halda/quad-setup-check.git
cd quad-setup-check
```

## 2. Open it (pick the one you'll use in the interview)

**Dev container (recommended):** with Docker running, open the folder in VS Code, Cursor or another
editor with dev-container support and choose **Reopen in Container**. The first build downloads the
images, so doing it now makes the interview start faster. Setup runs automatically; wait for
`bin/setup` to finish in the terminal.

**Your own codespace:** push the repo to a private repo on your GitHub account, then create a
codespace on it. These are the same commands you'll use with the interview bundle:

```bash
git remote remove origin
gh repo create quad-setup-check --private --source . --remote origin
git push origin --all
gh codespace create -R <your-github-username>/quad-setup-check --branch main
```

If the push is rejected because of the `workflow` scope, run `gh auth refresh -s workflow` and push
again. Personal GitHub accounts include free Codespaces hours each month, which is plenty for this.

**Without containers:** install Ruby 3.4.7, Node 20 and PostgreSQL 17, then run `bin/setup`.

## 3. Check that it runs

```bash
bin/dev
```

Open http://localhost:3000 (Codespaces will offer to open the forwarded port). You should see **"Your
environment works"** and a button that counts clicks.

## 4. Check the tests

```bash
bin/rails test
npm test
npm run typecheck
```

All three should pass.

## 5. Check your AI tool

Use whatever you normally use: Claude Code, Codex, Cursor, Copilot, or something else. Ask it to:

> Add a "Reset" button to the Greeting component that sets the count back to zero, with a test.

Make sure it can edit files and run `npm test` inside the container or codespace. You don't need to
send us the result.

If anything doesn't work, reply to the email you got this link in and we'll sort it out before the
interview. If you don't have a paid AI tool, tell us and we'll lend you one for the interview.
