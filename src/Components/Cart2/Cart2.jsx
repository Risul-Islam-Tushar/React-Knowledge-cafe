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
                <div className='w-96 mt-16' >
                    <h1>1.ans:Props allow us to pass data from one component to other components as an argument. State holds information about the components.</h1>
                    <h1>2.ans:The useState() is a Hook that allows us to have state variables in functional components, basically useState is the ability to encapsulate local state in a functional component.</h1>
                    <h1>3.ans:useEffect doesn't have any dependencies on any state variables.</h1>
                    <h1> 4.ans: building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.  </h1>
                    
                    
                    
                   

                </div>
            </div>

        </div>

    );
};

export default Cart2;