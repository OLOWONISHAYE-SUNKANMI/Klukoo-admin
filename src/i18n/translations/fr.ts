
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
        button: 'Filtrer',
      },
      tableHead: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        status: 'Statut',
        lastVisit: 'Dernière visite',
        appointments: 'Rendez-vous',
        actions: 'Actions',
      },
        dropdownMenu: {
        viewProfile: 'Voir le profil',
        editDetails: 'Modifier',
        deactivate: 'Bloc',
      },
    },

     // Doctor Page
    doctorPage: {
      header: {
        title: 'Gestion des médecins',
        subtitle: 'Afficher et gérer tous les médecins inscrits',
        button: 'Ajouter un médecin',
      },
      mainBody: {
        totalDoctors: 'Total Médecins',
        pendingApprovals: 'Approbations en attente',
        avgRating: 'Note moyenne',
      }, 
      nextSection: {
        title: 'Tous les médecins',
        searchPlaceholder: 'Rechercher des médecins...',
        button: 'Filtre',
      },
       tableHead: {
        name: 'Nom',
        specialty: 'Spécialité',
        email: 'E-mail',
        status: 'Statut',
        patients: 'Patientes',
        rating: 'Notation',
        actions: 'Actes',
      },
      dropDownMenu: {
        viewProfile: 'Voir le profil',
        edit: 'Modifier',
        approve: 'Approuver',
        reject: 'Rejeter',
        deactivate: 'Désactiver',
      },
    },


    // Appointment Page
    appointmentPage: {
      header: {
        title: 'Rendez-vous',
        subtitle: 'Afficher et gérer tous les rendez-vous',
        button: 'Planifier un rendez-vous',
      },
       mainBody: {
        today: 'Aujourd\'hui',
        confirmed: 'Confirmé',
        pending: 'En attente',
        completed: 'Complété',
      },
      tableHead: {
          header: 'Tous les rendez-vous',
          searchPlaceholder: 'Rechercher des rendez-vous...',
          statusFilter: 'Tous les statuts',
          moreFilters: 'Plus de filtres',
          patient: 'Malades',
          doctor: 'Médecin',
          date: 'Date',
          time: 'Temps',
          type: 'Taper',
          status: 'Statut',
          actions: 'Actes',
          view: 'Voir',
          scheduled: 'Prévu',
          confirmed: 'Confirmé',
          pending: 'En attente',
          completed: 'Complété',
          cancelled: 'Annulé',
          consulation: 'Consultation',
          followUp: 'Suivi',
          teleconsultation: 'Téléconsultation',
          reschedule: 'Reprogrammer',
          cancel: 'Annuler',
          markCompleted: 'Marquer comme terminé',
      },
    
       
    
    },
 };
