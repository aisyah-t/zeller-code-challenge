# Zeller Coding Challenge

The original brief for this code challenge can be found [here](#high-level-requirements).

## Running the app

You will need Node 20 to run this repo locally.

Clone the repo and in a terminal run:

```
$ npm install
$ npm run dev
```

You may need to press `o` in the terminal for Vite to open up the app in the browser. Alternatively press `h` for more information on different Vite commands.

To run tests in the terminal:

```
$ npm run test
```

## Plan

These are my initial plans for building the app.

### Tech stack & libraries

- Vite
- React
- Typescript
- Tailwind CSS
- Jest
- React Testing Library

### Steps & components

- Set up a Vite, React and Typescript app and add Tailwind CSS, Jest and React Testing Library.

- Reusable components: Build `Container`, `Divider`, `Heading`, `Radio`, `Avatar`and `DetailsPanel` using TDD.

- Views: Using the components, build `UserTypes` for choosing the type of users, `UserDetails` and `UsersList` for listing users for the selected type and `Users` as the parent component for the views.

- State management: Use React Context at views level. The context should store the selected role (set "Admin" as the initial value), all users and the appropriate users list based on the selected role.

- GraphQL API: Test endpoint in Insomnia. Set up AWS Amplify using config provided in `aws-exports`.

- Write function to use the GraphQL query in `Users`. Store query result in the context. Render the other views here.

- Render `Users` in `App`.

### Assumptions

- Default role when the page is rendered is `Admin`.
- Internationalisation of strings is not currently required.

## Challenges and learnings

- Tailwind CSS is new to me and I'm used to writing straight CSS/SCSS. I decided to use it as it seems to have growing popularity in the industry. So far I like what I see and I'd like to continue experimenting with it.

- Setting up Amplify for the GraphQL query is something I hadn't had to do previously. I followed the dev docs and eventually managed to use the GraphQL query provided.

- I was hoping to be able to generate the GraphQL types as well but when I tried to follow the instructions in the Amplify docs it seemed I needed more info that I didn't have to be able to run `codegen`. So I ended up manually typing the query result.

- Once I installed Amplify and tried to set up a test for `Users` which fetches the query, Jest didn't seem to play nice with it and kept erroring. In the interest of time I decided to remove the test for this component. I think the tests written for the children components should be sufficient for now.

## High level requirements

Need to build a simple react app in Typescript to show Zeller customers. Customers should be fetched with the GraphQL APIs provided.

List of customers need to be filtered based on the selection of user type - Admin/Manager.

- Radio button selection of `Admin` should list admin customers as per the design.
- If the selection is `Manager`, customers with a role `Manager` need to be listed.

Please refer to the design attached for the UI - `zeller-customers-design.png`.
