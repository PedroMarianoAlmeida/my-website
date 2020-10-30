export const getQuestionById = async (id) => {
    const response = await fetch(`http://localhost:1337/questions/${id}`);
    const data = await response.json()
    return data; 
}

export const getAllIds = async() => {
    const response = await fetch('http://localhost:1337/graphql', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
            {
                questions{
                id
                }
            }
            `
            })    
        });
    const data = await response.json();
    const allIds = data.data.questions.map(register => register.id);
    return(allIds);
}