# \_nology JS & TS challenges

This is the repository for \_nology JavaScript & TypeScript challenges.

## Getting started

Students should complete the challenges in their own cloned version of the challenges repository. All pushes to `main` will be restricted.

### Installation

The project is built using [vite](https://vitejs.dev/) & [vitetest](https://vitest.dev/)

```bash
npm install
```

---

## Running tests

### All tests

```bash
npm test
```

Will launch the the testing UI in your default browser.

You can click into the folder you are working on to see and re run the tests.

You are able to view console.log() in the Console tab.
You are also able to view the tests in the Code tab.

When you want tests to stop running you can press `q` in the terminal to quit or ctrl + c to kill the process.

### Individual tests

You can run the tests individually. There are two different ways of doing this.

1. Do this by specifying the folder as an argument, example below.

```bash
npm test js1-types-and-control-flow
```

You can also omit the file name after the first -, example below.

```bash
npm test js1-
```

2. Using the command line interface. Once all tests have run you can enter `h` in the terminal to view options. You can then press `p` to filter the tests by filename.

### Run tests on save

Once running the test runner will "watch" the the challenge file so that the tests will run automatically on save.

### Unskipping tests

From `js2` onwards, most tests are skipped by default in order to make the output on the command line easier to understand. In order to make the tests run for the second function onwards, remove the `.skip` in front of `describe` as follows:

```js
describe.skip(() => {});
```

TO

```js
describe(() => {});
```

---

## Concept

The tests in this repository are separated by concept and each concept has 9 tests divided into 4 levels: Foundation, Intermediate, Advanced and Expert.

The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
share it with the group!

### Solution files

Example solution files are included for each challenge. Resist the urge the to look in these files if you can't come up with a solution yourself, it's always better to google, ask a fellow student or ask a coach.

---
