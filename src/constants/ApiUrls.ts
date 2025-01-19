export const HOST = "http://192.168.29.248:5000"

export const BaseURL = `${HOST}/api/v1`

export const UserBaseURL = `${BaseURL}/user`


//User Auth Url
export const REGISTER_USER = `${UserBaseURL}/register`
export const USER_INFO = `${UserBaseURL}/userinfo`
export const USER_LOGIN = `${UserBaseURL}/login`

//Fetching Shops Url
export const GET_ALL_VENDORS = `${UserBaseURL}/get_all_vendors`
export const SEARCH_SHOPS = `${UserBaseURL}/searchshops`

//User Booking Url
export const NEW_BOOKING = `${UserBaseURL}/newbooking`
export const GET_MY_BOOKINGS = `${UserBaseURL}/mybookings`
export const CANCEL_BOOKING = `${UserBaseURL}/cancelbooking`