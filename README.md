# Getting Started with PaLM 2 LLM : Create React App Chatbot

(InkoChat)

## Description

This project is a React-based web application that utilizes a language model API for generating responses. The front end is built with React hooks, managing states for user input, messages, and loading indicators. Additionally, the application dynamically renders mathematical typeset using MathJax.

## Installation

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone [your-repo-link]

# Go into the repository
$ cd [your-repo-directory]

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Usage

After installation, you can start the server with `npm start:frontend` & `npm start:backend`. This will launch the React application on `localhost:3000` and the server on `localhost:8002`.

## Environment Variables

Before starting the server, ensure you have set up the required environment variables:

- `LANGUAGE_MODEL_API_KEY`: Your API key for the language model.

fill in your API key in `.env` .

## API Reference

The server sets up an endpoint at `GET /prompt/:text` which interacts with the language model API to generate responses based on the provided text.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Remember to replace placeholders like `[your-repo-link]`, `[your-repo-directory]`, and others with actual information from your project. Would you like me to write up a full README file, including the actual information based on the content of your scripts?
