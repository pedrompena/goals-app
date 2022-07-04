async function orderGoals() {
    const response = await fetch('/api/goals');
    const goals =  await response.json();
    return goals;
};

async function orderGoal(id) {
    const response = await fetch(`/api/goals${id}`);
    const goal =  await response.json();
    return goal;
};

async function createGoal(goal) {
    const response = await fetch('api/goals', {
        method: 'POST',
        body: JSON.stringify(goal),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });
    const createdGoal =  await response.json();
    console.log('Created Goal!', createdGoal);
    return createdGoal;
};

async function updateGoal(goal) {
    const response = await fetch(`/api/goals/${goal.id}`, {
        method: 'PUT',
        body: JSON.stringify(goal),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });
    const updatedGoal =  await response.json();
    console.log('Edited Goal!', updatedGoal);
    return updatedGoal;
};

async function deleteGoal(id) {
    await fetch(`/api/goals/${id}`, {
        method: 'DELETE'
    });
    console.log('Deleted Goal!', id);

};

export {
    orderGoal,
    orderGoals,
    createGoal,
    updateGoal,
    deleteGoal
}