import type { UserProfileCardProps } from "../../types";

export default function UserProfileCard(props: UserProfileCardProps) {
    return (
        <div className="user-card-info">

            <img
                src={props.user.avatarUrl}
                alt={props.user.name} />


            <div className="user-data">
                <h2> {props.user.name}</h2>

                {/* show the email or role without modifying UserProfileCard.tsx. */}
                {props.showEmail && (
                    <p>Email: {props.user.email}</p>
                )}

                {props.showRole && (
                    <p>Role: {props.user.role}</p>
                )}

                {props.children}


                {/* Edit button and add className="edit-button" */}
                {props.onEdit && (
                    <button
                        className="edit-button"
                        onClick={() => props.onEdit?.(props.user.id)}
                    >
                        Edit
                    </button>
                )}

            </div>

        </div>

    );

}




