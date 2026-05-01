# Hugo Blog Starter

Simple blog project built with Hugo, using the `panr/hugo-theme-terminal` theme, and set up for static hosting on Hostinger.

## Requirements

- Hugo extended edition installed locally

## Theme

The active theme is installed locally in `themes/terminal`.

This site currently uses the theme defaults with no local layout or style overrides.

## Local development

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`.

## Create a new post

```bash
hugo new content posts/my-new-post.md
```

New posts start as drafts. Change `draft = true` to `draft = false` when ready to publish.

## Build for production

```bash
hugo
```

The production site is generated in `public/`.

## Deploy to Hostinger

1. Update `baseURL` in `hugo.toml` to your real domain, for example `https://blog.example.com/`.
2. Run `hugo` to generate the static site.
3. In Hostinger, open File Manager or connect with FTP.
4. Upload the contents of `public/` into `public_html/` if the blog is hosted at the domain root.
5. If the blog is hosted in a subfolder, upload the contents of `public/` into that folder and make sure `baseURL` matches the final URL.

## Project structure

- `content/`: posts and pages
- `themes/terminal/`: installed Hugo theme
- `public/`: generated output after a build
