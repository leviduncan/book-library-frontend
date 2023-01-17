import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBooks = () => {
  const [books, setBooks] = useState([])
  const uri = 'http://localhost:8800/api/'

  useEffect(() => {
    axios.get(uri)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))

  }, [])

  const bookImage = (bkimg) => {
    if (!bkimg) {
      return 'https://via.placeholder.com/329x500.png?text=No Image Listed'
    } else {
      return bkimg
    }
  }

  return (
    <>
      <div className="book-layout-grid">
        {
          books.map(book => (
            <div className="book-layout" key={book._id}>
              <div className="book-img">
                <img src={bookImage(book.img)} alt={book.title} />
              </div>
              <div className='book-desc'>
                <div className="truncate"><strong>{book.title}</strong></div>
                <div className="author">{book.author}</div>
                {/* <div className="">{`${!book.genre}` ? 'Not Listed' : `${book.genre}`}</div> */}
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default ViewBooks