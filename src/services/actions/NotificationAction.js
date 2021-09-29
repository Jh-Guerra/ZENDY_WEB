import NotificationService from "services/api/NotificationService";

const service = new NotificationService();

export const createCompanyNotification = (data) => async dispatch => {
    const res = await service.createCompanyNotification(data);
    return res && res.data;
}

export const createCompaniesNotification = (data) => async dispatch => {
    const res = await service.createCompaniesNotification(data);
    return res && res.data;
}

export const findNotification = (id) => async dispatch => {
    const res = await service.findNotification(id);
    return res && res.data;
}

export const listAdminNotifications = (term) => async dispatch => {
    const res = await service.listAdminNotifications(term);
    return res && res.data || [];
}

export const listNotifications = (term) => async dispatch => {
    const res = await service.listNotifications(term);
    return res && res.data || [];
}

export const deleteNotification = (id) => async dispatch => {
    const res = await service.deleteNotification(id);
    return res && res.data;
}