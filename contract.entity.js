import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const Contract = sequelize.define('Contract', {
  contractId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'contract-id'
  },
  deposit: {
    type: Sequelize.FLOAT,
  },
  rentalPeriod: {
    type: Sequelize.INTEGER,
    field: 'rental-period',
  },
  price: {
    type: Sequelize.FLOAT,
  },
},{
  tableName: 'Contract',
  timestamps: false
});


export default Contract;

