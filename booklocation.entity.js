    import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '123123', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const BookLocation = sequelize.define('BookLocation', {
  bookshelfCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'bookself-code-location',
    references: {
      model: 'Bookshelf', 
      key: 'code'
    }
  },
  bookRoomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'book-room-id-location',
    references: {
      model: 'Bookshelf',
      key: 'book-room-id'
    }
  },
  bookNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'book-num-location',
    references: {
      model: 'Book', 
      key: 'num'
    }
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'isbn-location',
    references: {
      model: 'Book-Title',
      key: 'isbn'
    }
  },
  addDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'add-date'
  }
}, {
  tableName: 'Book-Location',
  timestamps: false
});

export default BookLocation;

