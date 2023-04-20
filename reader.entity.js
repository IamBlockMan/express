import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '123123', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const Reader = sequelize.define('Reader', {
  readerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'reader-id'
  },
  personId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'person-id',
    references: {
      model: 'Person', // Assuming the Person table is defined in your database
      key: 'person-id'
    }
  },
  joinDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'join-date'
  },
  borrowCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'borrow-count'
  }
}, {
  tableName: 'Reader',
  timestamps: false
});

export default Reader;

