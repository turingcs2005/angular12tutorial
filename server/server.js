const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.static('./dist'));

app.listen(PORT, () => {
    console.log(`Angular tutorial running on port ${PORT}.`);
});

