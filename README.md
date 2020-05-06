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
    "prettier": "@softwareventures"
}
```

## pre-commit hook

Recommended: Configure husky and lint-staged to automatically reformat changes before they are
committed.

```bash
npm install --save-dev husky lint-staged
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
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{css,htm,html,js,json,jsx,less,md,sass,ts,tsx,yaml,yml,xml}": "prettier --write"
    }
}
```
