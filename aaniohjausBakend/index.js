const express = require("express");

<<<<<<< HEAD
const katutiedotRouter = require("./routes");
=======
const katutiedotRouter = require("./routes/voicecontrol");
>>>>>>> 541d46bab2eb39f1dfac7b115057e9756ecf41c5

const app = express();

app.use(express.json());

app.use("/api/katutiedot", katutiedotRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(`Backend is listening on port ${PORT}`);
});
