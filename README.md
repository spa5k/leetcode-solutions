# LeetCode Solutions

This repository contains automated exports of LeetCode solutions. The solutions are fetched and updated daily using a GitHub Actions workflow.

## Features

- **Automated Export**: Solutions are automatically exported from LeetCode and committed to this repository once a day.
- **Daily Updates**: The repository is updated daily to ensure it contains the latest solutions.
- **Easy Access**: All solutions are organized and easily accessible.

## Workflow

The GitHub Actions workflow is configured to:

1. Checkout the repository.
2. Set up Python.
3. Install the `leetcode-export` package.
4. Run the export script to fetch the latest solutions.
5. Commit and push any new or updated solutions to the repository.

## Setup

To set up the workflow, ensure you have the following secrets configured in your repository:

- `LEETCODE_COOKIES`: Your LeetCode session cookies for authentication.
- `GITHUB_TOKEN`: The GitHub token for committing and pushing changes.

## Usage

To manually trigger the workflow, you can use the `workflow_dispatch` event in GitHub Actions.

## License

This project is licensed under the MIT License.
