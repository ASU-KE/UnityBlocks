# unityblocks
A suite of page building content blocks for the ASU Web Standards Unity WordPress theme.

## ASU News
### Initial setup/build
- Change git branch in `resources/asu-unity-stack` to branch with custom news components
- fix import "." in `UnityBlocks/node_modules/package.json` `".": "./dist/libCore.es.js"`
- `npm i --legacy-peer-deps` in `resources/asu-unity-stack/components-core`
- `npm i --legacy-peer-deps` in `resources/asu-unity-stack/components-carousel`
- `npm i --legacy-peer-deps` in `resources/asu-unity-stack/component-news`
- fix import "." in `resources/asu-unity-stack/components-carousel/node_modules` and `/resources/asu-unity-stack/packages/component-carousel/node_modules/@asu/components-core `
- Field 'browser' doesn't contain a valid alias configuration. Import/webpack issue. Change `@asu/components-core` to use local packages. `"../../../../components-core/src/components";`

- `npm run build `
## ASU News
### Development
Submodule asu-unity-stack must be on jcox-unityblocks-news branch when a developer runs `npm run build` after working on the asu-news block. Custom changes that are needed to run ASU and KE news servies combined are on that branch.
