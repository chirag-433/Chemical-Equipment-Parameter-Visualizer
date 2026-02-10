import pandas as pd


def analyze_csv(file):
    """
    Analyze the uploaded CSV and return a summary.

    Expected columns (case-sensitive):
      Equipment Name, Type, Flowrate, Pressure, Temperature
    """
    df = pd.read_csv(file)

    required_columns = [
        "Equipment Name",
        "Type",
        "Flowrate",
        "Pressure",
        "Temperature",
    ]

    missing = [col for col in required_columns if col not in df.columns]
    if missing:
        # This message will be surfaced back to the frontend via upload_csv
        raise ValueError(
            f"Missing columns in CSV: {', '.join(missing)}. "
            f"CSV must have columns: {', '.join(required_columns)}"
        )

    summary = {
        "total_records": len(df),
        "avg_flowrate": float(df["Flowrate"].mean()),
        "avg_pressure": float(df["Pressure"].mean()),
        "avg_temperature": float(df["Temperature"].mean()),
        "type_distribution": df["Type"].value_counts().to_dict(),
    }

    return summary
