import { createContext } from 'react';

export interface IAuthContext {
    authenticated: boolean;
    login: () => void;
}

const AuthContext = createContext({
    authenticated: false,
    login: () => {}
});

export default AuthContext;