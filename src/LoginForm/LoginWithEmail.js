import React from 'react'

export const LoginWithEmail = (props) => {
    let email = "";
    let password = "";

    return (
        <div>
            {
            }
            <input type="email" onChange={(event) => { email = event.target.value }}></input>
            <input type="password" onChange={(event) => { password = event.target.value }}></input>
            <button onClick={
                props.onClick
                    ? () => props.onClick()
                    : () => { console.log(email, password) }}>
                {props.title}
            </button>
        </div>
    )
}