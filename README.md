# AFFINIDI Capstone Project

An online store. Users will be able to add items to their cart. Conventionally, at this point a user is prompted to fill out long forms; leading to cart abandonment. Form fatigue is a major reason why a lot of businesses lose consumers at checkouts. But since we now have a way to mitigate it, let's see how we can create a better user experience.

## Showcase

![image](./public/img/q4.jpg)
![image](./public/img/q4s1_2.jpg)
![image](./public/img/q4s1_3.jpg)

## Table of Contents

- [AFFINIDI Capstone Project](#affinidi-capstone-project)
	- [Showcase](#showcase)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Features](#features)
	- [Contributing](#contributing)
	- [License](#license)

## Installation

1. Clone the repository.
2. Install the dependencies using `npm install`.

## Usage

1. Inside the **server-app** folder create ``.env` file and add the following environment variables:
   - AFFINIDI_CLIENT_ID=""
   - AFFINIDI_CLIENT_SECRET=""
   - AFFINIDI_ISSUER=""
  OR copy the `.env.example` file and rename it to `.env` and fill in the required values. i.e.

		```shell
		cp .env.example .env
		```
  
2. Start the development server using `npm run start`.
3. Get credentials from Affinidi and fill in the `.env` file.
4. Run `Affinidi start` to authenticate the active project. Wait for the browse to open and authenticate the project.
Open your browser and navigate to `http://localhost:3000`.

## Features

- Feature 1: Description of feature 1.
- Feature 2: Description of feature 2.
- ...

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
