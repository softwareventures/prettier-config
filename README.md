# prettier-config

Standard [Prettier](https://prettier.io/) configuration for
[Software Ventures Limited](https://softwareventures.co.uk/).

## Install

```bash
npm install --save-dev @softwareventures/prettier-config
```

or for yarn users:

```bash
yarn add --dev @softwareventures/prettier-config
```

## Usage

Add to `package.json`:

```json
{
    "prettier": "@softwareventures/prettier-config"
}
```

## pre-commit hook

Recommended: Configure husky and precise-commits to automatically reformat
changes before they are committed.

```bash
npm install --save-dev husky precise-commits
```

or

```bash
yarn add --dev husky precise-commits
```

Then add to `package.json`:

```json
{
    "husky": {
        "hooks": {
            "pre-commit": "precise-commits"
        }
    }
}
```
