# unityblocks
A suite of page building content blocks for the ASU Web Standards Unity WordPress theme.

## ASU News
### Initial setup/build
- Change git branch in `resources/asu-unity-stack` to branch with custom news components
- `npm i --legacy-peer-deps` in `resources/asu-unity-stack/components-core`
- `npm run build src/asu-news`
## News grid
### Development
Starting v1.2.1: Submodule asu-unity-stack must be on jcox-unityblocks-news branch when a developer runs `npm run build` after working on the news grid. Custom changes that are needed to run ASU and KE news servies combined are on that branch.
