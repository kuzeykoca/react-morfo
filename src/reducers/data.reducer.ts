import { PASS_USER } from "../actions/types.action"
import { dataContext } from "../services/storage.service"

export default (state = dataContext(), action: any) => {
    const { type, data } = action

    switch (type) {
        case PASS_USER:
            return {
                ...state,
                data,
            }
        default:
            return state
    }
}