import { LoadingHOC } from '../HOC/LoadingHOC';
import User from '../User';

import './UserList.css';

interface IUser extends JSX.IntrinsicAttributes{
    users: {
        id: string;
        avatar_url: string;
        login: string;
        html_url: string;
    }[]
} 
export function UserList({ users }: IUser) {
    return (
        <section className="users">
            {users ? users.map(user => <User key={user.id} user={user}/>) : <></>}
        </section>
    );
}

export const Users = LoadingHOC<IUser>(UserList);