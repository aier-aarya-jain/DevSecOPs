import os

def main():
    # Read the secret token from environment variables
    secret_token = os.environ.get("MY_SECRET_TOKEN")
    
    if secret_token:
        # DO NOT print the actual secret in a real project!
        # Here we just print the length and a masked version to prove it was loaded.
        masked_token = secret_token[:2] + "*" * (len(secret_token) - 4) + secret_token[-2:] if len(secret_token) > 4 else "***"
        print(f"Successfully loaded secret token!")
        print(f"Token length: {len(secret_token)}")
        print(f"Masked token: {masked_token}")
    else:
        print("Error: MY_SECRET_TOKEN environment variable is not set.")
        # Exit with error code so the GitHub Action fails if the secret is missing
        exit(1)

if __name__ == "__main__":
    main()
