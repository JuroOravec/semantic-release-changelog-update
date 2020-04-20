[semantic-release-changelog-update](README.md)

# semantic-release-changelog-update

## Index

### Type aliases

* [ArgBranch](README.md#argbranch)
* [ArgCommit](README.md#argcommit)
* [ArgFrom](README.md#argfrom)
* [ArgOnto](README.md#argonto)
* [ArgRemote](README.md#argremote)
* [ArgTo](README.md#argto)
* [Branch](README.md#branch)
* [BranchExistsOptions](README.md#branchexistsoptions)
* [CheckoutOptions](README.md#checkoutoptions)
* [CherryPickOptions](README.md#cherrypickoptions)
* [ExtendedConfig](README.md#extendedconfig)
* [ExtendedContext](README.md#extendedcontext)
* [LastCommitHashOptions](README.md#lastcommithashoptions)
* [Meta](README.md#meta)
* [PluginConfigVerify](README.md#pluginconfigverify)
* [PullOptions](README.md#pulloptions)
* [PushOptions](README.md#pushoptions)
* [RebaseOptions](README.md#rebaseoptions)

### Variables

* [changelogVersion](README.md#const-changelogversion)
* [fs](README.md#const-fs)
* [fsp](README.md#const-fsp)
* [meta](README.md#const-meta)
* [minimatch](README.md#const-minimatch)
* [path](README.md#const-path)
* [readPkgUp](README.md#const-readpkgup)
* [safeReadFile](README.md#const-safereadfile)
* [semver](README.md#const-semver)

### Functions

* [analyzeCommits](README.md#analyzecommits)
* [branchExists](README.md#branchexists)
* [checkout](README.md#checkout)
* [cherryPick](README.md#cherrypick)
* [cleanup](README.md#cleanup)
* [currentHead](README.md#currenthead)
* [generateNotes](README.md#generatenotes)
* [getAnalyzeCommits](README.md#getanalyzecommits)
* [getBranchName](README.md#getbranchname)
* [getPrepare](README.md#getprepare)
* [getVerifyConditions](README.md#getverifyconditions)
* [initMeta](README.md#initmeta)
* [isDetachedMode](README.md#isdetachedmode)
* [lastCommitHash](README.md#lastcommithash)
* [prepare](README.md#prepare)
* [pull](README.md#pull)
* [push](README.md#push)
* [rebase](README.md#rebase)
* [verifyConditions](README.md#verifyconditions)

## Type aliases

###  ArgBranch

Ƭ **ArgBranch**: *object*

Defined in lib/git.ts:5

#### Type declaration:

* **branch**: *string*

___

###  ArgCommit

Ƭ **ArgCommit**: *object*

Defined in lib/git.ts:8

#### Type declaration:

* **commit**: *string*

___

###  ArgFrom

Ƭ **ArgFrom**: *object*

Defined in lib/git.ts:4

#### Type declaration:

* **from**: *string*

___

###  ArgOnto

Ƭ **ArgOnto**: *object*

Defined in lib/git.ts:7

#### Type declaration:

* **onto**: *string*

___

###  ArgRemote

Ƭ **ArgRemote**: *object*

Defined in lib/git.ts:6

#### Type declaration:

* **remote**: *string*

___

###  ArgTo

Ƭ **ArgTo**: *object*

Defined in lib/git.ts:3

#### Type declaration:

* **to**: *string*

___

###  Branch

Ƭ **Branch**: *object*

Defined in types.ts:4

#### Type declaration:

* **main**? : *undefined | false | true*

* **name**: *string*

* **prerelease**? : *undefined | false | true*

___

###  BranchExistsOptions

Ƭ **BranchExistsOptions**: *[ArgBranch](README.md#argbranch) & [ArgRemote](README.md#argremote)*

Defined in lib/git.ts:17

___

###  CheckoutOptions

Ƭ **CheckoutOptions**: *[ArgTo](README.md#argto) & Partial‹[ArgFrom](README.md#argfrom)› & object*

Defined in lib/git.ts:10

___

###  CherryPickOptions

Ƭ **CherryPickOptions**: *[ArgCommit](README.md#argcommit) & object*

Defined in lib/git.ts:16

___

###  ExtendedConfig

Ƭ **ExtendedConfig**: *GlobalConfig & object*

Defined in types.ts:15

___

###  ExtendedContext

Ƭ **ExtendedContext**: *Context & object*

Defined in types.ts:6

___

###  LastCommitHashOptions

Ƭ **LastCommitHashOptions**: *Partial‹[ArgBranch](README.md#argbranch)›*

Defined in lib/git.ts:18

___

###  Meta

Ƭ **Meta**: *object*

Defined in types.ts:20

#### Type declaration:

* **branch**? : *[Branch](README.md#branch)*

* **branches**? : *[Branch](README.md#branch)[]*

* **changelogFile**? : *undefined | string*

* **defaultBranches**? : *[Branch](README.md#branch)[]*

* **dummyBranch**? : *undefined | string*

* **verified**? : *undefined | false | true*

___

###  PluginConfigVerify

Ƭ **PluginConfigVerify**: *GlobalConfig & object*

Defined in steps/verify.ts:15

___

###  PullOptions

Ƭ **PullOptions**: *[ArgTo](README.md#argto) & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgRemote](README.md#argremote)›*

Defined in lib/git.ts:14

___

###  PushOptions

Ƭ **PushOptions**: *Partial‹[ArgTo](README.md#argto)› & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgRemote](README.md#argremote)› & object*

Defined in lib/git.ts:11

___

###  RebaseOptions

Ƭ **RebaseOptions**: *[ArgOnto](README.md#argonto)*

Defined in lib/git.ts:15

## Variables

### `Const` changelogVersion

▸ **changelogVersion**(`path`: string, `pattern`: RegExp‹›): *Promise‹null | string›*

Defined in lib/changelog-version.ts:3

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`pattern` | RegExp‹› | /#+\s+\[(?<version>.*?)\]/u |

**Returns:** *Promise‹null | string›*

___

### `Const` fs

• **fs**: *any* = require('fs')

Defined in steps/verify.ts:4

___

### `Const` fsp

• **fsp**: *promises* = fs.promises

Defined in steps/verify.ts:13

Defined in lib/safe-read-file.ts:3

___

### `Const` meta

• **meta**: *object & object* = initMeta()

Defined in index.ts:21

___

### `Const` minimatch

• **minimatch**: *any* = require('minimatch')

Defined in steps/verify.ts:6

___

### `Const` path

• **path**: *any* = require('path')

Defined in steps/verify.ts:5

___

### `Const` readPkgUp

• **readPkgUp**: *any* = require('read-pkg-up')

Defined in steps/verify.ts:7

___

### `Const` safeReadFile

▸ **safeReadFile**(`path`: string): *Promise‹string | null›*

Defined in lib/safe-read-file.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹string | null›*

___

### `Const` semver

• **semver**: *any* = require('semver')

Defined in steps/verify.ts:8

## Functions

###  analyzeCommits

▸ **analyzeCommits**(`pluginConfig`: [ExtendedConfig](README.md#extendedconfig), `context`: [ExtendedContext](README.md#extendedcontext), `meta`: [Meta](README.md#meta)): *Promise‹void›*

Defined in steps/analyze-commits.ts:11

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [ExtendedConfig](README.md#extendedconfig) | - |
`context` | [ExtendedContext](README.md#extendedcontext) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*

___

###  branchExists

▸ **branchExists**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹boolean›*

Defined in lib/git.ts:89

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`branch` | string |
`remote` | string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹boolean›*

___

###  checkout

▸ **checkout**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

Defined in lib/git.ts:20

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`create` | boolean | false |
`from` | undefined &#124; string | - |
`to` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  cherryPick

▸ **cherryPick**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

Defined in lib/git.ts:77

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`allowEmpty` | boolean | false |
`commit` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  cleanup

▸ **cleanup**(`pluginConfig`: [ExtendedConfig](README.md#extendedconfig), `context`: [ExtendedContext](README.md#extendedcontext), `meta`: [Meta](README.md#meta)): *Promise‹void›*

Defined in lib/cleanup.ts:4

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [ExtendedConfig](README.md#extendedconfig) | - |
`context` | [ExtendedContext](README.md#extendedcontext) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*

___

###  currentHead

▸ **currentHead**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹undefined | string›*

Defined in lib/git.ts:105

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹undefined | string›*

___

###  generateNotes

▸ **generateNotes**(`pluginConfig`: [ExtendedConfig](README.md#extendedconfig), `context`: [ExtendedContext](README.md#extendedcontext)): *Promise‹void›*

Defined in index.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`pluginConfig` | [ExtendedConfig](README.md#extendedconfig) |
`context` | [ExtendedContext](README.md#extendedcontext) |

**Returns:** *Promise‹void›*

___

###  getAnalyzeCommits

▸ **getAnalyzeCommits**(`meta`: [Meta](README.md#meta)): *analyzeWrapper*

Defined in steps/analyze-commits.ts:75

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *analyzeWrapper*

___

###  getBranchName

▸ **getBranchName**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹undefined | string›*

Defined in lib/git.ts:111

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹undefined | string›*

___

###  getPrepare

▸ **getPrepare**(`meta`: [Meta](README.md#meta)): *prepareWrapper*

Defined in steps/prepare.ts:45

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *prepareWrapper*

___

###  getVerifyConditions

▸ **getVerifyConditions**(`meta`: [Meta](README.md#meta)): *verifyWrapper*

Defined in steps/verify.ts:115

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *verifyWrapper*

___

###  initMeta

▸ **initMeta**<**T**>(`options`: T): *object & T*

Defined in lib/meta.ts:4

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | T | {} as T |

**Returns:** *object & T*

___

###  isDetachedMode

▸ **isDetachedMode**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹boolean›*

Defined in lib/git.ts:128

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹boolean›*

___

###  lastCommitHash

▸ **lastCommitHash**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

Defined in lib/git.ts:117

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`branch` | string | "HEAD" |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  prepare

▸ **prepare**(`pluginConfig`: [ExtendedConfig](README.md#extendedconfig), `context`: [ExtendedContext](README.md#extendedcontext), `meta`: [Meta](README.md#meta)): *Promise‹void›*

Defined in steps/prepare.ts:12

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [ExtendedConfig](README.md#extendedconfig) | - |
`context` | [ExtendedContext](README.md#extendedcontext) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*

___

###  pull

▸ **pull**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

Defined in lib/git.ts:62

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`from` | undefined &#124; string | - |
`remote` | string | "origin" |
`to` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  push

▸ **push**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

Defined in lib/git.ts:35

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`deleteCmd` | undefined &#124; string | - |
`from` | undefined &#124; string | - |
`remote` | string | "origin" |
`setUpstream` | boolean | false |
`to` | undefined &#124; string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  rebase

▸ **rebase**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

Defined in lib/git.ts:70

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`onto` | string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  verifyConditions

▸ **verifyConditions**(`pluginConfig`: [PluginConfigVerify](README.md#pluginconfigverify), `context`: [ExtendedContext](README.md#extendedcontext), `meta`: [Meta](README.md#meta)): *Promise‹void›*

Defined in steps/verify.ts:29

We want to run this script only in CI when triggered by a pull request to one
of the release branches (release branches defined in a semantic-release
config that's used on releases).

Since any branch could be making a PR to a release branch, the branches
option for PR semantic-release config permits all branches.

But we don't want to trigger the CHANGELOG update when we are making a PR
to another non-release branch. So we need to verify here instead that the
target branch is one of release branches.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [PluginConfigVerify](README.md#pluginconfigverify) | - |
`context` | [ExtendedContext](README.md#extendedcontext) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*
