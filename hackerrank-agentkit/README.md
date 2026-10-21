# AgentKit v2 — HackerRank Orchestrate practice

A beginner-friendly Python practice project that demonstrates **LLM-driven task routing** with a strict allowlist of safe, local demonstration tools. This is **not** the official HackerRank challenge submission.

## What it does

1. Takes a natural-language request.
2. Asks an OpenAI model to choose one of five actions: invoice, report, email, customer, clarify.
3. Validates the model's JSON decision against an explicit allowlist.
4. Executes a local **demo-only** tool that returns a description of what would happen.

**Important:** It does **not** actually generate invoices, read email, retrieve CRM data, or send messages. No untrusted model text is executed as code.

## Setup (Windows PowerShell)

Install Python 3.10+ and Git. Clone the preparation branch:

```powershell
git clone --branch hackerrank-agentkit-prep https://github.com/rohit-kr-dev/prototype.git
cd prototype/hackerrank-agentkit
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
```

Open `.env` locally and replace the placeholder with **your own** OpenAI API key. Keep the key private; API use may incur charges. Set `OPENAI_MODEL` to a model available to your account if needed. Do not paste secrets into chat, issues, or commits.

If PowerShell prevents activation, run `.venv\Scripts\python.exe` directly instead of changing machine-wide execution policy.

## Run

```powershell
python ai_agent.py
```

Example: `Please prepare an invoice for a customer`. You should see a JSON decision plus a `demo_only` result.

## Run tests (no API key required)

```powershell
python -m unittest discover -p "test*.py" -v
```

Tests include the original rule-based AgentKit v1 plus mocked v2 model calls, invalid JSON, disallowed actions, missing fields, and oversized input.

## Architecture

`user input -> model decision (JSON) -> validation -> allowlisted local tool -> demo result`

- `agent.py`: original rule-based practice agent.
- `ai_agent.py`: LLM decision engine and safe tool dispatcher.
- `test_agent.py`, `test_ai_agent.py`: offline unit tests.
- `.env.example`: configuration template, no real credentials.

## Limitations and next steps

- Requires an OpenAI API key, model access, and network connectivity for real model calls.
- Model responses can be wrong; validation only restricts which tool can run.
- No real customer or email integrations are connected.
- For production: add authentication, authorization, audit logs, rate limits, input validation, secure secret storage, and user confirmation before side effects.
- Before the hackathon: practise explaining the flow and writing tests.
- Wait for the official challenge before creating the actual submission.

## Interview talking points

Why use an allowlist? Why validate model output? How do you handle malformed responses? What are prompt injection and least privilege? What would you test before enabling real tools?
