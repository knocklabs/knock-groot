oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g knock-groot
$ groot COMMAND
running command...
$ groot (--version)
knock-groot/0.0.13 darwin-arm64 node-v16.14.0
$ groot --help [COMMAND]
USAGE
  $ groot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`groot hello`](#groot-hello)
* [`groot help [COMMANDS]`](#groot-help-commands)
* [`groot plugins`](#groot-plugins)
* [`groot plugins:install PLUGIN...`](#groot-pluginsinstall-plugin)
* [`groot plugins:inspect PLUGIN...`](#groot-pluginsinspect-plugin)
* [`groot plugins:install PLUGIN...`](#groot-pluginsinstall-plugin-1)
* [`groot plugins:link PLUGIN`](#groot-pluginslink-plugin)
* [`groot plugins:uninstall PLUGIN...`](#groot-pluginsuninstall-plugin)
* [`groot plugins:uninstall PLUGIN...`](#groot-pluginsuninstall-plugin-1)
* [`groot plugins:uninstall PLUGIN...`](#groot-pluginsuninstall-plugin-2)
* [`groot plugins update`](#groot-plugins-update)

## `groot hello`

```
USAGE
  $ groot hello
```

_See code: [dist/commands/hello/index.ts](https://github.com/knocklabs/knock-groot/blob/v0.0.13/dist/commands/hello/index.ts)_

## `groot help [COMMANDS]`

Display help for groot.

```
USAGE
  $ groot help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for groot.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `groot plugins`

List installed plugins.

```
USAGE
  $ groot plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ groot plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `groot plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ groot plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ groot plugins add

EXAMPLES
  $ groot plugins:install myplugin 

  $ groot plugins:install https://github.com/someuser/someplugin

  $ groot plugins:install someuser/someplugin
```

## `groot plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ groot plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ groot plugins:inspect myplugin
```

## `groot plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ groot plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ groot plugins add

EXAMPLES
  $ groot plugins:install myplugin 

  $ groot plugins:install https://github.com/someuser/someplugin

  $ groot plugins:install someuser/someplugin
```

## `groot plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ groot plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ groot plugins:link myplugin
```

## `groot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ groot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ groot plugins unlink
  $ groot plugins remove
```

## `groot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ groot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ groot plugins unlink
  $ groot plugins remove
```

## `groot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ groot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ groot plugins unlink
  $ groot plugins remove
```

## `groot plugins update`

Update installed plugins.

```
USAGE
  $ groot plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
