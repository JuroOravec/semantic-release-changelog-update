# semantic-release-changelog-update

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/JuroOravec/semantic-release-changelog-update/tree/master/docs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://tldrlegal.com/license/mit-license)

[![Build Status](https://travis-ci.org/JuroOravec/semantic-release-changelog-update.svg?branch=master)](https://travis-ci.org/JuroOravec/semantic-release-changelog-update)
[![codecov](https://codecov.io/gh/JuroOravec/semantic-release-changelog-update/branch/master/graph/badge.svg)](https://codecov.io/gh/JuroOravec/semantic-release-changelog-update)
[![Known Vulnerabilities](https://snyk.io/test/github/JuroOravec/semantic-release-changelog-update/badge.svg)](https://snyk.io/test/github/JuroOravec/semantic-release-changelog-update)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/JuroOravec/semantic-release-changelog-update.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JuroOravec/semantic-release-changelog-update/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/JuroOravec/semantic-release-changelog-update.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JuroOravec/semantic-release-changelog-update/context:javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/88afcf890743f774a97d/maintainability)](https://codeclimate.com/github/JuroOravec/semantic-release-changelog-update/maintainability)

<!--
One-liner explaining the purpose of the module
-->

Update changelog using [semantic-release](https://github.com/semantic-release/semantic-release) without triggering release. Use as a plugin or a standalone command.

#### 🏠 [Homepage](https://github.com/JuroOravec/semantic-release-changelog-update#readme) | 🗃 [Repository](https://github.com/JuroOravec/semantic-release-changelog-update) | 📦 [NPM](https://www.npmjs.com/package/semantic-release-changelog-update) | 📚 [Documentation](https://github.com/JuroOravec/semantic-release-changelog-update/tree/master/docs) | 🐛 [Issue Tracker](https://github.com/JuroOravec/semantic-release-changelog-update/issues)

## 🪑 Table of Content

- [🧰 Features](#-features)
- [👶 Install](#-install)
- [🚀 Usage](#-usage)
- [🤖 API](#-api)
- [🔮 Details](#-details)
- [⏳ Changelog](#-changelog)
- [🛠 Developing](#-developing)
- [🏗 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [🧙 Contributors](#-contributors)
- [⭐ Show your support](#-show-your-support)
- [🔗 Related Projects](#-related-projects)
- [👨‍🔧 Maintainers](#-maintainers)
- [📝 License](#-license)

## 🧰 Features

<!--
A brief description of your project, what it is used for and how does life get
awesome when someone starts to use it.

- Note and briefly describe any key concepts (technical, philosophical, or both) important to the user’s understanding.
- Link to any supplementary blog posts or project main pages.
- State if it is out-of-the-box user-friendly, so it’s clear to the user.
- List its most useful/innovative/noteworthy features.
- State its goals/what problem(s) it solves.
-->

Update changelog using
[semantic-release](<(https://github.com/semantic-release/semantic-release)>)
without triggering release.

Useful for updating changelog on pull request CI builds. Such updated changelog is commited to the branch that triggered the build, so the changelog can be reviewed before the branch is merged.

The plugin updates changelog only when latest changelog version is below or at package.json's version, so it's safe to use in CI builds.

Use either as a plugin or call it as a standalone function.

Works with pull-request-triggered CI builds. Branches are detected from [env-ci's](https://github.com/pvdlg/env-ci) `prBranch` and `branch`.

To work with push-triggered CI builds, specify the `headBranch` to be [env-ci's](https://github.com/pvdlg/env-ci) `branch`.

To use outside CI environment, specify both `headBranch` and `baseBranch` options.

## 👶 Install

<!--
- Getting it
- Installing It
- Configuring It
- Running it
-->

### Requirements

- `git` cli with the permission to push and commit to remote
- `@semantic-release/commit-analyzer` if used as a plugin.

### Installation

```sh
npm install semantic-release-changelog-update
```

## 🚀 Usage

<!-- Clear, _runnable_ example of usage -->

> Note: This plugin works with `git` cli and temporarily creates a branch on remote named `temp/semantic-release/<branch-name>`.
>
> The plugin changes the branch that semantic-release is working with. Therefore it is not recommended to use it with other plugins that might depend on commits, or that intend to release something, as these would be working with the temporary branch.

### As a function

```js
import changelogUpdate from 'semantic-release-changelog-update';

// Returns promise. Once the promise is resolved the `headBranch` will have
// a new commit with the updated changelog created and pushed to remote.
changelogUpdate({
  options: {
    // To update the changelog without a release, semantic-release is started
    // on non-release branch. Hence we need to allow it to start on non-release
    // branches, and instead specify the release branches in
    // `pluginOptions.releaseBranches`
    branches: [
      // branch that headBranch is based off. You can think of it as
      // the branch that headBranch should merge to
      baseBranch,
      // branch that will have the changelog updated
      headBranch,
      // other unrelated branches
      otherBranch,
    ],
  },
  pluginOptions: {
    headBranch, // defaults to envCi.prBranch
    baseBranch, // defaults to envCi.branch
    changelogFile, // defaults to `./CHANGELOG.md`
    releaseBranches: [baseBranch],
  },
});
```

The function accepts an object with 3 properties:

- `options` - options object passed as 1st argument to semantic-release
- `environment` - env object passed as 2nd argument to semantic-release
- `pluginOptions` - options object specific to the plugin, same as defining
  [plugins options](#options) via `config.plugins`.

### As a plugin

> To use the package as a plugin, you must run semantic-release with `dryRun` and `noCi` flags (`dryRun` flag can be disabled if [explicitly configured](#options)).

Add the plugin to
[semantic-release config](https://github.com/semantic-release/semantic-release/blob/431d571a7b7284b2029a55da68a44c65d7c16451/docs/usage/configuration.md#plugins).

The plugin must go _before_ `@semantic-release/commit-analyzer` to work properly.

```json
{
  "dryRun": true,
  "ci": false,
  ...
  "plugins": [
    "semantic-release-changelog-update/plugin",
    "@semantic-release/commit-analyzer"
  ]
}
```

If you are using `release.config.js`, you can specify the plugin path also by using the `plugin` attribute.

```js
const changelogUpdate = require('semantic-release-changelog-update');
module.exports = {
  dryRun: true,
  ci: false,
  ....
  plugins: [
    changelogUpdate.plugin,
    "@semantic-release/commit-analyzer"
  ]
}
```

You can pass [options](#options) like this:

```json
{
  ....
  "plugins": [
    [
      "semantic-release-changelog-update/plugin",
      {
        "message": "custom commit message",
        "prepareChangelog": "./path/to/func"
      }
    ],
    "@semantic-release/commit-analyzer"
  ]
}
```

Then call semantic-release, e.g. with cli.

```sh
npx semantic-release --no-ci --dry-run
```

## 🤖 API

TypeDoc API documentation can be [found here](https://github.com/JuroOravec/semantic-release-changelog-update/blob/master/docs/typedoc/README.md).

### Options

| Option             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                  | Default                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `baseBranch`       | Name of the git branch that will be used as a base for rebase. This is a branch that should contain all commits that are reported in the changelog.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | string                                                                                                                                                                | [env-ci's `prBranch`](https://github.com/pvdlg/env-ci)                                                                                |
| `headBranch`       | Name of the git branch whose commits will be rebased onto beadBranch. This is a branch that should the commits with new changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | string                                                                                                                                                                | [env-ci's `branch`](https://github.com/pvdlg/env-ci)                                                                                  |
| `releaseBranches`  | The plugin is intended to be triggered only when the branch we are applying the changes to (_base branch_) is one of the release branches as defined in [semantic-release `branches` option](https://github.com/semantic-release/semantic-release/blob/431d571a7b7284b2029a55da68a44c65d7c16451/docs/usage/configuration.md#branches). <br><br>This is different from semantic-release, which checks if the _current / head_ branch is one of the release branches. `releaseBranches` thus defines when the plugin should be triggered. <br><br>Generally, this value should be the same as the `branches` option used in semantic-release config. It accepts the same format as [semantic-release `branches` option](https://github.com/semantic-release/semantic-release/blob/431d571a7b7284b2029a55da68a44c65d7c16451/docs/usage/configuration.md#branches). | (string \| [BranchOption](https://github.com/semantic-release/semantic-release/blob/431d571a7b7284b2029a55da68a44c65d7c16451/docs/usage/configuration.md#branches))[] | `['+([0-9])?(.{+([0-9]),x}).x', 'master', 'next', 'next-major', {name: 'beta', prerelease: true}, {name: 'alpha', prerelease: true}]` |
| `pattern`          | Regular expression (RegExp or string) to use to find and capture the latest release version from changelog. Captured version must must be either first capture group or group tagged as `version`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | string \| Regexp                                                                                                                                                      | Matches `1.2.3` in `## [1.2.3](https://...`                                                                                           |
| `prepareChangelog` | Function that modifies the changelog file content before the file is parsed for version and changes are inserted. <br><br>Signature:<br>`(content: string, config: object, context: object) => string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | function                                                                                                                                                              | -                                                                                                                                     |
| `requireDryRun`    | Whether an error should be raised if the plugin is used without the [semantic-release's](https://github.com/semantic-release/semantic-release/blob/431d571a7b7284b2029a55da68a44c65d7c16451/docs/usage/configuration.md#dryrun) `dryRun` flag.<br><br>Note that changing this option is highly discouraged as this plugin is not indended to be used in release enviroment. If you need to update changelog during release, use [@semantic-release/changelog] plugin instead.                                                                                                                                                                                                                                                                                                                                                                                   | boolean                                                                                                                                                               | `true`                                                                                                                                |

---

The plugin additionally accepts options that are passed to other plugin it uses:

| Plugin                                                                                                                                                               | Notes                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [@semantic-release/git](https://github.com/semantic-release/git/tree/905f113a577c55cd9bb0a37ea3504d9e8ee2dfa2#options)                                               | The `assets` option is ignored and overriden by `changelogFile`. |
| [@semantic-release/changelog](https://github.com/semantic-release/changelog/tree/bede4d04b0a9ec13a5661bf0424465176486f3fd#options)                                   | All options are passed forward.                                  |
| [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator/tree/a0f6c8941c38ed884546b03f51a71a3f6fc1c665#configuration) | All options are passed forward.                                  |

## 🔮 Details

<!-- Core Technical Concepts/Inspiration

- Potentially unfamiliar terms link to informative sources
- Why does it exist?
- Frame your project for the potential user.
- Compare/contrast your project with other, similar projects so the user knows how it is different from those projects.
- Highlight the technical concepts that your project demonstrates or supports. Keep it very brief.
- Keep it useful.
- Performs [cognitive funneling](https://github.com/noffle/art-of-readme#cognitive-funneling)
- Caveats and limitations mentioned up-front
-->

In the background, this plugin does the following:

- Creates a temporary branch named `temp/semantic-release/<branch-name>`. This branch is based on `baseBranch` with commits rebased from
  `headBranch` on top of it, so we have a branch that contains all
  (current + new) commits without polluting any working branches.
- The temporary branch is pushed to remote so `commit-analyzer` can find it and extract commits.
- After `commit-analyzer`, the plugin calls `release-notes-generator`, `changelog` and `git` passing the temporary branch as the branch these plugins should work against. This updates the changelog and pushes it to the temporary branch.
- Lastly, the commit containing the changelog update is pushed to the `headBranch` and the temporary branch is removed.

## ⏳ Changelog

This projects follows semantic versioning. The
[changelog can be found here](https://github.com/JuroOravec/semantic-release-changelog-update/blob/master/CHANGELOG.md).

## 🛠 Developing

If you want to contribute to the project or forked it,
[this guide will get you up and going](https://github.com/JuroOravec/semantic-release-changelog-update/blob/master/docs/developing.md).

## 🏗 Roadmap

No roadmap currently planned for this package. However, if you have ideas how it
could be improved, please be sure to share it with us by [opening an issue](#🤝-contributing).

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Thank you ❤️

Feel free to dive in! See [current issues](https://github.com/JuroOravec/semantic-release-changelog-update/issues),
[open an issue](https://github.com/JuroOravec/semantic-release-changelog-update/issues/new), or [submit PRs](https://github.com/JuroOravec/semantic-release-changelog-update/compare).

How to report bugs, feature requests, and how to contribute and what conventions we use is all described in the [contributing guide](https://github.com/JuroOravec/semantic-release-changelog-update/tree/master/docs/CONTRIBUTING.md).

When contributing we follow the
[Contributor Covenant](https://contributor-covenant.org/version/1/3/0/).
See our [Code of Conduct](https://github.com/JuroOravec/semantic-release-changelog-update/tree/master/docs/CODE_OF_CONDUCT.md).

## 🧙 Contributors

Contributions of any kind welcome. Thanks goes to these wonderful people ❤️

### Recent and Top Contributors

<!-- Hall of Fame uses 8 links (7 users + 1 stats), see https://github.com/sourcerer-io/hall-of-fame#faq -->

[![Hall of Fame Contributor 1](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/0)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/0)
[![Hall of Fame Contributor 2](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/1)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/1)
[![Hall of Fame Contributor 3](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/2)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/2)
[![Hall of Fame Contributor 4](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/3)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/3)
[![Hall of Fame Contributor 5](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/4)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/4)
[![Hall of Fame Contributor 6](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/5)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/5)
[![Hall of Fame Contributor 7](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/6)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/6)
[![Hall of Fame Contributor 8](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/images/7)](https://sourcerer.io/fame/JuroOravec/JuroOravec/semantic-release-changelog-update/links/7)

<!-- markdownlint-disable -->

<sub><em>Generated using [Hall of Fame](https://github.com/sourcerer-io/hall-of-fame#readme).</em></sub>

<!-- markdownlint-enable -->

### All Contributors

Contribution type [emoji legend](https://allcontributors.org/docs/en/emoji-key)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

_No additional contributors. Be the first one!_

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- markdownlint-disable -->

<sub><em>This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.</em></sub>

<!-- markdownlint-enable -->

## ⭐ Show your support

Give a ⭐️if this project helped you!

## 🔗 Related Projects

This project is a plugin for [semantic-release](https://github.com/semantic-release/semantic-release).

## 👨‍🔧 Maintainers

👤 **Juro Oravec**

- Twitter: [@JuroOravec](https://twitter.com/JuroOravec)
- GitHub: [@JuroOravec](https://github.com/JuroOravec)
- LinkedIn: [@jurooravec](https://linkedin.com/in/jurooravec)

## 📝 License

Copyright © 2020 [Juro Oravec](https://github.com/JuroOravec).

This project is [MIT](https://tldrlegal.com/license/mit-license) licensed.
