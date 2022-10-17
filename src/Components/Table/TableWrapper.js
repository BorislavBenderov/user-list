import { useState, useEffect } from "react";
import * as userService from "../../services/userService";

import { TableElement } from "./TableElement";
import { Details } from '../UserDetails/Details';
import { Create } from '../UserCreate/Create';
import { Delete } from '../UserDelete/Delete';
import { Edit } from '../UserEdit/Edit';

export const TableWrapper = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [userCreate, setUserCreate] = useState(null);
    const [userDelete, setUserDelete] = useState(null);
    const [userEdit, setUserEdit] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(Object.values(result.users)));
    }, [])


    const onDetailsHanlder = (userId) => {
        userService.getOne(userId)
            .then(user => setUserDetails(user))
    }

    const onClose = () => {
        setUserDetails(null);
        setUserCreate(null);
        setUserDelete(null);
        setUserEdit(null);
    }

    const onCreateHandler = () => {
        setUserCreate([]);
    }

    const onCreatedUser = (userData) => {
        userService.create(userData)
        .then(user => {
            setUsers(oldUsers => [
                ...oldUsers,
                user
            ]);
            onClose();
        })   
    }

    const onDeleteHandler = (userId) => {
        userService.getOne(userId)
        .then(user => setUserDelete(user));
    }

    const deleteUser = (userId) => {
        userService.del(userId);
        setUsers(currentUser => currentUser.filter(user => user._id !== userId));
        onClose();   
    }

    const onEditHandler = (userId) => {
        userService.getOne(userId)
        .then(user => setUserEdit(user))
    }

    return (
        <div className="table-wrapper">
            {userDetails && <Details user={userDetails} onClose={onClose} />}
            {userCreate && <Create onClose={onClose} onCreatedUser={onCreatedUser} />}
            {userDelete && <Delete user={userDelete} onClose={onClose} deleteUser={deleteUser} />}
            {userEdit && <Edit user={userEdit} onClose={onClose} />}
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            First name
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Last name
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Email
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Phone
                            <svg
                                className="icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg
                                className="icon active-icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="arrow-down"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                ></path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <TableElement key={user._id} user={user} onDetailsHandler={onDetailsHanlder} onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler}/>)}
                </tbody>
            </table>
            <button class="btn-add btn" onClick={() => onCreateHandler()}>Add new user</button>
        </div>

    );
}