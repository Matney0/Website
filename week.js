
const express = require('express'); 

const app = express();
const port = 3000;

const validZipCodes = new Set(['12345', '67890', '54321']);
app.get('/verify-zip', (req, res) => {
    const isValidZip = validZipCodes.has(req.query.zip);
    res.json({ valid: isValidZip, message: isValidZip ? 'Verification complete' : 'Invalid ZIP code' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
