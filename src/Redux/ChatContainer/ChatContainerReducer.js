import { DELETE_TAG, GET, ADD_TAG } from './Types';
import mets from '../../Assets/images/mets.png';
import minev from '../../Assets/images/minev.png';


const initState = {
  tagList: ['Message Tag 1', 'Message Tag 2', 'Message Tag 3'],
  chatInfo: [
    {
      id: 1,
      fullName: 'Francesca Metts',
      sendTime: '09:24',
      read: true,
      image: mets,
      messages: ['It is a long established fact that a reader will be distracted by the readable'],
    },
    {
      id: 2,
      fullName: 'Miroslav M.',
      image: minev,
      read: true,
      sendTime: '09:26',
      messages: ['It is a long established fact that a reader will be distracted by the readable', 'Established fact that a reader will be '],
    },
    {
      id: 1,
      fullName: 'Francesca Metts',
      sendTime: '09:24',
      image: mets,
      read: true,
      messages: ['It is a long established fact that a reader will be distracsajhcjskashdjksahdjsahdjhated by the readable'],
    },
    {
      id: 2,
      fullName: 'Miroslav M.',
      image: minev,
      read: true,
      sendTime: '09:26',
      messages: ['It is a long established fact that a reader will be distracted by the readable', 'Established fact that a reader will be '],
    },
    {
      id: 1,
      fullName: 'Francesca Metts',
      sendTime: '09:24',
      image: mets,
      read: true,
      messages: ['It is a long established fact that a reader will be distracsajhcjskashdjksahdjsahdjhated by the readable'],
    },
    {
      id: 2,
      fullName: 'Miroslav M.',
      image: minev,
      read: true,
      sendTime: '09:26',
      messages: ['It is a long established fact that a reader will be distracted by the readable', 'Established fact that a reader will be '],
    },
    {
      id: 1,
      fullName: 'Francesca Metts',
      sendTime: '09:24',
      image: mets,
      read: true,
      messages: ['It is a long established fact that a reader will be distracsajhcjskashdjksahdjsahdjhated by the readable'],
    },
    {
      id: 2,
      fullName: 'Miroslav M.',
      image: minev,
      read: true,
      sendTime: '09:26',
      messages: ['It is a long established fact that a reader will be distracted by the readable', 'Established fact that a reader will be '],
    },
    {
      id: 1,
      fullName: 'Francesca Metts',
      sendTime: '09:24',
      image: mets,
      read: true,
      messages: ['It is a long established fact that a reader will be distracsajhcjskashdjksahdjsahdjhated by the readable'],
    },
    {
      id: 2,
      fullName: 'Miroslav M.',
      image: minev,
      sendTime: '09:26',
      read: true,
      messages: ['Reader will be distracted by the readable'],
    },
    {
      id: 1,
      fullName: 'Francesca Metts',
      sendTime: '09:24',
      image: mets,
      read: false,
      messages: ['It is a long established fact that a reader will be distracted by the readable', 'It is a long established fact that a reader will'],
    },
  ],
}


export const ChatContainerReducer = (state = initState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
      };
    case DELETE_TAG:
      return {
        ...state,
        tagList: state.tagList.filter((item, index) => index !== action.payload),
      };
    case ADD_TAG:
      return {
        ...state,
        tagList: [].concat(state.tagList, action.payload)
      };
    default:
      return state;
  }
};
