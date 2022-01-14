# UnityBlocks
A suite of page building content blocks for the ASU Web Standards Unity WordPress theme.

## Development Notes

The Unity React components libraries are required dependencies for our Gutenberg blocks. At this time, the published packages available via npm are not compatible with this plugin's build system. In order to run and build this plugin, the [asu-unity-stack repo](https://github.com/ASU/asu-unity-stack) needs to be cloned to your local machine and the UnityBlocks plugin needs to be manually linked to the local copy of the unity repo.

1. Clone asu-unity-stack repo
2. cd into asu-unity-stack
3. `yarn install`
4. `yarn build`
5. `cd packages/components-core`
6. `npm link`
7. cd to the UnityBlocks plugin directory
8. `npm link "@asu-design-system/components-core"`
9. `npm install`
10. `npm run start` (for dev build) or `npm run build` (production)

## Register new block in library

1. Create new block folder in `src/blocks/`
2. `src/blocks.js` - Add import for new block: `import * as newBlock from './blocks/new-block';`
3. Add file to enqueue frontend script for new block: `includes/enqueue-blocks/new-block.php`
4. `includes/class-unityblocks-block-assets.php` - In `frontend_scripts()` add line to require_once enqueue script from step 3.
5. `includes/class-unityblocks-register-blocks.php` - In `register_blocks()`, add `register_block_type()` for new block.
