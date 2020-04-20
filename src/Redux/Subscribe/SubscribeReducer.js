import { GET } from './Types';
import minev from '../../Assets/images/minev.png';

const initState = {
  journeys: [
    {
      name: 'Alex Brown',
      date: '25 Mar, 2020',
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      name: 'Reece Jacklin',
      date: '10 Dec, 2019',
      comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ],
  subscriber: {
    fullName: 'Miroslav Minev',
    pic: minev,
    phone: '202-555-0100',
    mail: 'ron.brown@example.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book.',
  },
};

export const SubscribeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
      };
    default:
      return state;
  }
}