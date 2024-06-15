const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(cp());
app.use(express.urlencoded({ extended: true }));
	
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/cookietask.html');
});

app.post('/submit-feedback', (req, res) => {
  const { name, email, message, rating } = req.body;

  // Create the feedback object
  const feedback = {
    name,
    email,
    message,
    rating
  };

  // Set the feedback cookie with a 10-second expiration
  res.cookie('feedback', feedback, { maxAge: 10000 });

  res.send('Thank you for your feedback! <br> <a href="/feedback-details"> Show Feedback </a>');
});

app.get('/feedback-details', (req, res) => {
  const feedback = req.cookies.feedback;

  if (feedback) {
    res.send(`
      <h1>Feedback Details</h1>
      <p><strong>Name:</strong> ${feedback.name}</p>
      <p><strong>Email:</strong> ${feedback.email}</p>
      <p><strong>Message:</strong> ${feedback.message}</p>
      <p><strong>Rating:</strong> ${feedback.rating}</p> 
      <a href="/" > logout </a>`);
   
  } else {
    res.send('No feedback available.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

