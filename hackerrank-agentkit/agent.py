"""AgentKit: a beginner-friendly, rule-based task router."""

def agent(task: str) -> str:
    task = task.strip().lower()
    if not task:
        return "Action: Request clarification"
    if "invoice" in task:
        return "Action: Generate an invoice"
    if "report" in task:
        return "Action: Generate a report"
    if "email" in task:
        return "Action: Categorize the email"
    if "customer" in task:
        return "Action: Check customer details"
    return "Action: Request clarification"


if __name__ == "__main__":
    print("Welcome to AgentKit! Type 'exit' to quit.")
    while True:
        task = input("Enter a task (or exit): ")
        if task.strip().lower() == "exit":
            break
        print(agent(task))
