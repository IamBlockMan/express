import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '123123', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const ContractReadingRoom = sequelize.define('ContractReadingRoom', {
  contractId: {
    type: Sequelize.INTEGER,
    field: 'contract-id-link',
    references: {
      model: 'Contract',
      key: 'contract-id',
    },
  },
  readingRoomId: {
    type: Sequelize.INTEGER,
    field: 'reading-room-id-link',
    references: {
      model: 'Reading-Room',
      key: 'reading-room-id',
    },
  },
},{
  tableName: 'Contract-Reading-Room',
  timestamps: false
});


export default ContractReadingRoom;

