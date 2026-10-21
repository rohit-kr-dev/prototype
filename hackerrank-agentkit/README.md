# AgentKit — HackerRank Orchestrate preparation

A small **rule-based** Python task router to practise basic agent architecture. This is **not yet an LLM-powered AI agent** and is not the official hackathon submission.

## Run

Requires Python 3.10+; no external packages needed.

```bash
cd hackerrank-agentkit
python agent.py
```

Try: `Generate a customer report`, `Create an invoice`, `Categorize an email`.

## Test

```bash
python -m unittest test_agent.py -v
```

## Next steps

1. Replace keyword rules with structured LLM decisions.
2. Add safe, explicitly authorized tools.
3. Validate outputs and handle failures.
4. Document tests and design decisions for the technical interview.

**Note:** Wait for the official challenge statement before building your final hackathon submission.
