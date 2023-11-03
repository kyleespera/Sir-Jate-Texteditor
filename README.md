# Sir-Jate-Texteditor

# J.A.T.E - Just Another Text Editor

## Overview
J.A.T.E is a Text Editor built as a Progressive Web Application (PWA), offering robust offline functionality and local installation capabilities. It employs advanced data persistence strategies to ensure consistent operation, regardless of the network state or browser capabilities. Utilizing an IndexedDB database with the idb package, J.A.T.E guarantees that your work is saved and accessible whenever needed. For live usage, J.A.T.E has been deployed on Heroku.

## Table of Contents
- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Technologies Employed](#technologies-employed)
- [Future Development](#future-development)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Usage
As a developer, J.A.T.E provides a seamless experience for writing notes and code snippets, online or offline, ensuring your data is always accessible for future reference.

### User Story


### Acceptance Criteria
- When opening the application, the user is presented with a structured client-server folder architecture.
- Running `npm run start` launches both the backend and client services.
- The text editor application bundles JavaScript files using webpack when initiated from the terminal.
- The application maintains functionality in the browser even when utilizing next-gen JavaScript.
- IndexedDB immediately establishes database storage upon opening the text editor.
- Content entered is saved via IndexedDB when clicking off the DOM window.
- Upon restarting, the text editor retrieves and displays content from IndexedDB.
- An 'Install' button is available to download and install the web application locally.
- The application includes a registered service worker using workbox for optimal offline performance.
- Deployment on Heroku includes appropriate build scripts for webpack applications.

## Installation
To interact with J.A.T.E in production, visit the [Heroku deployment](#).

For local use:
1. Clone or fork this repository to your machine.
2. Install all dependencies by running `npm i`.
3. Start the application with `npm run start`.

## License
[MIT](#)


## License
This project adopts the MIT license which is a permissive license allowing distribution under different terms without requiring the provision of source code, provided that copyright and license notices are preserved.

For further details, refer to the [MIT Licensing](#mit-license-link) page.

## Technologies Employed
To bring J.A.T.E to life, we have utilized a range of modern technologies:

- Mini-CSS-Extract Plugin
- Webpack bundled with Workbox for offline capabilities
- Concurrently for running backend and frontend services
- Core Web technologies including JavaScript
- IndexedDB for local database storage
- Express.js for backend routing
- Node.js as the runtime environment
- Babel for JavaScript compilation

## Future Development
Our roadmap for J.A.T.E is ambitious and includes:

- A comprehensive overhaul of the user interface styling
- [Further features are listed, with completed ones marked by ✓]

Your ideas and contributions can also help shape the future of J.A.T.E!

## Contributing
We invite contributions from the community. Please fork this repository and submit pull requests for any new features or improvements. Ensure that your contributions align with our future development plans or propose new ideas for consideration. All contributions will require approval before they can be merged into the main branch.

## Tests
Currently, this project does not include tests. However, as we expand our features, the introduction of a testing suite is anticipated.

## Questions & Collaboration
Should you have any inquiries or wish to collaborate, please reach out through the following channels:

- [GitHub - Kyle Espera](#https://github.com/kyleespera)
- [J.A.T.E PWA Repository](#https://github.com/kyleespera/Sir-Jate-Texteditor)




