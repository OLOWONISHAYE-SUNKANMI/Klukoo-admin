import { Users, Stethoscope, Calendar, DollarSign, AlertCircle, TrendingUp } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";
import { useTranslation } from 'react-i18next';


export default function Dashboard() {

    const { t } = useTranslation()
  return (
    <ProtectedRoute>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{t('dashboardPage.title')}</h1>
        <p className="text-muted-foreground">{t('dashboardPage.welcomeBack')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t('dashboardPage.statCards.totalPatients')}
          value="2,543"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title={t('dashboardPage.statCards.activeDoctors')}
          value="47"
          icon={Stethoscope}
          trend={{ value: 5, isPositive: true }}
          variant="success"
        />
        <StatCard
          title={t('dashboardPage.statCards.appointmentsToday')}
          value="32"
          icon={Calendar}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title={t('dashboardPage.statCards.monthlyRevenue')}
          value="$28,450"
          icon={DollarSign}
          trend={{ value: 15, isPositive: true }}
          variant="success"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StatCard
          title={t('dashboardPage.statCards.pendingApprovals')}
          value="8"
          icon={AlertCircle}
          variant="warning"
        />
        <StatCard
          title={t('dashboardPage.statCards.growthRate')}
          value="23%"
          icon={TrendingUp}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className=" gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
       
      </div>

       <div>
          <AppointmentsList />
        </div>
    </div>
    </ProtectedRoute>
  );
}
