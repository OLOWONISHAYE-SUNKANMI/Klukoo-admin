import { Users, Stethoscope, Calendar, DollarSign, AlertCircle, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Patients"
          value="2,543"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatCard
          title="Active Doctors"
          value="47"
          icon={Stethoscope}
          trend={{ value: 5, isPositive: true }}
          variant="success"
        />
        <StatCard
          title="Appointments Today"
          value="32"
          icon={Calendar}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Monthly Revenue"
          value="$28,450"
          icon={DollarSign}
          trend={{ value: 15, isPositive: true }}
          variant="success"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StatCard
          title="Pending Approvals"
          value="8"
          icon={AlertCircle}
          variant="warning"
        />
        <StatCard
          title="Growth Rate"
          value="23%"
          icon={TrendingUp}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <AppointmentsList />
        </div>
      </div>
    </div>
  );
}
