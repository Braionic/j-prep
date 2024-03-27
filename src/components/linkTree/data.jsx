export const menulink = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "security",
        to: "/security",
        children: [
          { 
            label: "login", 
            to: "login" 
          },
          {
            label: "register",
            to: "register"
          }
        ],
      },
    ],
  },

];

export default menulink;
