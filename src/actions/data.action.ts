import {
	SET_FACT_SUCCESS,
	SET_FACT_FAILURE,
	SET_FACT_STARTED,
} from "./types.action"
import dataService from "../services/data.service"
import { WriteStorage } from "../services/storage.service"

export const SetFact = () => {
	return (dispatch: any) => {
		dispatch(SetFactStarted())

        dataService.GetFact().then((data: any)=> {
			const content = { fact: data?.fact, update_time: new Date()}
			WriteStorage({content})
            dispatch(SetFactSuccess(content))
        }).catch((error)=>{
            dispatch(SetFactFailure(error))
        })
	}
}

const SetFactStarted = () => ({
	type: SET_FACT_STARTED,
    content: "Started"
})

const SetFactSuccess = (content: any) => ({
	type: SET_FACT_SUCCESS,
	content
})

const SetFactFailure = (error: any) => ({
	type: SET_FACT_FAILURE,
    error
})
