import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Errback,
} from "express";
import mongoose from "mongoose";
import cors from "cors";
import isAuth from "./middlewares/auth";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import resolver from "./graphql/rootResolver";

const app: Application = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  res.send(err);
});
// app.post("/api/email", async (req, res) => {
//   const { email } = req.body;
//   try {
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: emailSendler,
//         pass: password,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     let mailOption = {
//       from: emailSendler,
//       to: `${email}`,
//       subject: "You subscribe!",
//       text: "You subscribe!",
//     };

//     await transporter.sendMail(mailOption, (err, data) => {
//       if (err) {
//         console.log("Errors", err);
//       } else {
//         console.log("Email was sended!");
//       }
//     });
//     res.status(200).send({ status: "ok" });
//   } catch (e) {
//     console.log(e);
//   }
// });

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
