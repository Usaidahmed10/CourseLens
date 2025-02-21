import json

def extract_events(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    event_data = {}
    current_event = None
    
    for line in lines:
        line = line.strip()
        if line.startswith("event:"):
            current_event = line.split(": ")[1]
            event_data[current_event] = []
        elif line.startswith("data:") and current_event:
            json_data = line.split("data: ", 1)[1]
            event_data[current_event].extend(json.loads(json_data))
    
    result = {
        "search_results": event_data.get("search_results", []),
        "insights_batch": event_data.get("insights_batch", []) if event_data.get("insights_batch") else None
    }
    
    return json.dumps(result, indent=4)

# Usage
file_path = r"C:\Users\usaid\OneDrive\Desktop\event search_results.txt"
output_json = extract_events(file_path)
print(output_json)



def add_insight_metrics(json_data):
    """
    Updates each insight in insights_batch by adding:
    - total_upvotes: Sum of upvotes from all supporting comments.
    - believe_that: Percentage of upvotes for this insight out of total upvotes in all insights.
    """
    # Convert JSON string to a dictionary (if it's not already a dictionary)
    if isinstance(json_data, str):
        insights_data = json.loads(json_data)
    else:
        insights_data = json_data

    # Ensure insights_batch exists and is not empty
    if not insights_data or "insights_batch" not in insights_data or not insights_data["insights_batch"]:
        return json.dumps(insights_data, indent=4)  # Return unchanged JSON

    insights = insights_data["insights_batch"]

    # Compute total upvotes across all insights
    total_upvotes_all = sum(
        sum(comment.get("upvotes", 0) for comment in insight.get("supporting_comments", []))
        for insight in insights
    )

    # Update each insight with total_upvotes and believe_that percentage
    for insight in insights:
        # Calculate total_upvotes for this insight
        total_upvotes = sum(comment.get("upvotes", 0) for comment in insight.get("supporting_comments", []))
        
        # Calculate believe_that percentage
        believe_that = (total_upvotes / total_upvotes_all * 100) if total_upvotes_all > 0 else 0

        # Insert the new fields
        insight["total_upvotes"] = total_upvotes
        insight["believe_that"] = round(believe_that, 2)  # Rounded to 2 decimal places

    return json.dumps(insights_data, indent=4)


# Example Usage
output_json = extract_events(r"C:\Users\usaid\OneDrive\Desktop\event search_results.txt")  # Assume this function already provided output
updated_json = add_insight_metrics(output_json)

# Print or save the updated JSON
print(updated_json)

# Optional: Save to a file
with open("processed_insights.json", "w", encoding="utf-8") as output_file:
    output_file.write(updated_json)

