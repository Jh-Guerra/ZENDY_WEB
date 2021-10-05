import { showBackdrop } from "./CustomAction";
import { CURRENT_CHAT } from "services/redux/common/Types"
import ChatService from "services/api/ChatService";

const service = new ChatService();

export const listActiveChats = (term, status) => async dispatch => {
    const res = await service.listActiveChats(term, status);
    dispatch({
        type: CURRENT_CHAT,
        payload: res.data
    })
    return res && res.data || [];
}

export const createClientChat = (users) => async dispatch => {
    const res = await service.createClientChat(users);
    return res && res.data || [];
}

export const listClientChats = (term) => async dispatch => {
    const res = await service.listClientChats(term);
    return res && res.data || [];
}

export const createCompanyChat = (users, company, allChecked) => async dispatch => {
    const res = await service.createCompanyChat(users, company, allChecked);
    return res && res.data || [];
}

export const createInternalChat = (users) => async dispatch => {
    const res = await service.createInternalChat(users);
    return res && res.data || [];
}

export const listInternalChats = (term) => async dispatch => {
    const res = await service.listInternalChats(term);
    return res && res.data || [];
}

export const findChat = (id) => async dispatch => {
    const res = await service.findChat(id);
    return res && res.data || [];
}

export const deleteChat = (id) => async dispatch => {
    const res = await service.deleteChat(id);
    return res && res.data || [];
}

export const finalizeChat = (idChat, data) => async dispatch => {
    const res = await service.finalizeChat(idChat, data);
    return res && res.data || [];
}

export const nameChatAction = (idChat, data) => async dispatch => {
    const res = await service.nameChat(idChat, data);
    return res && res.data || [];
}

export const listAvailableUsersByCompany = (roles, term) => async dispatch => {
    const res = await service.listAvailableUsersByCompany(roles, term);
    return res && res.data || [];
}

export const listFinalizeChats = (term, status) => async dispatch => {
    const res = await service.listActiveChats(term, status);
    return res && res.data || [];
}