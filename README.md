## Anagram String project - Morgan Murrah

This is a JavaScript focused repository for the web and node CLI to compare strings and determine if they are an Anagram. This project is built originally from a MIT licensed starter shell of the project to get a solid, optional, web build feature to compliment the Node CLI usage. 

I found some different answers online to this question early in my search but I continud my search and made sure my own answer was my own work, typed by hand, and more importantly in terms of thought process and how I would typically code.

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
