import app from './src/app';

app.listen(process.env.PORT, () => {
    console.log("Running in port: ", process.env.PORT);
})