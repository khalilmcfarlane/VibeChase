import express, { Request, Response} from "express";

const app = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hi!");
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
})