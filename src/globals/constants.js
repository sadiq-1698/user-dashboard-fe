import RevenuesIcon from "../static/images/revenues.svg";
import TransactionsIcon from "../static/images/transactions.svg";
import LikesIcon from "../static/images/likes.svg";
import UsersIcon from "../static/images/users.svg";

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
