import { GET_ARCHIVED, GET_OPEN } from './Types';
import mets from '../../Assets/images/mets.png';
import quaday from '../../Assets/images/quaday.png';
import rivard from '../../Assets/images/rivard.png';

const initState = {
   chatMembers: [
    { status: 'online', image: mets, fullName: 'Francesca Metts', messageCount: '3', archived: false },
    { status: 'online', image: quaday, fullName: 'Malcolm Quaday', messageCount: '5', archived: true },
    { status: 'offline', image: rivard, fullName: 'Lindsey Rivard', messageCount: '', archived: false },
    { status: 'long', image: mets, fullName: 'Elizabeth Hurton', messageCount: '1' , archived: false},
    { status: 'online', image: quaday, fullName: 'Albert Pollock', messageCount: '', archived: false },
    { status: 'long', image: rivard, fullName: 'Francesca Metts', messageCount: '', archived: true },
    { status: 'online', image: mets, fullName: 'Malcolm Quaday', messageCount: '2' , archived: false},
    { status: 'online', image: rivard, fullName: 'Lindsey Rivard', messageCount: '', archived: false },
    { status: 'offline', image: quaday, fullName: 'Elizabeth Hurton', messageCount: '', archived: true },
    { status: 'long', image: mets, fullName: 'Albert Pollock', messageCount: '1', archived: false },
    { status: 'online', image: rivard, fullName: 'Francesca Metts', messageCount: '', archived: false },
  ],
  toShow: []
}


export const ConversationReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARCHIVED:
      return {
        ...state,
        toShow: state.chatMembers.filter(item => item.archived )
      };
    case GET_OPEN:
      return {
        ...state,
        toShow: state.chatMembers.filter(item => !item.archived )
      };
    default:
      return state;
  }
};
