import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const ContractRate = sequelize.define('ContractRate', {
  contractId: {
    type: Sequelize.INTEGER,
    field: 'contract-id-rate',
    references: {
      model: 'Contract',
      key: 'contract-id',
    },
  },
  roomRentalRateId: {
    type: Sequelize.INTEGER,
    field: 'room-rental-rate-id',
    references: {
      model: 'Room-Rental-Rate',
      key: 'room-rental-rate-id',
    },
  },
  hourlyPriceFactor: {
    type: Sequelize.FLOAT,
    field: 'hourly-price-factor',
  },
},{
  tableName: 'Contract-Rate',
  timestamps: false
});


export default ContractRate;

