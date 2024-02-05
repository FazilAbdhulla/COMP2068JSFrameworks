// JavaScript source code
// Import the connect and url packages
const connect = require('connect');
const url = require('url');

// Define the calculate function
function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const { method, x, y } = parsedUrl.query;

    // Convert x and y to numbers
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    // Check if x and y are valid numbers
    if (isNaN(numX) || isNaN(numY)) {
        res.end('Invalid numbers for x and/or y.');
        return;
    }

    let result;

    // Perform the math operation based on the method parameter
    switch (method) {
        case 'add':
            result = numX + numY;
            break;
        case 'subtract':
            result = numX - numY;
            break;
        case 'multiply':
            result = numX * numY;
            break;
        case 'divide':
            result = numX / numY;
            break;
        default:
            res.end('Invalid method. Possible values: "add", "subtract", "multiply", "divide".');
            return;
    }

    // Send the result as the response
    res.end(`Result: ${result}`);
}

// Create a Connect server
const app = connect();

// Use the calculate function as the request handler for the '/lab03' path
app.use('/lab03', calculate);

// Handle requests to the root path
app.use((req, res) => {
    res.end('Welcome to the root path!'); // You can customize this message
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

