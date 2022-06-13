import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Context } from '../../services/Memory';

const Details = () => {

    const { id } = useParams();

    const [form, setForm] = useState({
        details: '',
        period: 'month',
        events: 1,
        icon: '✈️',
        goal: 60,
        term: '2030-01-01',
        complete: 20,
    });

    const [state, dispatch] = useContext(Context);

    const { details, period, events, icon, goal, term, complete } = form;

    const handleInputChange = (event, prop) => {
        setForm(state => ({ ...state, [prop]: event.target.value}))
    };

    const goalMemory = state.objects[id];

    const navigate = useNavigate();

    useEffect(() => {
        if(!id) return;
        if (!goalMemory) {
            return navigate('/list');
        }
        setForm(goalMemory);
    }, [id, goalMemory, navigate]);

    const handleCreateClick = () => {
        dispatch({ type: 'create', goal: form })
        navigate('/list');
    };

    const handleSaveClick = () => {
        dispatch({ type: 'edit', goal: form });
        navigate('/list');
    };

    const handleDeleteClick = () => {
        dispatch({ type: 'delete', id });
        navigate('/list');
    };

    const handleCancelClick = () => {
        navigate('/list');
    };

    const frequencyOptions = ["day", "week", "month", "year"];
    const iconOptions = ["💻", "🏃", "📚", "✈️", "💵"];

    return (
        <div className='card'>
            <form className='p-4'>
                <label className='label'>
                    Describe your goal.
                    <input 
                        placeholder="ex. 52 walks" 
                        className='input' 
                        value={details} 
                        onChange={e => handleInputChange(e, 'details')}
                    />
                </label>
                <label className='label'>
                    How often do you want to meet your goal?<span>(ex. 1 time per week)</span>
                    <div className='flex mb-6'>
                        <input 
                            type="number" 
                            className='input mr-6' 
                            value={events} 
                            onChange={e => handleInputChange(e, 'events')}
                            />
                        <select 
                            className='input' 
                            value={period}
                            onChange={e => handleInputChange(e, 'period')}
                            >
                            {frequencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    How many times do you want to complete this goal?
                    <input 
                        type="number" 
                        className='input' 
                        value={goal} 
                        onChange={e => handleInputChange(e, 'goal')}
                    />
                </label>
                <label className='label'>
                    Do you have a deadline to meet your goal?
                    <input 
                        type="date" 
                        className='input' 
                        value={term} 
                        onChange={e => handleInputChange(e, 'term')}
                    />
                </label>
                <label className='label'>
                    How many times have you completed this goal?
                    <input 
                        type="number" 
                        className='input' 
                        value={complete} 
                        onChange={e => handleInputChange(e, 'complete')}
                    />
                </label>
                <label className='label'>
                    Choose an icon for your goal
                    <select 
                        className='input' 
                        value={icon}
                        onChange={e => handleInputChange(e, 'icon')}
                    >
                        {iconOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className='buttons'>
                {!id && <button 
                    className='button button--black'
                    onClick={handleCreateClick}
                >Create</button>}
                {id && <button 
                    className='button button--black'
                    onClick={handleSaveClick}
                >Save</button>}
                {id && <button 
                    className='button button--red'
                    onClick={handleDeleteClick}
                >Delete</button>}
                <button 
                className='button button--gray'
                onClick={handleCancelClick}
                >Cancel</button>
            </div>
        </div>
    );
};
 
export default Details;