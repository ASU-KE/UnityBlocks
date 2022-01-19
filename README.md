# UnityBlocks
A suite of page building content blocks for the ASU Web Standards Unity WordPress theme.

## Available UnityBlocks
 * Anchor Menu (WIP)
 * Hero

## Known Issues
| Block       | Issues                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Anchor Menu | Positioning is not working correctly. Positioning behavior appears to depend upon the presence of the Unity React Header (currently in development for the UDS WP Theme). Some additional positioning rules or fixes may be needed in the upstream component.                                                                                                                                                    |
| Anchor Menu | Doesn't adapt postioning to WP Admin Bar. Overriding encapsulated component styles is challenging. We will probably need to submit some WP-specific rules to the Unity React component.                                                                                                                                                                                                                          |
| Hero        | The React component accepts an array of content sections, each with its own formatting props. This initial release only only uses a plain text input field and submits a single content paragraph. A future update should explore replacing text input with the `<RichText />` control, determine the scope of permissible of HTML content, as well as support for multiple content sections or paragraphs.      |
| Hero        | Content format settings, such as max width and color highlighting do not yet appear to be implemented in the React component.                                                                                                                                                                                                                                                                                    |
| Hero        | The React component also supports an array of custom CSS classes to be added to the wrapper containers for each type of content in the Hero: title, subtitle, and content. This has not been implemented in this initial release, due to it crowding the Inspector side panel even worse. This is recommended to be implemented in the future when the block settings are moved to the main block controls area. |

## Development Notes

The Unity React components libraries (e.g. @asu-design-system/components-core) are required dependencies for our Gutenberg blocks. Normally, the published packages available via npm should work fine for UnityBlocks. However, if we need to test feature updates in the asu-unity-stack that have not yet been published to npm, it is possible to link the UnityBlocks plugin to a local copy of the asu-unity-stack repo and the desired branch or commit that contains code we want to test with our plugin.

In order to run and build this plugin against a local copy of the [asu-unity-stack repo](https://github.com/ASU/asu-unity-stack), the unity repo needs to be cloned to your local machine and the UnityBlocks plugin needs to be manually linked to that local copy of the unity repo:

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

Note: This method using `npm link` is somewhat fragile and requires refreshing periodically. We have to use `npm link` with UnityBlocks and in the desired unity components folders, even though asu-unity-stack requires `yarn` to build and publish packages. Just keep in mind that the link can break and UnityBlocks will sometimes revert to pulling the published npm package which may not the version you are expecting to use.

### Register new block in library

1. Create new block folder in `src/blocks/`
2. `src/blocks.js` - Add import for new block: `import * as newBlock from './blocks/new-block';`
3. Add file to enqueue frontend script for new block: `includes/enqueue-blocks/new-block.php`
4. `includes/class-unityblocks-block-assets.php` - In `frontend_scripts()` add line to require_once enqueue script from step 3.
5. `includes/class-unityblocks-register-blocks.php` - In `register_blocks()`, add `register_block_type()` for new block.
6. `.dev./config/webpack.config.js` - Add block to compile frontend.js for block (approx. line 38)
