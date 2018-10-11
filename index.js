const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controllers/products_controller");
const massive = require("massive");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
	.then(database => {
		app.set("db", database);
	})
	.catch(error => {
		console.log("Error grabbing database", error);
	});

app.get("/api/products", controller.getAll);
app.get("/api/products/:id", controller.getOne);
app.post("/api/products", controller.create);
app.put("/api/products/:id", controller.update);
app.delete("/api/products/:id", controller.delete);

const SERVER_PORT = process.env.PORT || 3000;
app.listen(SERVER_PORT, res => {
	console.log(`Shipped on port ${SERVER_PORT} ⛵️`);
});
