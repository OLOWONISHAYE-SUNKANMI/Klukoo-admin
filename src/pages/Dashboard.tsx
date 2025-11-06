import {
	Users,
	Stethoscope,
	Calendar,
	DollarSign,
	AlertCircle,
	TrendingUp,
} from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { AppointmentsList } from "@/components/dashboard/AppointmentsList";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/SupabaseClient";

export default function Dashboard() {
	const { t } = useTranslation();
	const [totalUsers, setTotalUsers] = useState(0);
	const [totalDoctors, setTotalDoctors] = useState(0);
	const [totalConsultations, setTotalConsultations] = useState(0);

	useEffect(() => {
		const fetchCounts = async () => {
			const [usersResult, doctorsResult, consultationsResult] =
				await Promise.all([
					supabase.from("profiles").select("*", { count: "exact", head: true }),
					supabase
						.from("professional_applications")
						.select("*", { count: "exact", head: true }),
					supabase
						.from("consultation_requests")
						.select("*", { count: "exact", head: true }),
				]);
			setTotalUsers(usersResult.count || 0);
			setTotalDoctors(doctorsResult.count || 0);
			setTotalConsultations(consultationsResult.count || 0);
			// console.log(
			// 	"Users:",
			// 	usersResult.count,
			// 	"Doctors:",
			// 	doctorsResult.count,
			// 	"Consultations:",
			// 	consultationsResult.count
			// );
		};
		fetchCounts();
	}, []);
	return (
		<ProtectedRoute>
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold text-foreground">
						{t("dashboardPage.title")}
					</h1>
					<p className="text-muted-foreground">
						{t("dashboardPage.welcomeBack")}
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<StatCard
						title={t("dashboardPage.statCards.totalPatients")}
						value={totalUsers.toLocaleString()}
						icon={Users}
						trend={{ value: 12, isPositive: true }}
						variant="primary"
					/>
					<StatCard
						title={t("dashboardPage.statCards.activeDoctors")}
						value={totalDoctors.toLocaleString()}
						icon={Stethoscope}
						trend={{ value: 5, isPositive: true }}
						variant="success"
					/>
					<StatCard
						title={t("dashboardPage.statCards.appointmentsToday")}
						value={totalConsultations.toLocaleString()}
						icon={Calendar}
						trend={{ value: 8, isPositive: true }}
					/>
					<StatCard
						title={t("dashboardPage.statCards.monthlyRevenue")}
						value="$28,450"
						icon={DollarSign}
						trend={{ value: 15, isPositive: true }}
						variant="success"
					/>
				</div>

				<div className="grid gap-6 lg:grid-cols-2">
					<StatCard
						title={t("dashboardPage.statCards.pendingApprovals")}
						value="8"
						icon={AlertCircle}
						variant="warning"
					/>
					<StatCard
						title={t("dashboardPage.statCards.growthRate")}
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
