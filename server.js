const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api", mainRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api`);
});
