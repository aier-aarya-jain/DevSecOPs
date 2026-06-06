# GitHub Secrets Demo

This is a bare minimum project to illustrate how to store and use GitHub Secrets in a repository.

## Files included

- `main.py`: A simple Python script that reads the `MY_SECRET_TOKEN` environment variable and prints a masked version of it to prove it was loaded.
- `.github/workflows/demo.yml`: A GitHub Actions workflow that runs `main.py` and securely passes the GitHub Secret to it as an environment variable.

## How to set this up

1. Push this code to a GitHub repository.
2. Go to your repository on GitHub.
3. Click on **Settings** > **Secrets and variables** > **Actions**.
4. Click on **New repository secret**.
5. Name the secret exactly `MY_SECRET_TOKEN`.
6. Put any text you want as the secret value (e.g., `super_secret_api_key_12345`).
7. Click **Add secret**.

## How to test

1. Go to the **Actions** tab in your repository.
2. Select the **Demonstrate GitHub Secrets** workflow on the left.
3. Click **Run workflow** (since this workflow has a `workflow_dispatch` trigger, you can run it manually).
4. Wait for the job to finish and click on it to see the logs.
5. In the logs for the "Run script with secret" step, you should see the script successfully read and masked your secret.

> **Note:** GitHub Actions automatically redacts recognized secrets in the logs, replacing them with `***`. However, our script also implements its own basic masking logic for demonstration purposes.
