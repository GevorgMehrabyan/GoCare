import {AuthReducer} from './Auth/AuthReducer';
import { EditReducer } from "./Edit/EditReducer";

const RootReducer = {
    auth: AuthReducer,
    edit: EditReducer
};

export default RootReducer;