import React from 'react';

const Cart2 = (props) => {
    const card = props.card;
    const books = props.book;

    let total = 0;
    for (const data of card) {
        total = total + data.readtime;
    }

    return (
        <div>
            <div className='mt-4'>
                <div className='border-solid border-2 border-indigo-600 w-96 h-12 rounded-md pt-2 text-indigo-600 text-xl '>
                    Spent Time on read: {total} min
                </div>
                <div className='mt-4 text-xl bg-slate-400 rounded-lg'>
                    <div className=' text-left ms-5 pt-2 pb-5 '>

                        Bookmarked Blogs:{books.length}

                        {
                            books.map(book =>

                                <p>{book.blogtitle}</p>
                            )
                        }






                    </div>
                </div>
               
            </div>

        </div>

    );
};

export default Cart2;