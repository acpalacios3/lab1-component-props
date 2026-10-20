import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard(props: UserProfileCardProps){
     return (
        <div className="user-card-info">
            
            <img
                src = {props.user.avatarUrl}
                alt = {props.user.name}/>
            <h2> {props.user.name}</h2>
            <p>Email: {props.user.email}</p>
            <p>Role: {props.user.role}</p>
            <p>Role: {props.user.id}</p>
            {props.children}

        </div>

     );
 
}




