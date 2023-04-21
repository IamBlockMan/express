import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const RoomRentalRate = sequelize.define('RoomRentalRate', {
  roomRentalRateId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'room-rental-rate-id'
  },
  startTime: {
    type: Sequelize.TIME,
    field: 'start-time',
  },
  endTime: {
    type: Sequelize.TIME,
    field: 'end-time',
  },
  hourlyRate: {
    type: Sequelize.FLOAT,
    field: 'hourly-rate',
  },
  startDate: {
    type: Sequelize.DATE,
    field: 'start-date',
  },
}, {
  tableName: 'Room-Rental-Rate',
  timestamps: false
});

export default RoomRentalRate;

