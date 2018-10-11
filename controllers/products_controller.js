module.exports = {
	create: (req, res) => {
		const database = req.app.get("db");

		database
			.create_product({ ...req.body })
			.then(() => {
				res.sendStatus(200);
			})
			.catch(error => {
				res.status(500).send("ERROR: Something went wrong, we are working on it.");
			});
	},
	getOne: (req, res) => {
		const database = req.app.get("db");

		database
			.read_product({ ...req.params })
			.then(product => {
				res.status(200).send(product);
			})
			.catch(error => {
				console.error("Error in getOne /controller", error);
				res.status(500).send("ERROR: Could not get a product with that id.");
			});
	},
	getAll: (req, res) => {
		const database = req.app.get("db");

		database
			.read_products()
			.then(products => {
				res.status(200).send(products);
			})
			.catch(error => {
				console.error("Error in getAll /controller", error);
				res.status(500).send("ERROR: Could not grab all products");
			});
	},
	update: (req, res) => {
		const database = req.app.get("db");

		database.update_product({ ...req.params, ...req.query }).then(() => {
			res.sendStatus(200);
		});
	},
	delete: (req, res) => {
		const database = req.app.get("db");

		database
			.delete_product({ ...req.params })
			.then(() => {
				res.sendStatus(200);
			})
			.catch(error => {
				console.log("Error in delete /controller", error);
				res.status(500).send("ERROR: Could not delete product");
			});
	}
};
