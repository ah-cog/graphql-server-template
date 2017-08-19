import Sequelize from 'sequelize'

// Create Sequelize object using credentials
const sequelize = new Sequelize('test_graphql_db', 'test_graphql_admin', 'iamapassword', {
	host: 'localhost',
	dialect: 'postgres',
})

// Import all models here...
const db = {
	//sequelize.import(path.join(__dirname, file));
	User: sequelize.import('./user'),
};

// Used to create associations:
//Object.keys(db).forEach((modelName) => {
	//if ('associate' in db[modelName]) {
		//db[modelName].associate(db)
	//}
//});

// Convenience for accessing Sequelize objects
db.sequelize = sequelize;
//db.Sequelize = sequelize;

export default db;
