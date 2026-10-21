"""Offline tests using a fake OpenAI-compatible client; no API key required."""
import json
import unittest
from types import SimpleNamespace
from ai_agent import decide, execute, parse_decision, run_tool

class FakeClient:
    def __init__(self, response):
        self.response = response
        self.chat = SimpleNamespace(completions=SimpleNamespace(create=self.create))
    def create(self, **kwargs):
        self.kwargs = kwargs
        return SimpleNamespace(choices=[SimpleNamespace(
            message=SimpleNamespace(content=self.response))])

class AgentV2Tests(unittest.TestCase):
    def test_invoice_decision(self):
        client = FakeClient('{"action":"invoice","reason":"User wants an invoice"}')
        result = execute("Please draft an invoice", client=client)
        self.assertEqual(result["decision"]["action"], "invoice")
        self.assertEqual(result["result"]["status"], "demo_only")
        self.assertEqual(client.kwargs["response_format"], {"type": "json_object"})

    def test_report_decision(self):
        self.assertEqual(decide("Summarize sales", client=FakeClient(
            '{"action":"report","reason":"Report requested"}')).action, "report")

    def test_empty_skips_model(self):
        self.assertEqual(decide("  ").action, "clarify")

    def test_invalid_json(self):
        with self.assertRaises(ValueError):
            parse_decision("not json")

    def test_unapproved_action(self):
        with self.assertRaises(ValueError):
            parse_decision('{"action":"delete_files","reason":"requested"}')
        with self.assertRaises(ValueError):
            run_tool("delete_files", "delete everything")

    def test_missing_reason(self):
        with self.assertRaises(ValueError):
            parse_decision('{"action":"email","reason":""}')

    def test_unexpected_fields(self):
        with self.assertRaises(ValueError):
            parse_decision('{"action":"email","reason":"ok","command":"rm -rf"}')

    def test_oversized_task(self):
        with self.assertRaises(ValueError):
            decide("x" * 4001, client=FakeClient("{}"))

if __name__ == "__main__":
    unittest.main()
