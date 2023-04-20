import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '123123', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const ReadingRoom = sequelize.define('ReadingRoom', {
  readingRoomId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'reading-room-id'
  },
  name: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  capacity: {
    type: Sequelize.INTEGER,
  },
  size: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.DATE,
    field: 'start-date',
  },
  priceCoefficient: {
    type: Sequelize.FLOAT,
    field: 'price-coefficient',
  },
},{
  tableName: 'Reading-Room',
  timestamps: false
});

export default ReadingRoom;

