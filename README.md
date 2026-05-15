# personalwebsite

This repository contains the source code for a bilingual personal portfolio website focused on modern mobile software engineering. The site is built with Jekyll, intended for GitHub Pages, and presents an English default experience with a Polish version available under `/pl/`.

All site source files, localized content, templates, and assets live in the `construction` directory.

## How to run locally
Run `npm start` from the repository root to launch the local Jekyll server and open http://localhost:4000 in your browser.

## Optional deps setup (cold start only)
If this is a fresh machine or a cold start, run these commands once before the first build:

```bash
ruby --version
gem install bundler
bundle install
```

This step is optional on machines where Ruby, Bundler, and the project gems are already installed.

## Build / rebuild
Run `npm run build` from the repository root to build or rebuild the static site into `construction/_site`.
