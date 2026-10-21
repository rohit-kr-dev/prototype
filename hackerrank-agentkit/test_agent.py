import unittest
from agent import agent


class AgentTests(unittest.TestCase):
    def test_invoice(self):
        self.assertEqual(agent("Create an invoice"), "Action: Generate an invoice")

    def test_report(self):
        self.assertEqual(agent("Generate a customer report"), "Action: Generate a report")

    def test_email(self):
        self.assertEqual(agent("Sort my EMAIL"), "Action: Categorize the email")

    def test_empty(self):
        self.assertEqual(agent("  "), "Action: Request clarification")


if __name__ == "__main__":
    unittest.main()
