import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utils/getImgUrl'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi'

const SingleBook = () => {
    const { id } = useParams()
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id)

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error happened while loading book info</div>

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-lg w-full bg-white bg-opacity-70 shadow-yellow p-8 rounded-2xl">
                <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

                <div>
                    <div>
                        <img
                            src={`${getImgUrl(book.coverImage)}`}
                            alt={book.title}
                            className="mb-8 w-50 rounded-md"
                        />
                    </div>

                    <div className="mb-5 space-y-3 text-black">
                        <p><strong>Author:</strong> {book.author || 'admin'}</p>
                        <p><strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}</p>
                        <p className="capitalize"><strong>Category:</strong> {book?.category}</p>
                        <p><strong>Description:</strong> {book.description}</p>
                    </div>

                    <button
                        onClick={() => handleAddToCart(book)}
                        className="btn-primary px-6 space-x-1 flex items-center gap-1 mt-4"
                    >
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleBook
