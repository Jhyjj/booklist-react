import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h1>booklist</h1>
            <ul className='btns'>
                <button>2022년도</button>
                <button>2021년도</button>
                <button>2020년도</button>
                <button>2019년도</button>
            </ul>
        </div>
    );
};

export default Header;