import NotificationViewService from "services/api/NotificationViewService";
import { NOTIFICATIONS_VIEWED } from "services/redux/common/Types";

const service = new NotificationViewService();

export const createNotificationViewed = (data) => async dispatch => {
    const res = await service.createNotificationViewed(data);
    return res && res.data;
}

export const findNotificationViewed = (id) => async dispatch => {
    const res = await service.findNotificationViewed(id);
    return res && res.data;
}

export const listNotificationViewed = (notificationId) => async dispatch => {
    const res = await service.listNotificationViewed(notificationId);
    return res && res.data || [];
}

export const listNotificationViewedByUser = () => async dispatch => {
    const res = await service.listNotificationViewedByUser();
    dispatch({
        type: NOTIFICATIONS_VIEWED,
        payload: res && res.data || []
    })
    return res && res.data || [];
}

export const deleteNotificationViewed = (id) => async dispatch => {
    const res = await service.deleteNotificationViewed(id);
    return res && res.data;
}