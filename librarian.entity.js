import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const Librarian = sequelize.define('Librarian', {
  librarianId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'librarian-id'
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
  salaryRate: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: 'salary-rate'
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'start-date'
  }
}, {
  tableName: 'Librarian',
  timestamps: false
});

export default Librarian;

