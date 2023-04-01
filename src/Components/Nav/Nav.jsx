import React from 'react';

const Nav = () => {
    return (
        <div >
            <div className="navbar bg-primary rounded-md ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;