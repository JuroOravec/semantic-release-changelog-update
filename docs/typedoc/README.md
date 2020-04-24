[semantic-release-changelog-update](README.md)

# semantic-release-changelog-update

## Index

### Type aliases

* [ArgAllowEmpty](README.md#argallowempty)
* [ArgBranch](README.md#argbranch)
* [ArgCommit](README.md#argcommit)
* [ArgForce](README.md#argforce)
* [ArgFrom](README.md#argfrom)
* [ArgMsg](README.md#argmsg)
* [ArgOnto](README.md#argonto)
* [ArgParse](README.md#argparse)
* [ArgRemote](README.md#argremote)
* [ArgStrict](README.md#argstrict)
* [ArgTo](README.md#argto)
* [Branch](README.md#branch)
* [BranchArg](README.md#brancharg)
* [BranchExistsOptions](README.md#branchexistsoptions)
* [ChangelogConfig](README.md#changelogconfig)
* [ChangelogUpdateOptions](README.md#changelogupdateoptions)
* [CheckoutOptions](README.md#checkoutoptions)
* [CherryPickOptions](README.md#cherrypickoptions)
* [Commit](README.md#commit)
* [CommitOptions](README.md#commitoptions)
* [Config](README.md#config)
* [Context](README.md#context)
* [CopyLastCommitOptions](README.md#copylastcommitoptions)
* [GenerateReleaseNotesConfig](README.md#generatereleasenotesconfig)
* [GitConfig](README.md#gitconfig)
* [LastCommitHashOptions](README.md#lastcommithashoptions)
* [LastCommitMsgOptions](README.md#lastcommitmsgoptions)
* [ListBranchOptions](README.md#listbranchoptions)
* [LogOptions](README.md#logoptions)
* [Meta](README.md#meta)
* [PrepareChangelogFn](README.md#preparechangelogfn)
* [PullOptions](README.md#pulloptions)
* [PushOptions](README.md#pushoptions)
* [RebaseOptions](README.md#rebaseoptions)
* [RemoveBranchOptions](README.md#removebranchoptions)
* [ResetOptions](README.md#resetoptions)
* [StashPushOptions](README.md#stashpushoptions)

### Variables

* [fsp](README.md#const-fsp)
* [meta](README.md#const-meta)
* [plugin](README.md#const-plugin)

### Functions

* [branchExists](README.md#branchexists)
* [changelogUpdate](README.md#changelogupdate)
* [changelogVersion](README.md#changelogversion)
* [checkout](README.md#checkout)
* [cherryPick](README.md#cherrypick)
* [cherrypickLastCommit](README.md#cherrypicklastcommit)
* [clean](README.md#clean)
* [cleanup](README.md#cleanup)
* [commit](README.md#commit)
* [currentBranch](README.md#currentbranch)
* [currentHead](README.md#currenthead)
* [generateNotes](README.md#generatenotes)
* [getGenerateNotes](README.md#getgeneratenotes)
* [getVerifyConditions](README.md#getverifyconditions)
* [init](README.md#init)
* [isOnBranchHead](README.md#isonbranchhead)
* [lastCommit](README.md#lastcommit)
* [lastCommitHash](README.md#lastcommithash)
* [lastCommitMessage](README.md#lastcommitmessage)
* [listBranches](README.md#listbranches)
* [log](README.md#log)
* [prepare](README.md#prepare)
* [prepareBranch](README.md#preparebranch)
* [pull](README.md#pull)
* [push](README.md#push)
* [rebase](README.md#rebase)
* [removeBranch](README.md#removebranch)
* [reset](README.md#reset)
* [safeReadFile](README.md#safereadfile)
* [stashPop](README.md#stashpop)
* [stashPush](README.md#stashpush)
* [status](README.md#status)
* [verifyConditions](README.md#verifyconditions)

### Object literals

* [branch](README.md#const-branch)
* [stash](README.md#const-stash)

## Type aliases

###  ArgAllowEmpty

Ƭ **ArgAllowEmpty**: *object*

*Defined in [src/lib/git.ts:17](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L17)*

#### Type declaration:

* **allowEmpty**: *boolean*

___

###  ArgBranch

Ƭ **ArgBranch**: *object*

*Defined in [src/lib/git.ts:10](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L10)*

#### Type declaration:

* **branch**: *string*

___

###  ArgCommit

Ƭ **ArgCommit**: *object*

*Defined in [src/lib/git.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L13)*

#### Type declaration:

* **commit**: *string*

___

###  ArgForce

Ƭ **ArgForce**: *object*

*Defined in [src/lib/git.ts:15](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L15)*

#### Type declaration:

* **force**: *boolean*

___

###  ArgFrom

Ƭ **ArgFrom**: *object*

*Defined in [src/lib/git.ts:9](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L9)*

#### Type declaration:

* **from**: *string*

___

###  ArgMsg

Ƭ **ArgMsg**: *object*

*Defined in [src/lib/git.ts:16](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L16)*

#### Type declaration:

* **message**: *string*

___

###  ArgOnto

Ƭ **ArgOnto**: *object*

*Defined in [src/lib/git.ts:12](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L12)*

#### Type declaration:

* **onto**: *string*

___

###  ArgParse

Ƭ **ArgParse**: *object*

*Defined in [src/lib/git.ts:18](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L18)*

#### Type declaration:

* **parse**: *boolean*

___

###  ArgRemote

Ƭ **ArgRemote**: *object*

*Defined in [src/lib/git.ts:11](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L11)*

#### Type declaration:

* **remote**: *string*

___

###  ArgStrict

Ƭ **ArgStrict**: *object*

*Defined in [src/lib/git.ts:14](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L14)*

#### Type declaration:

* **strict**: *boolean*

___

###  ArgTo

Ƭ **ArgTo**: *object*

*Defined in [src/lib/git.ts:8](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L8)*

#### Type declaration:

* **to**: *string*

___

###  Branch

Ƭ **Branch**: *object*

*Defined in [src/types/index.ts:12](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/index.ts#L12)*

#### Type declaration:

* **main**? : *undefined | false | true*

* **name**: *string*

* **prerelease**? : *undefined | false | true*

___

###  BranchArg

Ƭ **BranchArg**: *string | [Branch](README.md#branch)*

*Defined in [src/types/index.ts:10](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/index.ts#L10)*

___

###  BranchExistsOptions

Ƭ **BranchExistsOptions**: *[ArgBranch](README.md#argbranch) & [ArgRemote](README.md#argremote)*

*Defined in [src/lib/git.ts:37](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L37)*

___

###  ChangelogConfig

Ƭ **ChangelogConfig**: *object*

*Defined in [src/types/plugins.ts:24](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/plugins.ts#L24)*

Options passed to `@semantic-release/git`

See `@semantic-release/git`

Generate from v5.0.1

#### Type declaration:

* **changelogFile**: *string*

* **changelogTitle**: *string*

___

###  ChangelogUpdateOptions

Ƭ **ChangelogUpdateOptions**: *object*

*Defined in [src/index.ts:7](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/index.ts#L7)*

#### Type declaration:

* **environment**? : *SRConfig*

* **options**? : *Options*

* **pluginOptions**? : *PluginConfig*

___

###  CheckoutOptions

Ƭ **CheckoutOptions**: *[ArgTo](README.md#argto) & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgStrict](README.md#argstrict)› & object*

*Defined in [src/lib/git.ts:20](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L20)*

___

###  CherryPickOptions

Ƭ **CherryPickOptions**: *[ArgCommit](README.md#argcommit) & Partial‹[ArgAllowEmpty](README.md#argallowempty)›*

*Defined in [src/lib/git.ts:23](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L23)*

___

###  Commit

Ƭ **Commit**: *object*

*Defined in [src/lib/git.ts:3](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L3)*

#### Type declaration:

* **hash**: *string*

* **message**: *string*

___

###  CommitOptions

Ƭ **CommitOptions**: *[ArgMsg](README.md#argmsg) & Partial‹[ArgAllowEmpty](README.md#argallowempty)›*

*Defined in [src/lib/git.ts:24](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L24)*

___

###  Config

Ƭ **Config**: *Partial‹GlobalConfig› & Partial‹[ChangelogConfig](README.md#changelogconfig)› & Partial‹[GenerateReleaseNotesConfig](README.md#generatereleasenotesconfig)› & Partial‹[GitConfig](README.md#gitconfig)› & Partial‹object›*

*Defined in [src/types/index.ts:29](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/index.ts#L29)*

___

###  Context

Ƭ **Context**: *SRConfig & object*

*Defined in [src/types/index.ts:14](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/index.ts#L14)*

___

###  CopyLastCommitOptions

Ƭ **CopyLastCommitOptions**: *Partial‹[ArgTo](README.md#argto)› & [ArgFrom](README.md#argfrom)*

*Defined in [src/lib/git.ts:40](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L40)*

___

###  GenerateReleaseNotesConfig

Ƭ **GenerateReleaseNotesConfig**: *object*

*Defined in [src/types/plugins.ts:46](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/plugins.ts#L46)*

Options passed to `@semantic-release/generate-release-notes`

See `@semantic-release/generate-release-notes`

Generated from v9.0.1

#### Type declaration:

* **commit**: *string*

* **config**: *string*

* **host**: *string*

* **issue**: *string*

* **linkCompare**: *boolean*

* **linkReferences**: *boolean*

* **parserOpts**: *any*

* **preset**: *string*

* **presetConfig**: *any*

* **writerOpts**: *any*

___

###  GitConfig

Ƭ **GitConfig**: *object*

*Defined in [src/types/plugins.ts:8](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/plugins.ts#L8)*

Options passed to `@semantic-release/git`

See `@semantic-release/git`

Generated from v9.0.0

#### Type declaration:

* **message**: *string*

___

###  LastCommitHashOptions

Ƭ **LastCommitHashOptions**: *Partial‹[ArgBranch](README.md#argbranch)›*

*Defined in [src/lib/git.ts:38](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L38)*

___

###  LastCommitMsgOptions

Ƭ **LastCommitMsgOptions**: *Partial‹[ArgBranch](README.md#argbranch)›*

*Defined in [src/lib/git.ts:39](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L39)*

___

###  ListBranchOptions

Ƭ **ListBranchOptions**: *Partial‹[ArgParse](README.md#argparse)›*

*Defined in [src/lib/git.ts:47](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L47)*

___

###  LogOptions

Ƭ **LogOptions**: *Partial‹[ArgBranch](README.md#argbranch)› & object*

*Defined in [src/lib/git.ts:25](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L25)*

___

###  Meta

Ƭ **Meta**: *object*

*Defined in [src/types/index.ts:42](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/index.ts#L42)*

#### Type declaration:

* **baseBranch**? : *undefined | string*

* **branch**? : *[Branch](README.md#branch)*

* **branches**? : *[Branch](README.md#branch)[]*

* **changelogFile**? : *undefined | string*

* **defaultBranches**? : *[BranchArg](README.md#brancharg)[]*

* **dummyBranch**? : *undefined | string*

* **headBranch**? : *undefined | string*

* **initHead**? : *undefined | string*

* **verified**? : *undefined | false | true*

___

###  PrepareChangelogFn

Ƭ **PrepareChangelogFn**: *function*

*Defined in [src/types/index.ts:23](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/types/index.ts#L23)*

#### Type declaration:

▸ (`content`: string | null, `config`: [Config](README.md#config), `context`: [Context](README.md#context)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string &#124; null |
`config` | [Config](README.md#config) |
`context` | [Context](README.md#context) |

___

###  PullOptions

Ƭ **PullOptions**: *[ArgTo](README.md#argto) & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgRemote](README.md#argremote)›*

*Defined in [src/lib/git.ts:34](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L34)*

___

###  PushOptions

Ƭ **PushOptions**: *Partial‹[ArgTo](README.md#argto)› & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgRemote](README.md#argremote)› & Partial‹[ArgForce](README.md#argforce)› & object*

*Defined in [src/lib/git.ts:30](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L30)*

___

###  RebaseOptions

Ƭ **RebaseOptions**: *[ArgOnto](README.md#argonto)*

*Defined in [src/lib/git.ts:35](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L35)*

___

###  RemoveBranchOptions

Ƭ **RemoveBranchOptions**: *[ArgBranch](README.md#argbranch) & Partial‹[ArgRemote](README.md#argremote)› & Partial‹[ArgStrict](README.md#argstrict)› & object*

*Defined in [src/lib/git.ts:41](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L41)*

___

###  ResetOptions

Ƭ **ResetOptions**: *[ArgTo](README.md#argto) & object*

*Defined in [src/lib/git.ts:36](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L36)*

___

###  StashPushOptions

Ƭ **StashPushOptions**: *Partial‹[ArgMsg](README.md#argmsg)› & object*

*Defined in [src/lib/git.ts:48](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L48)*

## Variables

### `Const` fsp

• **fsp**: *promises* = fs.promises

*Defined in [src/lib/safe-read-file.ts:3](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/safe-read-file.ts#L3)*

*Defined in [src/lib/verify.ts:12](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/verify.ts#L12)*

___

### `Const` meta

• **meta**: *object*

*Defined in [src/plugin.ts:8](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/plugin.ts#L8)*

#### Type declaration:

___

### `Const` plugin

• **plugin**: *string* = require.resolve('./plugin')

*Defined in [src/index.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/index.ts#L5)*

## Functions

###  branchExists

▸ **branchExists**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹boolean›*

*Defined in [src/lib/git.ts:233](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L233)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`branch` | string |
`remote` | string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹boolean›*

___

###  changelogUpdate

▸ **changelogUpdate**(`__namedParameters`: object): *Promise‹false | object›*

*Defined in [src/index.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/index.ts#L13)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`environment` | Config |
`options` | Options |
`pluginOptions` | object & object & object & object & object |

**Returns:** *Promise‹false | object›*

___

###  changelogVersion

▸ **changelogVersion**(`path`: string, `pattern`: string | RegExp): *Promise‹null | string›*

*Defined in [src/lib/changelog-version.ts:3](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/changelog-version.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`pattern` | string &#124; RegExp | /^#{1,2}\s*(?:\[)?(.+?)(?:\]|\s+|\()/mu |

**Returns:** *Promise‹null | string›*

___

###  checkout

▸ **checkout**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹void›*

*Defined in [src/lib/git.ts:52](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L52)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`create` | boolean | false |
`existOk` | boolean | false |
`from` | undefined &#124; string | - |
`strict` | boolean | true |
`to` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹void›*

___

###  cherryPick

▸ **cherryPick**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:89](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L89)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`allowEmpty` | boolean | false |
`commit` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  cherrypickLastCommit

▸ **cherrypickLastCommit**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹void›*

*Defined in [src/lib/git.ts:357](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L357)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`from` | string |
`to` | undefined &#124; string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹void›*

___

###  clean

▸ **clean**(`meta`: [Meta](README.md#meta)): *object*

*Defined in [src/lib/meta.ts:24](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/meta.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [Meta](README.md#meta) |

**Returns:** *object*

* **baseBranch**? : *undefined | string*

* **branch**? : *[Branch](README.md#branch)*

* **branches**? : *[Branch](README.md#branch)[]*

* **changelogFile**? : *undefined | string*

* **defaultBranches**? : *[BranchArg](README.md#brancharg)[]*

* **dummyBranch**? : *undefined | string*

* **headBranch**? : *undefined | string*

* **initHead**? : *undefined | string*

* **verified**? : *undefined | false | true*

___

###  cleanup

▸ **cleanup**(`pluginConfig`: [Config](README.md#config), `context`: [Context](README.md#context), `meta`: [Meta](README.md#meta)): *Promise‹void›*

*Defined in [src/lib/cleanup.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/cleanup.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [Config](README.md#config) | - |
`context` | [Context](README.md#context) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*

___

###  commit

▸ **commit**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:101](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L101)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`allowEmpty` | boolean | true |
`message` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  currentBranch

▸ **currentBranch**<**T**>(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹T extends true ? string : undefined | string›*

*Defined in [src/lib/git.ts:301](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L301)*

**Type parameters:**

▪ **T**: *boolean*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`strict` | T | true as T |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹T extends true ? string : undefined | string›*

___

###  currentHead

▸ **currentHead**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹undefined | string›*

*Defined in [src/lib/git.ts:296](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L296)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹undefined | string›*

___

###  generateNotes

▸ **generateNotes**(`pluginConfig`: [Config](README.md#config), `context`: [Context](README.md#context), `meta`: [Meta](README.md#meta)): *Promise‹undefined | string›*

*Defined in [src/steps/generate-notes.ts:14](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/steps/generate-notes.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`pluginConfig` | [Config](README.md#config) |
`context` | [Context](README.md#context) |
`meta` | [Meta](README.md#meta) |

**Returns:** *Promise‹undefined | string›*

___

###  getGenerateNotes

▸ **getGenerateNotes**(`meta`: [Meta](README.md#meta)): *generateNotesWrapper*

*Defined in [src/steps/generate-notes.ts:99](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/steps/generate-notes.ts#L99)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *generateNotesWrapper*

___

###  getVerifyConditions

▸ **getVerifyConditions**(`meta`: [Meta](README.md#meta)): *verifyWrapper*

*Defined in [src/steps/verify-conditions.ts:17](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/steps/verify-conditions.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *verifyWrapper*

___

###  init

▸ **init**<**T**>(`options`: T): *object & T*

*Defined in [src/lib/meta.ts:4](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/meta.ts#L4)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | T | {} as T |

**Returns:** *object & T*

___

###  isOnBranchHead

▸ **isOnBranchHead**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹boolean›*

*Defined in [src/lib/git.ts:350](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L350)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹boolean›*

___

###  lastCommit

▸ **lastCommit**(`options`: [LastCommitMsgOptions](README.md#lastcommitmsgoptions) & [LastCommitHashOptions](README.md#lastcommithashoptions)): *Promise‹object›*

*Defined in [src/lib/git.ts:340](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L340)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [LastCommitMsgOptions](README.md#lastcommitmsgoptions) & [LastCommitHashOptions](README.md#lastcommithashoptions) | {} |

**Returns:** *Promise‹object›*

___

###  lastCommitHash

▸ **lastCommitHash**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

*Defined in [src/lib/git.ts:322](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L322)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`branch` | string | "HEAD" |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  lastCommitMessage

▸ **lastCommitMessage**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

*Defined in [src/lib/git.ts:333](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L333)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`branch` | undefined &#124; string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  listBranches

▸ **listBranches**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string | string[]›*

*Defined in [src/lib/git.ts:275](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L275)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`parse` | boolean | false |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string | string[]›*

___

###  log

▸ **log**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

*Defined in [src/lib/git.ts:113](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L113)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`branch` | undefined &#124; string | - |
`count` | undefined &#124; number | - |
`format` | undefined &#124; string | - |
`oneline` | boolean | false |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  prepare

▸ **prepare**<**T**>(`meta`: [Meta](README.md#meta), `options?`: T): *object*

*Defined in [src/lib/meta.ts:31](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/meta.ts#L31)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [Meta](README.md#meta) |
`options?` | T |

**Returns:** *object*

* **baseBranch**? : *undefined | string*

* **branch**? : *[Branch](README.md#branch)*

* **branches**? : *[Branch](README.md#branch)[]*

* **changelogFile**? : *undefined | string*

* **defaultBranches**? : *[BranchArg](README.md#brancharg)[]*

* **dummyBranch**? : *undefined | string*

* **headBranch**? : *undefined | string*

* **initHead**? : *undefined | string*

* **verified**? : *undefined | false | true*

___

###  prepareBranch

▸ **prepareBranch**(`pluginConfig`: [Config](README.md#config), `context`: [Context](README.md#context), `meta`: [Meta](README.md#meta)): *Promise‹void›*

*Defined in [src/lib/prepare-branch.ts:8](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/prepare-branch.ts#L8)*

Prepare creates and checks out to dummyBranch.
and adds data to meta

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [Config](README.md#config) | - |
`context` | [Context](README.md#context) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*

___

###  pull

▸ **pull**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:165](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L165)*

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

*Defined in [src/lib/git.ts:134](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L134)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`deleteCmd` | undefined &#124; string | - |
`force` | boolean | false |
`from` | undefined &#124; string | - |
`remote` | string | "origin" |
`setUpstream` | boolean | false |
`to` | undefined &#124; string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  rebase

▸ **rebase**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:173](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L173)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`onto` | string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  removeBranch

▸ **removeBranch**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹void›*

*Defined in [src/lib/git.ts:249](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L249)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`branch` | string | - |
`fromLocal` | boolean | true |
`fromRemote` | boolean | false |
`remote` | string | "origin" |
`strict` | boolean | true |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹void›*

___

###  reset

▸ **reset**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:180](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L180)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`hard` | boolean | false |
`to` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  safeReadFile

▸ **safeReadFile**(`path`: string): *Promise‹string | null›*

*Defined in [src/lib/safe-read-file.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/safe-read-file.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹string | null›*

___

###  stashPop

▸ **stashPop**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:223](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L223)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  stashPush

▸ **stashPush**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:209](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L209)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`includeUntracked` | boolean | true |
`message` | undefined &#124; string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  status

▸ **status**<**T**>(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹never[] | T extends true ? string[] : string›*

*Defined in [src/lib/git.ts:192](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L192)*

**Type parameters:**

▪ **T**: *boolean*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`parse` | T | false as T |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹never[] | T extends true ? string[] : string›*

___

###  verifyConditions

▸ **verifyConditions**(`pluginConfig`: [Config](README.md#config), `context`: [Context](README.md#context), `meta`: [Meta](README.md#meta)): *Promise‹void›*

*Defined in [src/lib/verify.ts:26](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/verify.ts#L26)*

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
`pluginConfig` | [Config](README.md#config) | - |
`context` | [Context](README.md#context) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹void›*

## Object literals

### `Const` branch

### ▪ **branch**: *object*

*Defined in [src/lib/git.ts:290](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L290)*

###  exists

• **exists**: *[branchExists](README.md#branchexists)* = branchExists

*Defined in [src/lib/git.ts:291](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L291)*

###  list

• **list**: *[listBranches](README.md#listbranches)* = listBranches

*Defined in [src/lib/git.ts:293](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L293)*

###  remove

• **remove**: *[removeBranch](README.md#removebranch)* = removeBranch

*Defined in [src/lib/git.ts:292](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L292)*

___

### `Const` stash

### ▪ **stash**: *object*

*Defined in [src/lib/git.ts:228](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L228)*

###  pop

• **pop**: *[stashPop](README.md#stashpop)* = stashPop

*Defined in [src/lib/git.ts:230](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L230)*

###  push

• **push**: *[stashPush](README.md#stashpush)* = stashPush

*Defined in [src/lib/git.ts:229](https://github.com/JuroOravec/semantic-release-changelog-update/blob/bf63d08/src/lib/git.ts#L229)*
