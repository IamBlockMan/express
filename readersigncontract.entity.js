import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const ReaderSignContract = sequelize.define('ReaderSignContract', {
  contractId: {
    type: Sequelize.INTEGER,
    field: 'contract-id-reader-sign',
    references: {
      model: 'Contract',
      key: 'contract-id',
    },
  },
  readerId: {
    type: Sequelize.INTEGER,
    field: 'reader-id-sign',
    references: {
      model: 'Reader',
      key: 'reader-id',
    },
  },
  date: {
    type: Sequelize.DATE,
  },
  location: {
    type: Sequelize.STRING,
  },
},{
  tableName: 'Reader-Sign-Contract',
  timestamps: false
});

export default ReaderSignContract;

