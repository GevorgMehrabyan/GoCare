import {AuthReducer} from './Auth/AuthReducer';
import { PanelReducer } from './Panel/PanelReducer';
import { SubscribeReducer } from './Subscribe/SubscribeReducer';
import { ConversationReducer } from './Conversation/ConversationReducer';
import { ChatContainerReducer } from './ChatContainer/ChatContainerReducer';
import { ManageTableReducer } from './ManageTable/ManageTableReducer';

const RootReducer = {
    auth: AuthReducer,
    panel: PanelReducer,
    subscribe: SubscribeReducer,
    conversation: ConversationReducer,
    chatContainer: ChatContainerReducer,
    table: ManageTableReducer
};

export default RootReducer;