## Anagram String project - Morgan Murrah

# [Source Code](/src/variations.ts)

This is a TypeScript focused repository for the web and node CLI to compare strings and determine if they are anagrams.  There are also some basic Mocha tests in TS.

The sources and planning that went into this project are documented in [SOURCES.MD](/SOURCES.md). 


# Node

```bash
ts-node ./main.ts [string1] [string2] 
```

Example:

```bash
 ts-node ./main.ts "this is a really long anagram" "this really long is a anagram"
 The result is: ANAGRAM!
```

Run Mocha Tests:

```bash
   npm test

  the is Anagram function from src/variations
    ✔ Correctly determines an Anagram of hello
    ✔ Correctly determines an Anagram of testing
    ✔ Correctly determines an Anagram of trc aina
    ✔ Correctly determines an Anagram of number123

  4 passing (4ms)
```

# Web Build

## Setup

```bash
npm install
```
**run the server**

```bash
npm run serve
```
Browse to [localhost:1234](http://localhost:1234)

## Parcel

This starter uses parcel to bundle your scripts.

You can import other files. Make sure you have the correct path. You can also import libraries installed with NPM.

## Build for production

When you're ready to deploy, you can build for production with the following command:

```bash
npm run build
```

## Ideas for further development

* Making Whitespace optional for the comparison, adding this as a changeable option to the web interface
