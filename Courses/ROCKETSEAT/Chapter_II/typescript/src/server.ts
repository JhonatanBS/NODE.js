import { createCourse } from "./routes"

import express from "express";

const app = express();

app.get("/", createCourse);

app.listen(3333);