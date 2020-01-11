# Overview

This site is build with the [11ty](https://www.11ty.io/) static site generator.

# Installation

```shell
npm install
```

# How to get started

```shell
npm run build:dev
npm run dev
```

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
