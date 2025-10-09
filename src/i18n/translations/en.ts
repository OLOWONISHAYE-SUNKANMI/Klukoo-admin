
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { set } from "date-fns";
import { permission } from "process";

export const en = {
  // App general
  appName: 'Klukoo',
  appDescription: '',
  appSlogan:
    'The first smart application in Africa that helps diabetic patients live better, anticipate better, and respond better.',


    //Admin Dashbboard Title
    AdminDashboard: {
      title: 'Admin Dashboard',
      menu: 'Menu',
    },
    // Admin Header 

    adminHeader: {
    notifications: 'Notifications',
    requests: 'New appointment requests',
    paymentStatus: 'Payment received',
    doctorApplication: 'New doctor application',
    },

    // Admin Sidebar 
    adminSiderbar: {
      dashboard: 'Dashboard',
      patients: 'Patients',
      doctors: 'Doctors',
      appointments: 'Appointments',
      payments: 'Payments',
      content: 'Content',
      reports: 'Reports',
      notifications: 'Notifications',
      settings: 'Settings',
    },

    // Dashboard Page
    dashboardPage: {
      title: 'Dashboard Overview',
      welcomeBack: "Welcome back! Here's what's happening today.",

        statCards: {
        totalPatients: 'Total Patients',
        activeDoctors: 'Active Doctors',
        appointmentsToday: 'Appointments Today',
        monthlyRevenue: 'Monthly Revenue',
        pendingApprovals: 'Pending Approvals',
        growthRate: 'Growth Rate',
      },

      revenueChart: {
        title: 'Revenue & Appointments Overview',
         xAxisName1: 'Revenue ($)',
         xAxisName2: 'Appointments',
      },

      appointmentList: {
        title: 'Today\'s Appointments',
        status: {
          confirmed: 'Confirmed',
          pending: 'Pending',
          completed: 'Completed',
        },
      },
    },


      // Patient Page 
    patientPage: {
      header: {
        title: 'Patient Management',
        subtitle: 'View and manage all registered patients',
        button: 'Add Patient',
      },
        mainBody: {
        title: 'All Patients',
        searchPlaceholder: 'Search patients...',
      },
      tableHead: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        status: 'Status',
        lastVisit: 'Last Visit',
        appointments: 'Appointments',
        actions: 'Actions',
      },
    },

 };
