const home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server"
  });
};

const about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js MVC backend"
  });
};

const contact = (req, res) => {
  res.json({
    success: true,
    email: "contact@example.com"
  });
};

const getTime = (req, res) => {
  res.json({
    success: true,
    time: new Date().toLocaleTimeString()
  });
};

const echoData = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      success: false,
      error: "Message is required"
    });
  }

  res.json({
    success: true,
    received: message
  });
};
const greet = (req, res) => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning 🌅";
  } else if (hour < 18) {
    greeting = "Good Afternoon ☀️";
  } else {
    greeting = "Good Evening 🌙";
  }

  res.json({
    success: true,
    greeting
  });
};

module.exports = {
  home,
  about,
  contact,
  getTime,
  echoData,
  greet
};
