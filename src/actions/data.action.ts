import { PASS_USER } from "./types.action"

export const PassUserAction = (content: any) => ({
    type: PASS_USER,
    content,
})