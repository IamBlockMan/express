    import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '123123', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const Bookshelf = sequelize.define('Bookshelf', {
  code: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  bookRoomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'book-room-id',
    references: {
      model: 'Book-Room',
      key: 'book-room-id'
    }
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Bookshelf',
  timestamps: false
});

export default Bookshelf;

