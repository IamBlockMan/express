    import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const BookRoom = sequelize.define('BookRoom', {
  bookRoomId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    field: 'book-room-id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Book-Room',
  timestamps: false
});

export default BookRoom;

