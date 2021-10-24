import app from "./src/app";

const port: string = process.env.PORT ?? "4000";

// Start server to listen
app.listen(port, () => console.log(`Listening at port ${port}`));
