import unittest
from pathlib import Path
from tempfile import TemporaryDirectory
from unittest.mock import patch
from types import SimpleNamespace
import csv_tools
from csv_agent import handle, select_action

class FakeClient:
    def __init__(self, content):
        self.chat = SimpleNamespace(completions=SimpleNamespace(create=lambda **kwargs:
            SimpleNamespace(choices=[SimpleNamespace(message=SimpleNamespace(content=content))])))

class CsvAgentTests(unittest.TestCase):
    def test_sample_summary(self):
        result = csv_tools.sales_summary()
        self.assertEqual(result["rows"], 4)
        self.assertEqual(result["unique_customers"], 3)
        self.assertEqual(result["total_amount"], "28000")
        self.assertEqual(result["paid_amount"], "17000")
        self.assertEqual(result["status_counts"]["pending"], 1)

    def test_ai_routes_to_real_tool(self):
        result = handle("Summarize sales", FakeClient('{"action":"sales_summary","reason":"requested"}'))
        self.assertEqual(result["result"]["rows"], 4)

    def test_clarification(self):
        result = handle("hello", FakeClient('{"action":"clarify","reason":"not a sales request"}'))
        self.assertIn("message", result["result"])

    def test_reject_unknown_action(self):
        with self.assertRaises(ValueError):
            select_action("delete files", FakeClient('{"action":"delete_files","reason":"x"}'))

    def test_reject_invalid_json(self):
        with self.assertRaises(ValueError):
            select_action("summary", FakeClient("broken"))

    def test_path_traversal(self):
        for name in ("../secret.csv", "/tmp/test.csv", "folder/test.csv", "x.txt"):
            with self.subTest(name=name), self.assertRaises(ValueError):
                csv_tools.sales_summary(name)

    def test_missing_csv(self):
        with self.assertRaises(ValueError):
            csv_tools.sales_summary("nonexistent.csv")

    def test_invalid_amount(self):
        with TemporaryDirectory() as tmp:
            p = Path(tmp) / "bad.csv"
            p.write_text("customer,amount,status\nAlice,-2,paid\n", encoding="utf-8")
            with patch.object(csv_tools, "DATA_DIR", Path(tmp).resolve()):
                with self.assertRaises(ValueError):
                    csv_tools.sales_summary("bad.csv")

    def test_empty_request(self):
        self.assertEqual(select_action(" ")["action"], "clarify")

if __name__ == "__main__":
    unittest.main()
