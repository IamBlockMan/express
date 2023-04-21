import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('myapp', 'root', '11223344', {
  host: 'localhost',
  port: 3306, // Make sure the port is set to 3306
  dialect: 'mysql'
});

const LibrarianSignContract = sequelize.define('LibrarianSignContract', {
  contractId: {
    type: Sequelize.INTEGER,
    field: 'contract-id-sign',
    references: {
      model: 'Contract',
      key: 'contract-id',
    },
  },
  librarianId: {
    type: Sequelize.INTEGER,
    field: 'librarian-id-sign',
    references: {
      model: 'Librarian',
      key: 'librarian-id',
    },
  },
  date: {
    type: Sequelize.DATE,
  },
  location: {
    type: Sequelize.STRING,
  },
},{
  tableName: 'Librarian-Sign-Contract',
  timestamps: false
});

export default LibrarianSignContract;

