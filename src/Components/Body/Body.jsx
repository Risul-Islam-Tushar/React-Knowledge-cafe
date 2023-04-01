import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Rightsection from '../Rightsection/Rightsection';

const Body = () => {
    const [datas, setdatas] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setdatas(data))
    }, []);

    return (
        <div className='flex justify-between text-black'>
            <div>
                {
                    datas.map(data => <Cart data={data} key={data.id}></Cart>)
                }
            </div>
            <div>
                <Rightsection></Rightsection>
            </div>
        </div >
    );
};

export default Body;