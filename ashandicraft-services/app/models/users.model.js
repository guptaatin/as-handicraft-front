module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define("users", {
		UserId: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			notNull: true,
			autoIncrement: true,
		},
		FirstName: {
			type: Sequelize.STRING,
		},
		LastName: {
			type: Sequelize.STRING,
		},
		Email: {
			type: Sequelize.STRING,
		},
		Mobile: {
			type: Sequelize.STRING,
		},
		Status: {
			type: Sequelize.ENUM("1", "0"),
			defaultValue: "0",
		},
		AdminStatus: {
			type: Sequelize.ENUM("1", "0"),
			defaultValue: "0",
		},
		UserPassword: {
			type: Sequelize.STRING,
		},
		IsEmailVerified: {
			type: Sequelize.ENUM("1", "0"),
			defaultValue: "0",
		},
		RegisterStatus: {
			type: Sequelize.ENUM("1", "0"),
			defaultValue: "0",
		},
		IsMobileVerified: {
			type: Sequelize.ENUM("1", "0"),
			defaultValue: "0",
		},
		Status: {
			type: Sequelize.ENUM("1", "0"),
			defaultValue: "0",
		},
		created_date: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
		updated_date: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
		},
	});

	return Users;
};
