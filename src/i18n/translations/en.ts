
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

  // Admin Sign in Page 
  signInPage: {
    title: 'Sign in to your account',
    email: 'Email Address',
    password: 'Password',
    button: 'Sign in',
    response: 'Signing in...',
    welcome: 'Welcome to',
    klukoo: 'Klukoo Admin Panel',
  },
 
   // Payment Page 
   paymentPage: {
      header: {
        title: 'Payment & Finances',
        subtitle: 'Manage transactions, billing, and financial reports',
        button: 'Export Reports'
      },
    mainBody: {
        totalRevenue: 'Total Revenue',
        pendingPayments: 'Pending Payments',
        doctorCommissions: 'Doctor Commissions',
        refundsIssued: 'Refunds',
        lastmonth: ' from last month',
        transactions: 'transactions',
        ofrevenue: 'of revenue',
        refundRate: 'Refund Rate',
        revenueOverview: 'Revenue Overview',
        graph: {
          graphRevenue: 'Revenue',
          commissions: 'Commissions',
          refunds: 'Refunds',
        },
        tableHead: {
            tabs: {
              transactions: 'Transactions',
              doctorPayouts: 'Doctor Payouts',
              finance: 'Finance Analytics',
            },
            transaction: 'Transaction ID',
            patient: 'Patient',
            doctor: 'Doctor',
            amount: 'Amount',
            method: 'Method',
            date: 'Date',
            status: 'Status',
            actions: 'Actions', 
            button: 'View',
        },

        doctorTableHead: {
            doctor: 'Doctor Payouts',
            payout: 'Payout ID',
            doc: 'Doctor',
            docsConsultation: 'Consultation',
            amount: 'Amount',
            date: 'Date',
            status: 'Status',
            actions: 'Actions', 
            button: 'View',
        },

        tableMain: {
          title: 'Recent Transactions',
          placeholder: 'Search transactions...',
          statusFilter: 'All Status',
          completed: 'Completed',
          pending: 'Pending',
          refunded: 'Refunded',
        },

        barChart: {
          title: 'Monthly Breakdown',
          revenue: 'Revenue',
          commissions: 'Commissions',
          refunds: 'Refunds',
        }

    },         
  },

   // Reports Page
    reportsPage: {
      
      header: {
        title: 'Reports & Analytics',
      subtitle: 'Comprehensive insights and performance metrics',
      },
     
      overview: {
        users: 'Daily Active Users',
        session: 'Avg. Session Time',
        update: 'System Uptime',
        retention: 'User Retention',
      },

      graph: {
        tabs: {
          usage: 'Usage Metrics',
          doctorPerformance: 'Doctor Performance',
          patientAnalytics: 'Patient Analytics',
          systemHealth: 'System Health',
        },
        header: {
          usage: 'Weekly Usage Trends',
          topDoctors: 'Top Performing Doctors',
          patientGrowth: 'Patient Growth & Retention',
          systemStatus: 'System Uptime',
          recentSystemLogs: 'Recent System Logs',
        }
      },
    },

 };
