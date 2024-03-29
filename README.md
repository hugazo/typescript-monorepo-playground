# 2023-ts-stack

Hi, i'm Hugo and this is my 2023 stack showcase.

This is built as a [Lerna Monorepo](https://lerna.js.org/docs/getting-started) to leverage code reusability and project isolation. I use [NX](https://lerna.js.org/docs/lerna-and-nx) as task runner.

Node version was fixed to v18.2.x using [NVM](https://github.com/nvm-sh/nvm#nvmrc).

## Local development

This monorepo is designed to be a one-for all development suite so i included a couple scripts that might help you

### Scripts

`pnpm dev:local`
Runs the build-packages script and starts the run-apps and run-emulator scripts concurrently.

`pnpm run-apps`
Runs the dev command in all the apps/* folders.

`pnpm list-repo`
Lists all the packages in the repository.

`pnpm build-packages`
Builds the TypeScript files in all the packages/* folders.

`pnpm run-emulator`
Runs the dev command in the firebase folder.
For documentation on how to set up the local Firebase emulator see [here](firebase/readme.md)
