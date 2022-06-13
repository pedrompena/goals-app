import { createContext, useReducer } from "react";

const listMock = [
    {
        'id': '1',
        'details': 'Run for 30 minutes',
        'period': 'day',
        'events': 1,
        'icon': '🏃‍♂️',
        'goal': 365,
        'term': '2030-01-01',
        'complete': 100,
    },
    {
        'id': '2',
        'details': 'Read books',
        'period': 'year',
        'events': 6,
        'icon': '📚',
        'goal': 12,
        'term': '2030-01-01',
        'complete': 1,
    },
    {
        'id': '3',
        'details': 'Travel to national parks',
        'period': 'month',
        'events': 1,
        'icon': '✈️',
        'goal': 60,
        'term': '2030-01-01',
        'complete': 20,
    },
];

const initialState = {
    order: [],
    objects: {}
};

const reducer = (state, action) =>{
    switch(action.type) {
        case 'place': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }),
                {}
                ),
            };
            return newState;
        };
        case 'create': {
            const id = Math.random();
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            return newState;
        };
    };
};

const goals = reducer(initialState, {type: 'place', goals: listMock});

const Memory = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, goals);

    return ( 
        <Context.Provider value={[state, dispatch]} > 
            {children}
        </Context.Provider>
    );
}
 
export default Memory;

export const Context = createContext(null);
