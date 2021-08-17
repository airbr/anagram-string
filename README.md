## Anagram String project - Morgan Murrah

# [Source Code](/src/variations.js)

This is a JavaScript focused repository for the web and node CLI to compare strings and determine if they are anagrams. This project is built originally from a MIT licensed web starter shell project. Additionally, I have added some basic Mocha tests and CI/CD testing with Github Actions. 

The sources and planning that went into this project are documented in [SOURCES.MD](/SOURCES.md). 


# Node

```bash
node main.js string1 string2 
```

Example:

```bash
 node main.js "this is a really long anagram" "this really long is a anagram"
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

* Add CI/CD: Run Mocha tests automatically on every push to master