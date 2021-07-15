import RevenuesIcon from "../static/images/revenues.svg";
import TransactionsIcon from "../static/images/transactions.svg";
import LikesIcon from "../static/images/likes.svg";
import UsersIcon from "../static/images/users.svg";

const API_BASE_URL = "http://localhost:3001";

export const API_ENDPOINTS = {
  user: {
    regsister: `${API_BASE_URL}/user/register`,
    login: `${API_BASE_URL}/user/login`,
    changePassword: `${API_BASE_URL}/user/changePassword`,
    updateProfile: `${API_BASE_URL}/user/updateProfile`
  }
};

export const ACCESS_TOKEN = "dash-user-token";
export const USER_INFO = "dash-user-info";

export const USER_SCREENS = [
  {
    page: "Dashboard",
    path: "/"
  },
  {
    page: "Transactions",
    path: "/transactions"
  },
  {
    page: "Schedules",
    path: "/schedules"
  },
  {
    page: "Users",
    path: "/users"
  },
  {
    page: "Settings",
    path: "/settings"
  }
];

export const STATS_CARD = [
  {
    stat: "Total Revenues",
    amount: "$2,129,430",
    color: "light-blue",
    icon: RevenuesIcon
  },
  {
    stat: "Total Transactions",
    amount: "1,520",
    color: "peach",
    icon: TransactionsIcon
  },
  {
    stat: "Total Likes",
    amount: "9,721",
    color: "light-pink",
    icon: LikesIcon
  },
  {
    stat: "Total Users",
    amount: "892",
    color: "light-purple",
    icon: UsersIcon
  }
];

export const SCHEDULES = [
  {
    name: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    place: "at Sunset Road, Kuta, Bali",
    tileColor: "purple"
  },
  {
    name: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    place: "at Central Jakarta",
    tileColor: "light-green"
  }
];
