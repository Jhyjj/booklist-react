import React from 'react';
import { useTestContext } from '../context/TestContext';

const Content = () => {
    const lists = useTestContext();
    return (
        <div className='content'>
            <table>
                <tr>
                    <th>글쓴이</th>
                    <th>제목</th>
                    <th>년도</th>
                </tr>
                {lists.map(list=>
                <tr key={list.id} id={list.id}>
                    <td writer={list.writer}>{list.writer}</td>
                    <td title={list.title} >{list.title}</td>
                    <td date={list.date}>{list.date}</td> 
                </tr>
                )}
            </table>
        </div>
    );
};

export default Content;