
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { set } from "date-fns";
import { permission } from "process";

export const fr = {
  // App general
  appName: 'Klukoo',
  appDescription: '',
  appSlogan:
    'La première application intelligente en Afrique qui aide les patients diabétiques à mieux vivre, mieux anticiper et mieux réagir',


    //Admin Dashbboard Title
    AdminDashboard: {
      title: 'Tableau de bord d\'administration',
      menu: 'Menu',
    },
    // Admin Header 

    adminHeader: {
    notifications: 'Notifications',
    requests: 'Nouvelles demandes de rendez-vous',
    paymentStatus: 'Paiement reçu',
    doctorApplication: 'Demande de nouveau médecin',
    },

    // Admin Sidebar 
    adminSiderbar: {
      dashboard: 'Tableau de bord',
      patients: 'Patientes',
      doctors: 'Médecins',
      appointments: 'Rendez-vous',
      payments: 'Paiements',
      content: 'Contenu',
      reports: 'Rapports',
      notifications: 'Notifications',
      settings: 'Paramètres',
    },

    // Dashboard Page
    dashboardPage: {
      title: 'Présentation du tableau de bord',
      welcomeBack: "Bon retour! Voici ce qui se passe aujourd'hui.",

        statCards: {
        totalPatients: 'Nombre total de patients',
        activeDoctors: 'Médecins actifs',
        appointmentsToday: 'Rendez-vous aujourd\'hui',
        monthlyRevenue: 'Revenu mensuel',
        pendingApprovals: 'Approbations en attente',
        growthRate: 'Taux de croissance',
      },

      revenueChart: {
        title: 'Aperçu des revenus et des nominations',
         xAxisName1: 'Revenu ($)',
         xAxisName2: 'Rendez-vous',
      },

      appointmentList: {
        title: 'Rendez-vous d\'aujourd\'hui',
        status: {
          confirmed: 'Confirmé',
          pending: 'En attente',
          completed: 'Complété',
        },
      },
    },

    // Patient Page 
    patientPage: {
      header: {
        title: 'Gestion des patients',
        subtitle: 'Voir et gérer tous les patients enregistrés',
        button: 'Ajouter un patient',
      },
      mainBody: {
        title: 'Tous les patients',
        searchPlaceholder: 'Rechercher des patients...',
      },
      tableHead: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        status: 'Statut',
        lastVisit: 'Dernière visite',
        appointments: 'Rendez-vous',
        actions: 'Actions',
      }
    },

 };
