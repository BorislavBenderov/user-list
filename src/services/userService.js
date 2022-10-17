export const getAll = async () => {
    const responce = await fetch('http://localhost:3005/api/users');
    
    const result = await responce.json();
    
    return result;
}

export const getOne = async (userId) => {
    const responce = await fetch(`http://localhost:3005/api/users/${userId}`);
    
    const result = await responce.json();
    
    return result.user;
}

export const create = async (userData) => {
    const responce = await fetch('http://localhost:3005/api/users', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await responce.json();

    return result.user;
}

export const edit = async (userId, userData) => {
    const responce = await fetch(`http://localhost:3005/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    });

    const result = await responce.json();

    return result.user;
}

export const del = async (userId) => {
    const responce = await fetch(`http://localhost:3005/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
    });
    
    const result = await responce.json();
    
    return result;
}