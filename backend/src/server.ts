import app from "./app";

(() => {
  const port = Number(process.env.PORT);
  const host = process.env.HOST!;

  app.listen(port, host, () => {
    console.log(`[SERVER IS ON] Server running on port ${port}`);
  });
})();
