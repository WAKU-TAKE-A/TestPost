# React Native Axios POST Request Example

This is a simple "React Native + Expo" app that demonstrates how to send a POST request using `axios` and handle responses. The app includes two text input fields: one for inputting the text to be sent in the request and another for specifying the URL to which the request will be made.

## Features
- Input text and URL
- Send a POST request using `axios`
- Display the status and response of the request
- Error handling for request failures

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/WAKU-TAKE-A/TestPost.git
    ```

2. Navigate to the project directory:

    ```bash
    cd TestPost
    ```

3. Install the dependencies:

    ```bash
    yarn install
    ```

    If Yarn is not installed, please follow these steps to install it:<br>
    Install Yarn using npm: Open your terminal and run the following command:

    ```bash
    npm install -g yarn
    ```

4. Run the app:

    ```bash
    yarn start
    ```

## Usage

Once the app is running, you can:

1. Enter some text into **TextBox 1**.
2. Enter a URL into **TextBox 2** (e.g., `https://httpbin.org/post`).
3. Press the **[test]** button to send the POST request.
4. The response from the server will be displayed below the button, including the status and response body.

If an error occurs during the request, the app will display the error message.


