# Copilot Instructions for UnityBlocks

## Project Overview

UnityBlocks is a **WordPress block editor plugin** that provides custom Gutenberg blocks for the ASU Web Standards Unity (UDS) WordPress theme. It is built with React 18, `@wordpress/scripts`, and a custom Webpack configuration. The plugin registers 10 content blocks under the `unityblocks` category.

- **Plugin file**: `unityblocks.php` — registers blocks via `register_block_type()` from the `build/` directory.
- **Text domain**: `unityblocks`
- **WordPress**: ≥ 6.6, PHP ≥ 7.4
- **Node**: ≥ 18.12.1, npm ≥ 9.2.0 (pinned via Volta)

## Repository Layout

```
src/                          # Block source code (one folder per block)
  hero/                       # Example: block.json, index.js, edit.js, save.js, inspector.js, controls.js, frontend.js, icon.js
  news-grid/
  testimonial/
  asu-events/
  events-grid/
  image-gallery/
  anchor-menu/
  ranking-card/
  wchm/
resources/                    # Shared libraries and utilities
  unity/                      # Local component library (Hero, Testimonial, Card, etc.)
    components-core/          # Shared React components (used in edit.js and frontend.js)
    component-news/           # News-specific display components (Grid, List, Carousel)
    component-events/         # Events display component
    component-ke-events/      # KE Events variant
  asu-unity-stack/            # Git submodule → github.com/ASU/asu-unity-stack
  utils/                      # Utilities: hooks (SWR-based data fetching), transformers, helpers
build/                        # Compiled output (generated, committed to repo)
webpack.config.js             # Custom webpack extending @wordpress/scripts
unityblocks.php               # Main WordPress plugin file
package.json                  # Project configuration
```

## Block Architecture

Each block in `src/` follows a consistent 6–8 file pattern:

| File | Purpose |
|------|---------|
| `block.json` | Block metadata, attributes, script/style registrations (WordPress Block API v2/v3) |
| `index.js` | Block registration via `registerBlockType()` — imports edit, save, and metadata |
| `edit.js` | Editor-side React component — renders Inspector + Controls + preview component |
| `save.js` | Serializes attributes as `data-*` attributes on a wrapper `<div>` |
| `frontend.js` | Client-side hydration — queries DOM, parses `data-*` attributes, creates React root |
| `inspector.js` | Sidebar panel controls (InspectorControls with PanelBody, TextControl, etc.) |
| `controls.js` | Toolbar controls (BlockControls, MediaUpload) |
| `icon.js` | Block icon SVG |

### Key Patterns

- **Attribute flow**: Attributes are defined in `block.json` → destructured from `props.attributes` in edit/save → passed to `setAttributes()` for updates.
- **Save/Frontend pattern**: `save.js` outputs a `<div>` with all attributes as JSON-encoded `data-*` attributes. `frontend.js` reads these from the DOM and hydrates React components using `createRoot()` (React 18).
- **Component sources**: Some blocks import from the `@asu-unity-stack` webpack alias (git submodule), others from `@asu/*` npm packages, and others from local `resources/unity/` components.

### Webpack Aliases

Defined in `webpack.config.js`:

- `@resources` → `resources/`
- `@unity-components` → `resources/unity/component-news/src/components`
- `@asu-unity-stack` → `resources/asu-unity-stack/`

Both `src/` and `resources/` are included in Babel transpilation.

## Build & Development

### NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Production build via `wp-scripts build` |
| `npm start` | Watch mode for development via `wp-scripts start` |
| `npm run manifest` | Generate `build/blocks-manifest.php` |
| `npm run format` | Format code via `wp-scripts format` |
| `npm run lint:js` | Lint JavaScript via `wp-scripts lint-js` |
| `npm run lint:css` | Lint styles via `wp-scripts lint-style` |
| `npm run plugin-zip` | Create distributable zip |

### Known Build Issues

1. **`@asu` scoped packages require authentication**: The `.npmrc` points `@asu:registry` to `https://npm.pkg.github.com/`. Running `npm install` will fail with a 401 error unless a valid GitHub token with `read:packages` scope is configured. The packages affected are:
   - `@asu/component-carousel`
   - `@asu/component-events`
   - `@asu/components-core`
   - `@asu/unity-react-core`

   **Workaround**: If you cannot authenticate, note that some blocks import directly from the `@asu-unity-stack` git submodule (aliased via webpack) rather than npm packages. For code-only changes that don't require a full build (e.g., editing `block.json` attributes, modifying inspector controls, or updating text/labels), the build step can be skipped.

2. **Git submodule must be initialized**: Run `git submodule update --init` before building. The `resources/asu-unity-stack` submodule provides source components used by several blocks (hero, anchor-menu).

3. **Node version**: The project pins Node 18.12.1 and npm 9.2.0 via Volta. The build tooling (`@wordpress/scripts`) is compatible with Node 18+.

## Code Style & Linting

- **EditorConfig**: tabs for PHP, 2-space indentation for JS/CSS/JSON/YAML.
- **Linting**: Uses `@wordpress/scripts` default ESLint and Stylelint configurations (no custom config files).
- **Formatting**: `npm run format` applies Prettier via `@wordpress/scripts`.

## Testing

This project does **not** have unit or integration tests. There is no test infrastructure to run.

## CI/CD

- **GitHub Actions**: `azure-devops-sync.yml` syncs issues to Azure DevOps. There is a Copilot code review workflow and Dependabot updates.
- No build/test CI pipeline — the build is run locally and the `build/` directory is committed.

## Making Changes

### Adding or modifying a block

1. Edit files in `src/<block-name>/`.
2. Follow the existing file pattern (block.json, index.js, edit.js, save.js, inspector.js, controls.js, frontend.js, icon.js).
3. Attributes must be defined in `block.json` with types and defaults.
4. The `save.js` must serialize all attributes as `data-*` attributes.
5. The `frontend.js` must parse those `data-*` attributes and render the component.

### Adding a new block

1. Create a new folder under `src/` with the block name.
2. Create `block.json` following the WordPress Block API schema. Set `"category": "unityblocks"`.
3. Implement the standard file set (index.js, edit.js, save.js, etc.).
4. Run `npm run manifest` to regenerate `build/blocks-manifest.php`.
5. Run `npm run build` to compile.

### Modifying shared components

- Shared components live in `resources/unity/` — changes here affect all blocks that import them.
- Utility hooks are in `resources/utils/hooks/` (e.g., `use-fetch-wp-rest-taxonomy.js` for SWR-based REST API fetching).
- Transformer functions are in `resources/utils/transformers/`.

### Working with the submodule

```sh
git submodule update --init
cd resources/asu-unity-stack
git pull
cd ../..
git add resources/asu-unity-stack
```

## Important Notes

- The `build/` directory is committed to the repository — it must be rebuilt and committed after source changes.
- React 18 is enforced via `overrides` in `package.json`.
- Some blocks use `deprecated` arrays in their `index.js` for backwards compatibility with older attribute schemas.
- The `unityblocks.php` plugin file handles WordPress version compatibility (6.8+, 6.7, pre-6.7) for block registration.
