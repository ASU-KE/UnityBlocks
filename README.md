# unityblocks
A suite of page building content blocks for the ASU Web Standards Unity WordPress theme.

## Development
Delete all `src/` folders execept the block needed to avoid build conflicts.
### initial submodule setup
- `git submodule update --init`
- `cd resources/asu-unity-stack`
- `git pull`
- `cd ..;`
- `git add resources/asu-unity-stack`
- commit and push

## ASU News
### Development
Submodule asu-unity-stack must be on jcox-unityblocks-news branch when a developer runs `npm run build` after working on the updated ASU News block. Custom changes that are needed to run ASU and KE news servies combined are on that branch.

## Hero
### Development
- `package.json` - must delete dependencies and overrides.
