import * as SocketConn from "../../SocketConnect/SocketConnect";
import { dataProps } from "../../Types";

export const proceedWithLogin =  (data:dataProps )=> {
SocketConn.login(data)
};
