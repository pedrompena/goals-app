import styles from './Details.module.css'

const Details = () => {

    const frequencyOptions = ["day", "week", "month", "year"];
    const iconOptions = ["💻", "🏃", "📚", "✈️", "💵"];

    return (
        <div className='card'>
            <form className='p-4'>
                <label className='label'>
                    Describe your goal.
                    <input placeholder="ex. 52 walks" className='input' />
                </label>
                <label className='label'>
                    How often do you want to meet your goal?<span>(ex. 1 time per week)</span>
                    <div className='flex mb-6'>
                        <input type="number" className='input mr-6' />
                        <select className='input'>
                            {frequencyOptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    How many times do you want to complete this goal?
                    <input type="number" className='input' />
                </label>
                <label className='label'>
                    Do you have a deadline to meet your goal?
                    <input type="date" className='input' />
                </label>
                <label className='label'>
                    How many times have you completed this goal?
                    <input type="number" className='input' />
                </label>
                <label className='label'>
                    Choose an icon for your goal
                    <select className='input'>
                        {iconOptions.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className='buttons'>
                <button className='button button--black'>Create</button>
                <button className='button button--gray'>Cancel</button>
            </div>
        </div>
    );
};
 
export default Details;