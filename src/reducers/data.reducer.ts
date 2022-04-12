import {
	SET_FACT_SUCCESS,
	SET_FACT_FAILURE,
	SET_FACT_STARTED,
} from "../actions/types.action"
import { dataContext } from "../services/storage.service"

export default (state = dataContext(), action: any) => {
	const { type, content } = action

	switch (type) {
		case SET_FACT_SUCCESS:
			return {
				...state,
				content,
			}
		case SET_FACT_FAILURE:
			return {
				...state,
				error: content
			}
		case SET_FACT_STARTED:
			return {
				...state,
                content
			}
		default:
			return state
	}
}
