import os
import subprocess

def run_leetcode_export():
    cookies = os.getenv("LEETCODE_COOKIES")
    if not cookies:
        raise ValueError("LeetCode cookies not found in environment variables")

    process = subprocess.Popen(
        ["leetcode-export"],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    # Simulate the user input for the cookies
    process.stdin.write(f"{cookies}\n")
    process.stdin.flush()

    # Read the output and errors
    stdout, stderr = process.communicate()

    if process.returncode != 0:
        print(f"Error: {stderr}")
    else:
        print(stdout)

if __name__ == "__main__":
    run_leetcode_export()
