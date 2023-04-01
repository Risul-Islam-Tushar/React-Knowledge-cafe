import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { images, blogtitle, author, authorname, readtime } = props.data;
    const handleRightCart = props.handleRightCart;
    const handleBookMark = props.handleBookMark;
    return (
        <div > 
            <div className=" mt-4 mb-auto bg-white text-black">
                <img className='rounded-lg w-11/12 h-96 ml-2' src={images} alt="Shoes" />

                <div className=" w-10/12 mt-4 ms-2 ">
                   <div className='flex justify-between'>
                        <div >
                            <div className='avatar'>
                                <div className="w-10 rounded-full mr-4 mt-2">
                                    <img src={author} />
                                </div>
                                <h3>{authorname}</h3>
                            </div>
                        </div>
                        <div  >
                            {readtime} minute 
                            <button onClick={() => handleBookMark(props.data)}> <FontAwesomeIcon className='ms-2' icon={faBookmark} /></button>
                            
                        </div>
                    </div>

                    <h1 className='text-4xl text-left mt-3'>{blogtitle}</h1>
                    <div className='text-left mt-5 mb-4'>
                        #beginners
                        #programming
                    </div>

                    <div className='text-left text-violet-600'>
                        <button onClick={() => handleRightCart(props.data) }> <u> mark as read</u></button>
                    </div>
                </div>
            </div>
           
        </div>
      
    );
};
<div>
1.ans:Props allow us to pass data from one component to other components as an argument. State holds information about the components.
2.ans:The useState() is a Hook that allows us to have state variables in functional components, basically useState is the ability to encapsulate local state in a functional component.
3.ans:useEffect doesn't have any dependencies on any state variables.
4.ans: building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
</div>
export default Cart;