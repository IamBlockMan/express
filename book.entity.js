import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const Book = sequelize.define('Book', {
  num: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Book-Title',
      key: 'isbn'
    }
  },
  remainingLife: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'remaining-life'
  },
  lifespan: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Book',
  timestamps: false
});

export default Book;

