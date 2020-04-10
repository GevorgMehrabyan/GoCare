import { GET } from './Types';
const initState = {
    data: {
        name: 'Francesca Metts',
        email: 'gocare_info@gmail.com',
        password: 'gev433534',
        changePassword: '4548812s',
        Active: true,
        Supervisor: true,
        TeamChat: false,
        All: true,
        Email: true,
        Webchat: true,
        SMS: true,
        Facebook: true,
        Twitter: true
    }
};

export const EditReducer = (state = initState, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
            };
        default:
            return state;
    }
};
