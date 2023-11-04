import app from "./src/config/app.js";

app.listen(process.env.PORT_APP, () => {
  console.log(`Server up and running at port ${process.env.PORT_APP}`);
})