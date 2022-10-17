export const getAll = async () => {
    const responce = await fetch('http://localhost:3005/api/users');
    
    const result = await responce.json();
    
    return result;
}