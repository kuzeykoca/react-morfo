import axios from "axios"
import { factLink } from "./links.service"

class DataService {
    GetFact() {
        return new Promise((res, rej) => {
            axios
                .get(factLink)
                .then((response) => {
                    if (response.data.error) {
                        rej({ error: response.data.error })
                    }
                    res(response.data)
                })
                .catch((e) => {
                    rej({ error: e })
                })
        })
    }
}

export default new DataService()