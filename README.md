# Overview

This site is build with the [11ty](https://www.11ty.io/) static site generator.

# How to make changes

All changes should be made inside the `site/` directory. This is where all source files are. The `site/` directory can not be deployed, instead, the `npm run build:prod` command will generate a new `_site/` directory from the files inside `site/` and that directory should be deployed. To make the build command work, first install all necessary javascript libraries:

```shell
npm install
```

It's now possible to make changes to files inside `site/` and run `npm run build:prod` to generate `_site/`. A more typical approach however, is to run a local server that watches files inside `site/` automatically and regenerates `_site/` every time you make a change so you can preview changes locally in the browser before moving `_site/` to a server.

To start a local development server, run the following commands:

```shell
npm run build:dev
npm run dev
```

You can now start changing files in `site/` and see the changes in your browser at `http://localhost:8080`.

# Glossary

**_site/**

The output directory for our static site generator 11ty. This is the directory that will be served by a webserver. Generate this directory by running `npm run build:prod`

**site/**

The input directory containing all project source files. Edit the files in here and run the build command to generate `_site/`.

**.eleventy.js**

The configuration file for 11ty. Necessary to process all project files and create the final output directory.

**.gitignore**

This file tells our source code management software Git which files or directories not to track.

**package.json**

This file contains the javascript libraries necessary for this project as well as build scripts.

**postcss.config.js**

The configuration for postcss which compiles all css files.

**tailwind.config.js**

The configuration file for TailwindCSS, a css framework.
