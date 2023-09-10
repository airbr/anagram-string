## Anagram String project - Morgan Murrah

# [Source Code](/src/variations.ts)

This is a small TypeScript repository for the web and node CLI to compare strings and determine if they are anagrams.  There are also some basic Mocha tests in TS.

The sources and planning that went into this project are documented in [SOURCES.MD](/SOURCES.md). 

# Node

```bash
ts-node ./src/main.ts [string1] [string2] 

```
Example:

```bash
 ts-node ./src/main.ts "this is a really long anagram" "this really long is a anagram"
 The result is: ANAGRAM!
```
Run Mocha Tests:
```bash
   npm test

  Using the is Anagram function from src/variations
    ✔ Correctly determines an Anagram of hello
    ✔ Correctly determines an Anagram of testing
    ✔ Correctly determines an Anagram of trc aina
    ✔ Correctly determines an Anagram of number123
    ✔ Correctly determines an Anagram of along the riverways
    ✔ Correctly fails comparing two different strings

  6 passing (5ms)
```

## Setup

```bash
npm install
```

[This project uses Parcel, which automatically transpiles the .ts files into JS.](https://parceljs.org/languages/typescript/) 

The tsc command can be run to verify the integrity of the types, which are minimal in this small project.

**run the server**

```bash
npm run serve
```
Browse to [localhost:1234](http://localhost:1234)

## Build for production

When you're ready to deploy, you can build for production with the following command:

```bash
npm run build
```
