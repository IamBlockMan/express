import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const BorrowBook = sequelize.define('BorrowBook', {
  readerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'reader-id-borrow',
    references: {
      model: 'Reader',
      key: 'reader-id'
    }
  },
  librarianId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'librarian-id-borrow',
    references: {
      model: 'Librarian',
      key: 'librarian-id'
    }
  },
  bookNumInBorrow: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'book-num-in-borrow',
    references: {
      model: 'Book', 
      key: 'num'
    }
  },
  bookIsbnInBorrow: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'book-isbn-in-borrow',
    references: {
      model: 'Book-Title',
      key: 'isbn'
    }
  },
  borrowDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'borrow-date'
  },
  returnDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'return-date'
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'due-date'
  },
  penaltyFee: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'penalty-fee'
  }
}, {
  tableName: 'Borrow-Book',
  timestamps: false
});

export default BorrowBook;

