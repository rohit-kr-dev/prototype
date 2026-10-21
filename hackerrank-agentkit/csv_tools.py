"""Read-only CSV analytics tools. No arbitrary paths, writes, or external access."""
import csv
from decimal import Decimal, InvalidOperation
from pathlib import Path

DATA_DIR = (Path(__file__).resolve().parent / "data").resolve()
MAX_BYTES = 2_000_000
REQUIRED = {"customer", "amount", "status"}

def sales_summary(filename: str = "sample_sales.csv") -> dict:
    """Summarize a CSV in the project's data/ folder (demo or user-provided data)."""
    if not isinstance(filename, str) or not filename or Path(filename).name != filename:
        raise ValueError("Provide a simple CSV filename without directories")
    if not filename.lower().endswith(".csv"):
        raise ValueError("Only CSV files are allowed")
    path = (DATA_DIR / filename).resolve()
    if not path.is_relative_to(DATA_DIR):
        raise ValueError("Path is outside the data folder")
    if not path.is_file():
        raise ValueError("CSV file not found in data/")
    if path.stat().st_size > MAX_BYTES:
        raise ValueError("CSV file exceeds 2 MB")
    total = Decimal("0")
    paid = Decimal("0")
    count = 0
    customers = set()
    statuses = {}
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        if not reader.fieldnames or not REQUIRED.issubset(set(reader.fieldnames)):
            raise ValueError("CSV requires customer,amount,status columns")
        for row in reader:
            count += 1
            if count > 10000:
                raise ValueError("Too many CSV rows")
            customer = (row["customer"] or "").strip()
            status = (row["status"] or "").strip().lower()
            if not customer or not status:
                raise ValueError(f"Missing customer/status in row {count}")
            try:
                amount = Decimal((row["amount"] or "").strip())
            except InvalidOperation as exc:
                raise ValueError(f"Invalid amount in row {count}") from exc
            if not amount.is_finite() or amount < 0:
                raise ValueError(f"Invalid amount in row {count}")
            customers.add(customer)
            statuses[status] = statuses.get(status, 0) + 1
            total += amount
            if status == "paid":
                paid += amount
    return {"source": filename, "rows": count, "unique_customers": len(customers),
            "total_amount": str(total), "paid_amount": str(paid),
            "unpaid_or_other_amount": str(total - paid), "status_counts": statuses}
