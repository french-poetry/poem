# Makefile for Hugo + GitHub Pages deployment

# Usage:
#   make build   # Build the site with Hugo
#   make deploy  # Build and deploy to GitHub Pages
#   make serve   # Serve locally with correct baseURL and no fast render

build:
	hugo --baseURL="https://french-poetry.github.io/poem/" --cleanDestinationDir

deploy: build
	ghp-import -n -p -f public

serve:
	hugo server --baseURL="http://localhost:1313/" --disableFastRender 