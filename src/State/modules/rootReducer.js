import {combineReducers} from 'redux';
import {
    availableServices,
    globalLoader,
    globalSearch,
    issueTicket,
    pharmacies,
    pharmacyInfo,
    ticketInfo,
    userRegister,
    availableDays,
    scheduleTicket,
    scheduledTickets,
    holidays,
    isConnected,
    unavailableSlots,
    userInterfaceInfo,
    ticketInfos,
    scheduleAppointment,
    findAppointment
} from '.';

const rootReducer = combineReducers({
    findAppointment,
    scheduleAppointment,
    availableServices,
    userInterfaceInfo,
    pharmacies,
    pharmacyInfo,
    issueTicket,
    isConnected,
    globalLoader,
    holidays,
    globalSearch,
    scheduledTickets,
    ticketInfo,
    userRegister,
    availableDays,
    scheduleTicket,
    unavailableSlots,
    ticketInfos
});

export default rootReducer;
