import React from 'react';

export const CredentialContext = React.createContext();

const CredentialContextProvider = (props) => {
    const [credentials, setCredentials] = React.useState({
        email: null,
        name: null,
    })

    return (
        <CredentialContext.Provider value={{ credentials, setCredentials}}>
            {props.children}
        </CredentialContext.Provider>
    )
}

export default CredentialContextProvider;
