import React, { useState } from 'react';
import { useDispatchContext, useNextIdContext } from '../context/TestContext';


const Footer = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatchContext();
    const writer = useDispatchContext();
    const title = useDispatchContext();
    const date = useDispatchContext();
    const nextId = useNextIdContext();

    const onChange = e=>{setValue(e.target.value)
        
    console.log(e.target.value)};
    const onSubmit = e=>{
        dispatch({
            type:'ADDLIST',
            list:{
                id:nextId.current,
                writer:writer,
                title:title,
                date:date,
            }
        })
        setValue('');
        nextId.current+=1;
    }
    return (
        <div className='footer'>
            <div>
                <input placeholder='글쓴이를 입력하세요' onChange={onChange} value={value}/>
                <input placeholder='책제목을 입력하세요' onChange={onChange} value={title}/>
                <input placeholder='출판년도를 입력하세요'onChange={onChange}value={date}/>
                <button onClick={onSubmit}>등록</button>
            </div>
        </div>
    );
};

export default Footer;