# linguist-colors

Generate colors for programming language or file,base on [gitHub-linguist](https://github.com/github-linguist/linguist).

## Install

You can install it in the following way:

via npm:

```shell
npm i linguist-colors
```

via yarn:

```shell
yarn add linguist-colors
```

via pnpm:

```shell
pnpm install linguist-colors
```

## Usage

```typescript
import linguistColors from "linguist-colors"

// Specify programming language to get color
linguistColors.getLangColor("TypeScript", 'HEX')
// Specify file extension to get color
linguistColors.getExtensionColor('.ts', 'HEX')
```

## Thanks

The project is refactored and improved based on [LorenzoBloedow/programming-colors](https://github.com/LorenzoBloedow/programming-colors).

## LICENSE

Code released under the [MIT License](./LICENSE). Docs released under Creative Commons.
