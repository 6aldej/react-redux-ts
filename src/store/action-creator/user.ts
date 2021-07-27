import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: responce.data})
            },1000)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: "Произошла ошибка при загрузке пользователей!"
            })
        }
    }
}