export default (sequelize, DataTypes) => {

	// Creates a table in the database called User
	const User = sequelize.define("User", {
		username: DataTypes.STRING
	});

	//User.associate = function(models) {
		//User.hasMany(models.Task);
	//};

	return User;
};
