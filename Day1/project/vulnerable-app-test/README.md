# Vulnerable App Test

This is a simple Node.js project designed to test vulnerability scanners like Snyk.

It deliberately includes outdated versions of dependencies that have known vulnerabilities (such as Prototype Pollution in lodash).

## Usage

1. Run `npm install` to install the dependencies.
2. Run your Snyk scan (e.g., `snyk test`).
