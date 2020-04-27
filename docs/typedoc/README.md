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
* [ChangelogVersionOptions](README.md#changelogversionoptions)
* [CheckoutOptions](README.md#checkoutoptions)
* [CherryPickOptions](README.md#cherrypickoptions)
* [Commit](README.md#commit)
* [CommitAnalyzerConfig](README.md#commitanalyzerconfig)
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
* [OptionsWithContent](README.md#optionswithcontent)
* [OptionsWithPath](README.md#optionswithpath)
* [PrepareChangelogFn](README.md#preparechangelogfn)
* [PullOptions](README.md#pulloptions)
* [PushOptions](README.md#pushoptions)
* [RebaseOptions](README.md#rebaseoptions)
* [RemoveBranchOptions](README.md#removebranchoptions)
* [ResetOptions](README.md#resetoptions)
* [StashPushOptions](README.md#stashpushoptions)

### Variables

* [fsp](README.md#const-fsp)
* [mainDebug](README.md#const-maindebug)
* [meta](README.md#const-meta)
* [plugin](README.md#const-plugin)

### Functions

* [analyzeCommits](README.md#analyzecommits)
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
* [getAnalyzeCommits](README.md#getanalyzecommits)
* [getDebugLogger](README.md#getdebuglogger)
* [getGenerateNotes](README.md#getgeneratenotes)
* [getVerifyConditions](README.md#getverifyconditions)
* [gitCommand](README.md#gitcommand)
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

*Defined in [src/lib/git.ts:19](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L19)*

#### Type declaration:

* **allowEmpty**: *boolean*

___

###  ArgBranch

Ƭ **ArgBranch**: *object*

*Defined in [src/lib/git.ts:12](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L12)*

#### Type declaration:

* **branch**: *string*

___

###  ArgCommit

Ƭ **ArgCommit**: *object*

*Defined in [src/lib/git.ts:15](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L15)*

#### Type declaration:

* **commit**: *string*

___

###  ArgForce

Ƭ **ArgForce**: *object*

*Defined in [src/lib/git.ts:17](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L17)*

#### Type declaration:

* **force**: *boolean*

___

###  ArgFrom

Ƭ **ArgFrom**: *object*

*Defined in [src/lib/git.ts:11](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L11)*

#### Type declaration:

* **from**: *string*

___

###  ArgMsg

Ƭ **ArgMsg**: *object*

*Defined in [src/lib/git.ts:18](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L18)*

#### Type declaration:

* **message**: *string*

___

###  ArgOnto

Ƭ **ArgOnto**: *object*

*Defined in [src/lib/git.ts:14](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L14)*

#### Type declaration:

* **onto**: *string*

___

###  ArgParse

Ƭ **ArgParse**: *object*

*Defined in [src/lib/git.ts:20](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L20)*

#### Type declaration:

* **parse**: *boolean*

___

###  ArgRemote

Ƭ **ArgRemote**: *object*

*Defined in [src/lib/git.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L13)*

#### Type declaration:

* **remote**: *string*

___

###  ArgStrict

Ƭ **ArgStrict**: *object*

*Defined in [src/lib/git.ts:16](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L16)*

#### Type declaration:

* **strict**: *boolean*

___

###  ArgTo

Ƭ **ArgTo**: *object*

*Defined in [src/lib/git.ts:10](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L10)*

#### Type declaration:

* **to**: *string*

___

###  Branch

Ƭ **Branch**: *object*

*Defined in [src/types/index.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/index.ts#L13)*

#### Type declaration:

* **main**? : *undefined | false | true*

* **name**: *string*

* **prerelease**? : *undefined | false | true*

___

###  BranchArg

Ƭ **BranchArg**: *string | [Branch](README.md#branch)*

*Defined in [src/types/index.ts:11](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/index.ts#L11)*

___

###  BranchExistsOptions

Ƭ **BranchExistsOptions**: *[ArgBranch](README.md#argbranch) & [ArgRemote](README.md#argremote)*

*Defined in [src/lib/git.ts:39](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L39)*

___

###  ChangelogConfig

Ƭ **ChangelogConfig**: *object*

*Defined in [src/types/plugins.ts:24](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/plugins.ts#L24)*

Options passed to `@semantic-release/git`

See `@semantic-release/git`

Generate from v5.0.1

#### Type declaration:

* **changelogFile**: *string*

* **changelogTitle**: *string*

___

###  ChangelogUpdateOptions

Ƭ **ChangelogUpdateOptions**: *object*

*Defined in [src/index.ts:7](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/index.ts#L7)*

#### Type declaration:

* **environment**? : *SRConfig*

* **options**? : *Options*

* **pluginOptions**? : *PluginConfig*

___

###  ChangelogVersionOptions

Ƭ **ChangelogVersionOptions**: *[OptionsWithContent](README.md#optionswithcontent) | [OptionsWithPath](README.md#optionswithpath)*

*Defined in [src/lib/changelog-version.ts:15](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/changelog-version.ts#L15)*

___

###  CheckoutOptions

Ƭ **CheckoutOptions**: *[ArgTo](README.md#argto) & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgStrict](README.md#argstrict)› & object*

*Defined in [src/lib/git.ts:22](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L22)*

___

###  CherryPickOptions

Ƭ **CherryPickOptions**: *[ArgCommit](README.md#argcommit) & Partial‹[ArgAllowEmpty](README.md#argallowempty)›*

*Defined in [src/lib/git.ts:25](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L25)*

___

###  Commit

Ƭ **Commit**: *object*

*Defined in [src/lib/git.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L5)*

#### Type declaration:

* **hash**: *string*

* **message**: *string*

___

###  CommitAnalyzerConfig

Ƭ **CommitAnalyzerConfig**: *object*

*Defined in [src/types/plugins.ts:130](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/plugins.ts#L130)*

Options passed to `@semantic-release/commit-analyzer`

See `@semantic-release/commit-analyzer`

Generated from v8.0.1

#### Type declaration:

* **config**: *string*

* **parserOpts**: *any*

* **preset**: *string*

* **presetConfig**: *any*

* **writerOpts**: *any*

___

###  CommitOptions

Ƭ **CommitOptions**: *[ArgMsg](README.md#argmsg) & Partial‹[ArgAllowEmpty](README.md#argallowempty)›*

*Defined in [src/lib/git.ts:26](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L26)*

___

###  Config

Ƭ **Config**: *Partial‹GlobalConfig› & Partial‹[ChangelogConfig](README.md#changelogconfig)› & Partial‹[GenerateReleaseNotesConfig](README.md#generatereleasenotesconfig)› & Partial‹[GitConfig](README.md#gitconfig)› & Partial‹[CommitAnalyzerConfig](README.md#commitanalyzerconfig)› & Partial‹object›*

*Defined in [src/types/index.ts:30](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/index.ts#L30)*

___

###  Context

Ƭ **Context**: *SRConfig & object*

*Defined in [src/types/index.ts:15](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/index.ts#L15)*

___

###  CopyLastCommitOptions

Ƭ **CopyLastCommitOptions**: *Partial‹[ArgTo](README.md#argto)› & [ArgFrom](README.md#argfrom)*

*Defined in [src/lib/git.ts:42](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L42)*

___

###  GenerateReleaseNotesConfig

Ƭ **GenerateReleaseNotesConfig**: *object*

*Defined in [src/types/plugins.ts:46](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/plugins.ts#L46)*

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

*Defined in [src/types/plugins.ts:8](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/plugins.ts#L8)*

Options passed to `@semantic-release/git`

See `@semantic-release/git`

Generated from v9.0.0

#### Type declaration:

* **message**: *string*

___

###  LastCommitHashOptions

Ƭ **LastCommitHashOptions**: *Partial‹[ArgBranch](README.md#argbranch)›*

*Defined in [src/lib/git.ts:40](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L40)*

___

###  LastCommitMsgOptions

Ƭ **LastCommitMsgOptions**: *Partial‹[ArgBranch](README.md#argbranch)›*

*Defined in [src/lib/git.ts:41](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L41)*

___

###  ListBranchOptions

Ƭ **ListBranchOptions**: *Partial‹[ArgParse](README.md#argparse)›*

*Defined in [src/lib/git.ts:49](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L49)*

___

###  LogOptions

Ƭ **LogOptions**: *Partial‹[ArgBranch](README.md#argbranch)› & object*

*Defined in [src/lib/git.ts:27](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L27)*

___

###  Meta

Ƭ **Meta**: *object*

*Defined in [src/types/index.ts:44](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/index.ts#L44)*

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

###  OptionsWithContent

Ƭ **OptionsWithContent**: *object*

*Defined in [src/lib/changelog-version.ts:9](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/changelog-version.ts#L9)*

#### Type declaration:

* **content**: *string*

* **path**? : *undefined*

* **pattern**? : *string | RegExp*

___

###  OptionsWithPath

Ƭ **OptionsWithPath**: *object*

*Defined in [src/lib/changelog-version.ts:3](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/changelog-version.ts#L3)*

#### Type declaration:

* **content**? : *undefined*

* **path**: *string*

* **pattern**? : *string | RegExp*

___

###  PrepareChangelogFn

Ƭ **PrepareChangelogFn**: *function*

*Defined in [src/types/index.ts:24](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/types/index.ts#L24)*

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

*Defined in [src/lib/git.ts:36](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L36)*

___

###  PushOptions

Ƭ **PushOptions**: *Partial‹[ArgTo](README.md#argto)› & Partial‹[ArgFrom](README.md#argfrom)› & Partial‹[ArgRemote](README.md#argremote)› & Partial‹[ArgForce](README.md#argforce)› & object*

*Defined in [src/lib/git.ts:32](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L32)*

___

###  RebaseOptions

Ƭ **RebaseOptions**: *[ArgOnto](README.md#argonto)*

*Defined in [src/lib/git.ts:37](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L37)*

___

###  RemoveBranchOptions

Ƭ **RemoveBranchOptions**: *[ArgBranch](README.md#argbranch) & Partial‹[ArgRemote](README.md#argremote)› & Partial‹[ArgStrict](README.md#argstrict)› & object*

*Defined in [src/lib/git.ts:43](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L43)*

___

###  ResetOptions

Ƭ **ResetOptions**: *[ArgTo](README.md#argto) & object*

*Defined in [src/lib/git.ts:38](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L38)*

___

###  StashPushOptions

Ƭ **StashPushOptions**: *Partial‹[ArgMsg](README.md#argmsg)› & object*

*Defined in [src/lib/git.ts:50](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L50)*

## Variables

### `Const` fsp

• **fsp**: *promises* = fs.promises

*Defined in [src/lib/safe-read-file.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/safe-read-file.ts#L5)*

*Defined in [src/lib/verify.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/verify.ts#L13)*

___

### `Const` mainDebug

• **mainDebug**: *log* = getDebugLogger()

*Defined in [src/lib/debug.ts:15](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/debug.ts#L15)*

___

### `Const` meta

• **meta**: *object*

*Defined in [src/plugin.ts:9](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/plugin.ts#L9)*

#### Type declaration:

___

### `Const` plugin

• **plugin**: *string* = require.resolve('./plugin')

*Defined in [src/index.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/index.ts#L5)*

## Functions

###  analyzeCommits

▸ **analyzeCommits**(`pluginConfig`: [Config](README.md#config), `context`: [Context](README.md#context), `meta`: [Meta](README.md#meta)): *Promise‹null | string›*

*Defined in [src/steps/analyze-commits.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/steps/analyze-commits.ts#L13)*

Wrapper around @semantic-release/commit-analyzer so we can remove the
temporary branches if no releaseType is determined (because then the
pipeline ends with the analyze commits step)

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pluginConfig` | [Config](README.md#config) | - |
`context` | [Context](README.md#context) | - |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *Promise‹null | string›*

___

###  branchExists

▸ **branchExists**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹boolean›*

*Defined in [src/lib/git.ts:236](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L236)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`branchName` | string |
`remote` | string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹boolean›*

___

###  changelogUpdate

▸ **changelogUpdate**(`__namedParameters`: object): *Promise‹false | object›*

*Defined in [src/index.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/index.ts#L13)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`environment` | Config |
`options` | Options |
`pluginOptions` | object & object & object & object & object & object |

**Returns:** *Promise‹false | object›*

___

###  changelogVersion

▸ **changelogVersion**(`__namedParameters`: object): *Promise‹null | string›*

*Defined in [src/lib/changelog-version.ts:17](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/changelog-version.ts#L17)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`content` | undefined &#124; string | - |
`path` | undefined &#124; string | - |
`pattern` | string &#124; RegExp‹› | /^#{1,2}\s*(?:\[)?(.+?)(?:\]|\s+|\()/mu |

**Returns:** *Promise‹null | string›*

___

###  checkout

▸ **checkout**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹void›*

*Defined in [src/lib/git.ts:59](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L59)*

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

*Defined in [src/lib/git.ts:96](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L96)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`allowEmpty` | boolean | false |
`commitObj` | string | - |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  cherrypickLastCommit

▸ **cherrypickLastCommit**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹void›*

*Defined in [src/lib/git.ts:365](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L365)*

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

*Defined in [src/lib/meta.ts:25](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/meta.ts#L25)*

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

*Defined in [src/lib/cleanup.ts:6](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/cleanup.ts#L6)*

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

*Defined in [src/lib/git.ts:108](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L108)*

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

*Defined in [src/lib/git.ts:306](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L306)*

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

▸ **currentHead**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

*Defined in [src/lib/git.ts:298](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L298)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹string›*

___

###  generateNotes

▸ **generateNotes**(`pluginConfig`: [Config](README.md#config), `context`: [Context](README.md#context), `meta`: [Meta](README.md#meta)): *Promise‹undefined | string›*

*Defined in [src/steps/generate-notes.ts:13](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/steps/generate-notes.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`pluginConfig` | [Config](README.md#config) |
`context` | [Context](README.md#context) |
`meta` | [Meta](README.md#meta) |

**Returns:** *Promise‹undefined | string›*

___

###  getAnalyzeCommits

▸ **getAnalyzeCommits**(`meta`: [Meta](README.md#meta)): *analyzeCommitsWrapper*

*Defined in [src/steps/analyze-commits.ts:28](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/steps/analyze-commits.ts#L28)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *analyzeCommitsWrapper*

___

###  getDebugLogger

▸ **getDebugLogger**(): *log*

*Defined in [src/lib/debug.ts:4](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/debug.ts#L4)*

**Returns:** *log*

___

###  getGenerateNotes

▸ **getGenerateNotes**(`meta`: [Meta](README.md#meta)): *generateNotesWrapper*

*Defined in [src/steps/generate-notes.ts:98](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/steps/generate-notes.ts#L98)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *generateNotesWrapper*

___

###  getVerifyConditions

▸ **getVerifyConditions**(`meta`: [Meta](README.md#meta)): *verifyWrapper*

*Defined in [src/steps/verify-conditions.ts:17](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/steps/verify-conditions.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`meta` | [Meta](README.md#meta) | {} |

**Returns:** *verifyWrapper*

___

###  gitCommand

▸ **gitCommand**(`commandArgs`: string[], `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:54](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`commandArgs` | string[] |
`execaOptions?` | ExecaOptions |

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  init

▸ **init**<**T**>(`options`: T): *object & T*

*Defined in [src/lib/meta.ts:5](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/meta.ts#L5)*

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

*Defined in [src/lib/git.ts:358](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L358)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹boolean›*

___

###  lastCommit

▸ **lastCommit**(`options`: [LastCommitMsgOptions](README.md#lastcommitmsgoptions) & [LastCommitHashOptions](README.md#lastcommithashoptions)): *Promise‹object›*

*Defined in [src/lib/git.ts:348](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L348)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [LastCommitMsgOptions](README.md#lastcommitmsgoptions) & [LastCommitHashOptions](README.md#lastcommithashoptions) | {} |

**Returns:** *Promise‹object›*

___

###  lastCommitHash

▸ **lastCommitHash**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

*Defined in [src/lib/git.ts:327](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L327)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`branchName` | string | "HEAD" |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  lastCommitMessage

▸ **lastCommitMessage**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string›*

*Defined in [src/lib/git.ts:338](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L338)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`branchName` | undefined &#124; string |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  listBranches

▸ **listBranches**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹string | string[]›*

*Defined in [src/lib/git.ts:277](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L277)*

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

*Defined in [src/lib/git.ts:120](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L120)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`branchName` | undefined &#124; string | - |
`count` | undefined &#124; number | - |
`format` | undefined &#124; string | - |
`oneline` | boolean | false |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹string›*

___

###  prepare

▸ **prepare**<**T**>(`meta`: [Meta](README.md#meta), `options?`: T): *object*

*Defined in [src/lib/meta.ts:33](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/meta.ts#L33)*

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

*Defined in [src/lib/prepare-branch.ts:8](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/prepare-branch.ts#L8)*

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

*Defined in [src/lib/git.ts:172](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L172)*

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

*Defined in [src/lib/git.ts:141](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L141)*

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

*Defined in [src/lib/git.ts:180](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L180)*

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

*Defined in [src/lib/git.ts:251](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L251)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`branchName` | string | - |
`fromLocal` | boolean | true |
`fromRemote` | boolean | false |
`remote` | string | "origin" |
`strict` | boolean | true |

▪`Optional`  **execaOptions**: *ExecaOptions*

**Returns:** *Promise‹void›*

___

###  reset

▸ **reset**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:187](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L187)*

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

*Defined in [src/lib/safe-read-file.ts:7](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/safe-read-file.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹string | null›*

___

###  stashPop

▸ **stashPop**(`options`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:226](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L226)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | object | {} |
`execaOptions?` | ExecaOptions | - |

**Returns:** *Promise‹ExecaReturnValue‹string››*

___

###  stashPush

▸ **stashPush**(`__namedParameters`: object, `execaOptions?`: ExecaOptions): *Promise‹ExecaReturnValue‹string››*

*Defined in [src/lib/git.ts:212](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L212)*

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

*Defined in [src/lib/git.ts:199](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L199)*

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

*Defined in [src/lib/verify.ts:27](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/verify.ts#L27)*

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

*Defined in [src/lib/git.ts:292](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L292)*

###  exists

• **exists**: *[branchExists](README.md#branchexists)* = branchExists

*Defined in [src/lib/git.ts:293](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L293)*

###  list

• **list**: *[listBranches](README.md#listbranches)* = listBranches

*Defined in [src/lib/git.ts:295](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L295)*

###  remove

• **remove**: *[removeBranch](README.md#removebranch)* = removeBranch

*Defined in [src/lib/git.ts:294](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L294)*

___

### `Const` stash

### ▪ **stash**: *object*

*Defined in [src/lib/git.ts:231](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L231)*

###  pop

• **pop**: *[stashPop](README.md#stashpop)* = stashPop

*Defined in [src/lib/git.ts:233](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L233)*

###  push

• **push**: *[stashPush](README.md#stashpush)* = stashPush

*Defined in [src/lib/git.ts:232](https://github.com/JuroOravec/semantic-release-changelog-update/blob/24ddc13/src/lib/git.ts#L232)*
