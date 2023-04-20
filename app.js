import AdminJS from 'adminjs'
import * as AdminJSExpress from '@adminjs/express'
import express from 'express'
import * as AdminJSSequelize from '@adminjs/sequelize'
import Person from './person.entity.js'
import Reader from './reader.entity.js'
import Librarian from './librarian.entity.js'
import BookTitle from './booktitle.entity.js'
import Book from './book.entity.js'
import BookRoom from './bookroom.entity.js'
import Bookshelf from './bookshelf.entity.js'
import BookLocation from './bookLocation.entity.js'
import BorrowBook from './borrowbook.entity.js'
import ReadingRoom from './readingroom.entity.js'
import RoomRentalRate from './roomrentalrate.entity.js'
import Contract from './contract.entity.js'

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
})

const PORT = 3000

const start = async () => {
  const app = express()
  const adminOptions = {
    resources: [
    Person, Reader, Librarian, BookTitle, Book, BookRoom, Bookshelf, BookLocation,
    {
      resource: BorrowBook,
      options: {
        listProperties: [
          'readerId',
          'readerName', // Add this line to display the reader's person name
          'librarianId',
          'bookNumInBorrow',
          'bookIsbnInBorrow',
          'borrowDate',
          'returnDate',
          'dueDate',
          'penaltyFee',
        ],
      }
    },
    ReadingRoom,
    RoomRentalRate,
    Contract
    ]
  }
  const admin = new AdminJS(adminOptions)
  const adminRouter = AdminJSExpress.default.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()