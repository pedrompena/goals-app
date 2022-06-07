const Details = () => {

    const frequencyOptions = ["day", "week", "month", "year"];
    const iconOptions = ["💻", "🏃", "📚", "✈️", "💵"];

    return (
        <div>
            <form>
                <label>
                    Describe your goal.
                    <input placeholder="ex. 52 walks"/>
                </label>
                <label>
                    How often do you want to meet your goal?<span>(ex. 1 time per week)</span>
                    <div>
                        <input type="number" />
                        <select>
                            {frequencyOptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    How many times do you want to complete this goal?
                    <input type="number" />
                </label>
                <label>
                    Do you have a deadline to meet your goal?
                    <input type="date" />
                </label>
                <label>
                    How many times have you completed this goal?
                    <input type="number" />
                </label>
                <label>
                    Choose an icon for your goal
                    <select>
                    {iconOptions.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Create</button>
                <button>Cancel</button>
            </div>
        </div>
    );
};
 
export default Details;