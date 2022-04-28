module.exports = (app) => {
	const users = require("../controllers/users.controller.js");

	var router = require("express").Router();

	// Create a new User
	router.post("/createUser", users.createUser);

	// Retrieve all Users
	router.get("/", users.findAllUser);

	// Retrieve a single User with id
	router.get("/:UserId", users.findOneUser);

	// Update a User with id
	router.put("/:id", users.updateUser);

	// Delete a User with id
	router.delete("/:id", users.deleteUser);

	// Delete all Users
	router.delete("/", users.deleteAllUser);

	app.use("/users", router);
};
