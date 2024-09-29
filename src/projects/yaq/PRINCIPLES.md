# Detailed Guide for Yet Another Quiz (YAQ)

## Introduction

Welcome to the **Yet Another Quiz** (YAQ) project! This document outlines the goals, resources, and principles that will guide the development of our multi-category trivia app. 

### Goal

The main objective of this project is to create a **mobile-first trivia application** that allows users to explore various categories of trivia questions. This engaging platform will challenge users' knowledge while providing a seamless user experience.

### API for Questions

We will utilize the [Open Trivia Database API](https://opentdb.com/) to fetch trivia questions. This API provides a wide range of questions across different categories and difficulty levels, making it a perfect fit for our application.

### Fake Leaderboard Data

To simulate user progress and competition, we will use a mock leaderboard dataset. You can find the sample data in the [leaderboard.json file](./src/data/leaderboard.json).

### UI/UX Design

For the user interface and experience, we have created a Figma design that outlines the layout and visual elements of the application. You can view the design [here](https://www.figma.com/design/gndoVmY1OKjVEPxWhMwb8q/%5BFREE%5D-Queezy---Quiz-App-UI-Kit-(Community)?node-id=1-2&m=dev&t=Mu0HLbAbvRWL53xT-1).

## Principles

When developing our trivia application, we will adhere to the following coding principles, which are crucial for front-end development:

1. **Separation of Concerns:** Keep HTML, CSS, and JavaScript in separate files to enhance readability and maintainability.
2. **Responsive Design:** Ensure the app is fully functional on various devices and screen sizes, prioritizing a mobile-first approach.
3. **Modularization:** Follow modular programming practices in JavaScript using ES6 modules to create reusable and maintainable code. Refer to the coding practices listed in [this resource](https://github.com/ryanmcdermott/clean-code-javascript).

## Who Does What?

To maintain clarity and accountability, each task will be listed and assigned to team members with appropriate labels. Responsibilities include:

- **Feature Development:** Each team member will be assigned specific features to develop.
- **Code Review:** Team members will conduct peer reviews of each other’s code to ensure quality and consistency.
- **Basic Quality Assurance:** Everyone is responsible for testing their own code to catch any issues before merging.
- **Bug Fixes and Optimization:** Team members are expected to address any bugs and optimize their code independently.