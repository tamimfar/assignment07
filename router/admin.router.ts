const prefix = "/admin";
export const adminRouter = {
  
  navMain: [
    {
      title: "Dashboard",
      url: `/admin`,
      
      items: [
        {
          title: "Dashboard",
          url: `/dashboard`,
        },
        {
          title: "Area",
          url: `/area`,
        },
        {
          title: "Create Area",
          url: `/area/createarea`,
        },
        {
          title: "Assign ",
          url: `/assign`,
        },
        {
          title: "Complain",
          url: `/complain`,
        },
        {
          title: "Complain Create",
          url: `/complain/create`,
        },
        {
          title: "Schedule",
          url: `/schedule`,
        },
        {
          title: "Schedule Create",
          url: `/schedule/create`,
        },

      ],
    },
    
  
  ],
}