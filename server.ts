import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Errback,
} from "express";
import mongoose from "mongoose";

import cards from "./controllers/cards";
import user from "./controllers/user";
import basket from "./controllers/basket";

const app: Application = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api", cards);
app.use("/api", user);
app.use("/api", basket);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  res.send(err);
});

mongoose
  .connect(
    "mongodb+srv://max:Starwars123@surfhouse.e5uvx.mongodb.net/surfhouse?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  )
  .then((response) => {
    app.listen(port, () => console.log("Server running!"));
  });
