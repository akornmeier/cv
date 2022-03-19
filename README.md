# Tony Kornmeier's CV Site

- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework
- [Vite](https://vitejs.dev) - Next Generation of Frontend Tooling
- [Heroicons](https://heroicons.com) - Beautiful hand-crafted SVG icons.

If you _"Include all branches"_ during the process, the template will already be online on GitHub Pages. The URL should be _https://\<USERNAME\>.github.io/\<REPO-NAME\>/_

Or you only copy the _main_ branch and deploy the project to GitHub Pages yourself.

More information about template repositories on the [GitHub Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)

## Usage

`package.json` provides four scripts for development, build, preview and deploy. The first three are associated with Vite. The script _deploy_ uses [push-dir](https://github.com/L33T-KR3W/push-dir) to push the `dist` directory to the `gh-pages` branch.

In order to deploy the local changes you made:

```sh
# Clear working tree
$ git add .
$ git commit -m "Before deploy"

# build project to dist directory
$ npm run build

# Use push-dir to push dist to gh-pages
$ npm run deploy
```
