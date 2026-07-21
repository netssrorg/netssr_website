# NetSSR — website

A static site for NetSSR (association loi 1901), ready to deploy on GitHub Pages.
No build step, no dependencies — plain HTML/CSS/JS.

## Files

```
index.html      the whole site (one page)
styles.css      design system + layout
script.js       small interaction for the protocol-field diagram
assets/         favicon and other files go here
```

## Local preview

No server needed — just open `index.html` in a browser. If you want a local
server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
