

export default function User(props){

    const { userName, email, id} = props.details.user;

    return (
        <div className='userContainer'>
            <h2>{userName}</h2>
            <p>User ID: {id}</p>
            <p>Email: {email}</p>
        </div>
    )
}