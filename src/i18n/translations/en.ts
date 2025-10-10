
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
        button: 'Filter',
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
      dropdownMenu: {
        viewProfile: 'View Profile',
        editDetails: 'Edit',
        deactivate: 'Block',
      },
    },

    // Doctor Page
    doctorPage: {
      header: {
        title: 'Doctor Management',
        subtitle: 'View and manage all registered doctors',
        button: 'Add Doctor',
      },
      mainBody: {
        totalDoctors: 'Total Doctors',
        pendingApprovals: 'Pending Approvals',
        avgRating: 'Average Rating',
      },
        nextSection: {
        title: 'All Doctors',
        searchPlaceholder: 'Search doctors...',
        button: 'Filter',
      },
      tableHead: {
        name: 'Name',
        specialty: 'Specialty',
        email: 'Email',
        status: 'Status',
        patients: 'Patients',
        rating: 'Rating',
        actions: 'Actions',
      },
      dropDownMenu: {
        viewProfile: 'View Profile',
        edit: 'Edit',
        approve: 'Approve',
        reject: 'Reject',
        deactivate: 'Deactivate',
      },
    },

     // Appointment Page
    appointmentPage: {
      header: {
        title: 'Appointment',
        subtitle: 'View and manage all appointments',
        button: ' Schedule Appointment',
      },
       mainBody: {
        today: 'Today',
        confirmed: 'Confirmed',
        pending: 'Pending',
        completed: 'Completed',
      },
      tableHead: {
          header: 'All Appointments',
          searchPlaceholder: 'Search appointments...',
          statusFilter: 'All Status',
          moreFilters: 'More Filters',
          patient: 'Patients',
          doctor: 'Doctor',
          date: 'Date',
          time: 'Time',
          type: 'Type',
          status: 'Status',
          actions: 'Actions',
          view: 'View',
          confirmed: 'Confirmed',
          pending: 'Pending',
          completed: 'Completed',
          cancelled: 'Cancelled',
          scheduled: 'Scheduled',
          consulation: 'Consultation',
          followUp: 'Follow-up',
          teleconsultation: 'Teleconsultation',
          reschedule: 'Reschedule',
          cancel: 'Cancel',
          markCompleted: 'Mark as Completed',
      },
    },

 };
