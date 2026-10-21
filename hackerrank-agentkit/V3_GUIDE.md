# AgentKit v3 — Read-only CSV reporting agent

This is a **practice implementation** for HackerRank Orchestrate, not the official challenge.

## New capability

`csv_agent.py` uses an OpenAI model to select `sales_summary` or `clarify`. When a summary is requested, it invokes the **real Python CSV tool** in `csv_tools.py`, which reads `data/sample_sales.csv` and calculates counts and totals with `Decimal`.

The sample CSV is fictional. **No personal, business, or CRM data has been accessed.**

## Run (after v2 setup)

```powershell
python -m unittest discover -p "test*.py" -v
python csv_agent.py
```

Try `Summarize the sales CSV`. An API key is required for the AI router, but **not** for tests. You can run the CSV tool offline:

```powershell
python -c "from csv_tools import sales_summary; print(sales_summary())"
```

## Safety design

- Reads only a simple filename from the local `data/` directory.
- Prevents directory traversal, enforces a 2 MB size limit and 10,000-row cap.
- Uses a fixed allowlist of actions; the model never generates executable code.
- No write, delete, email, network or CRM operations.
- Rejects malformed model decisions and invalid numeric data.
- The AI only chooses an action; Python computes all numeric results.

## Next exercises

1. Explain why an LLM should not calculate financial totals directly.
2. Add a unit test for missing CSV columns.
3. Add an optional `status` filter to the summary.
4. Only after the official hackathon prompt is released, design a submission matching its exact requirements.
