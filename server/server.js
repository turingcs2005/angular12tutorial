const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static('./dist'));

app.list(PORT, () => {
    console.log(`Angular tutorial running on port ${PORT}.`);
});

