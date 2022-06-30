import { createContext, useReducer, useContext, useRef } from "react";

const initialList ={
    inputs:{
        id:"",
        writer:"",
        title:"",
        date:""
    },
    lists:[{
        id:1,
        writer: '글쓴이',
        title : '책제목',
        date : 2022
    },
    {
        id:2,
        writer: '글쓴이2',
        title : '책제목2',
        date : 2021
    }
]};

function listReducer(state,action){
    switch(action.type){
        case 'CHANGE_INPUT':
            return{
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.name]:action.value
                }
            };
        case 'FILTER':
            return state.filter(list=>action.id === list.id);
        case 'ADDLIST':
            return state.concat(action.list);
        default:
            return state;
    }
}

//컨텍스트 생성하기
const TestContext = createContext();
const DispatchContext = createContext();
const NextIdContext = createContext();

export function ListProvider({children}){
    const[state, dispatch] = useReducer(listReducer,initialList);
    const {writer,title,date} = state.inputs;
    const nextId = useRef(1);
    return(
        <TestContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch} writer={writer} title={title} date={date}>
                <NextIdContext.Provider value={nextId}>
                    {children}
                </NextIdContext.Provider>
            </DispatchContext.Provider>
        </TestContext.Provider>
    )
}

//커스텀 훅 생성..?
export function useTestContext(){
    return useContext(TestContext);
}

export function useDispatchContext(){
    return useContext(DispatchContext);
}

export function useNextIdContext(){
    return useContext(NextIdContext);
}
