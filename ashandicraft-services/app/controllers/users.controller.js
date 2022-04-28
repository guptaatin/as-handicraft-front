const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.createUser = (req, res) => {
	// Validate request
	if (!req.body.mobile) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a user
	const user = {
		Mobile: req.body.mobile,
		FirstName: req.body.firstName
	};

	// Save user in the database
	User.create(user)
		.then((data) => {
			res.send({status: true, data: data});
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the user.",
			});
		});
};

// Retrieve all users from the database.
exports.findAllUser = (req, res) => {
	const mobile = req.query.mobile;
	var condition = mobile ? { mobile: { [Op.like]: `%${mobile}%` } } : null;

	User.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving users."
			});
		});
};

// Find a single user with an id
exports.findOneUser = (req, res) => {
	const UserId = req.params.UserId;

	User.findByPk(UserId)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving user with id=" + id,
			});
		});
};

// Update a user by the id in the request
exports.updateUser = (req, res) => {
	const userid = req.params.userid;

	User.update(req.body, {
		where: { UserId: userid },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "User was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating user with id=" + id,
			});
		});
};

// Delete a user with the specified id in the request
exports.deleteUser = (req, res) => {
	const userid = req.params.userid;

	User.destroy({
		where: { UserId: userid },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "User was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete user with id=${id}. Maybe user was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete user with id=" + id,
			});
		});
};

// Delete all users from the database.
exports.deleteAllUser = (req, res) => {
	User.destroy({
		where: {},
		truncate: false,
	})
		.then((nums) => {
			res.send({ message: `${nums} Users were deleted successfully!` });
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while removing all users.",
			});
		});
};