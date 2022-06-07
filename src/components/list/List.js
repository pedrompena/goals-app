import Goal from "./Goals";

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

const List = () => {
    return (
        listMock.map(goal => <Goal {...goal} />)
    );
}
 
export default List;