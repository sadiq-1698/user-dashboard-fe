import RevenuesIcon from "../static/images/revenues.svg";
import TransactionsIcon from "../static/images/transactions.svg";
import LikesIcon from "../static/images/likes.svg";
import UsersIcon from "../static/images/users.svg";

import TransactionWhite from "../static/images/sidebar-transaction.svg";
import ScheduleWhite from "../static/images/sidebar-schedule.svg";
import SettingsWhite from "../static/images/sidebar-settings.svg";
import DashboardWhite from "../static/images/sidebar-dashboard.svg";
import UserWhite from "../static/images/sidebar-user.svg";

export const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

export const API_ENDPOINTS = {
  user: {
    regsister: `${API_BASE_URL}/user/register`,
    login: `${API_BASE_URL}/user/login`,
    changePassword: `${API_BASE_URL}/user/changePassword`,
    updateProfile: `${API_BASE_URL}/user/updateProfile`,
    getAllUsers: `${API_BASE_URL}/users`
  }
};

export const ACCESS_TOKEN = "dash-user-token";
export const USER_INFO = "dash-user-info";

export const USER_SCREENS = [
  {
    page: "Dashboard",
    path: "/",
    icon: DashboardWhite
  },
  {
    page: "Transactions",
    path: "/transactions",
    icon: TransactionWhite
  },
  {
    page: "Schedules",
    path: "/schedules",
    icon: ScheduleWhite
  },
  {
    page: "Users",
    path: "/users",
    icon: UserWhite
  },
  {
    page: "Settings",
    path: "/settings",
    icon: SettingsWhite
  }
];

export const ENTRY_SCREENS = [
  {
    page: "Login",
    path: "/login"
  },
  {
    page: "Register",
    path: "/register"
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
