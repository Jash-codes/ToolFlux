const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test API endpoint
app.get('/', (req, res) => {
  res.send('ToolFlux backend is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
