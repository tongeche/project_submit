const express = require('express');
const multer = require('multer');  // Handles file uploads
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });  // File upload destination

app.post('/upload', upload.array('files'), (req, res) => {
  // Handle file uploads and form data
  const { paymentKES, paymentEUR, deadline, deliverables } = req.body;
  
  // You can process the files from req.files
  // Process the form data as needed

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
