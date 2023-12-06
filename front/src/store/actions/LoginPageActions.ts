import * as SocketConn from "../../SocketConnect/SocketConnect";
import { dataProps } from "../../Types";

export const proceedWithLogin =  (data:dataProps )=> {
  console.log("proceed with login function data",data);
SocketConn.login(data)
};
