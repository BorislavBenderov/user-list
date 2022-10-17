export const getAll = async () => {
    const responce = await fetch('http://localhost:3005/api/users');
    
    const result = await responce.json();
    
    return result;
}

export const getOne = async (userId) => {
    const responce = await fetch(`http://localhost:3005/api/users/${userId}`);
    
    const result = await responce.json();
    
    return result;
}
