import { app } from "./App.js";
import { serverPort } from "./Constants.js";

app.listen(serverPort, () => {
  console.log(`Server is Running on PORT : ${serverPort}`);
});
