import styled from 'styled-components';

export default function User(props){

    const { userName, email, id, role} = props.details.user;

    return (
        <UserCard className='userContainer'>
            <h2>{userName}, {role} Developer</h2>
            <p>User ID: {id}</p>
            <p>Email: {email}</p>
        </UserCard>
    )
}

const UserCard = styled.div`
    height: 50vh;
    width: 50vw;
    margin: 2% auto 2% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 15px;
`