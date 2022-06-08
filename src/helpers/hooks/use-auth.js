import { useAppSelector } from "./redux-hooks";

export function useAuth(){
    const {email, token, id, displayName} = useAppSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id,
        displayName 
    }
}