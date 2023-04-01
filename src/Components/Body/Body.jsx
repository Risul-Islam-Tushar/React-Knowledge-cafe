import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cart2 from '../Cart2/Cart2';


const Body = () => {
    const [datas, setdatas] = useState([])
    const [card, setcard] = useState([])
    const [book, setbook] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setdatas(data))
    }, []);

    const handleRightCart = (data) => {
        const newCard = [...card, data];
        setcard(newCard);
    }

    const handleBookMark = (data) => {
        const newBook = [...book, data];
        setbook(newBook);
    }

    return (


        <div className='flex justify-between text-black'>
            <div>
                {
                    datas.map(data => <Cart data={data} key={data.id} handleRightCart={handleRightCart} handleBookMark={handleBookMark}></Cart>)
                }
            </div>
            <div>
                <Cart2 card={card} book={book}></Cart2>
            </div>

        </div >


    );
    
};



export default Body;