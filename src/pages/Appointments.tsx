import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { supabase } from "@/lib/SupabaseClient";

export default function Appointments() {
	const { t } = useTranslation();
	const [searchQuery, setSearchQuery] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [appointments, setAppointments] = useState([]);
	const [appointmentCounts, setAppointmentCounts] = useState({
		total: 0,
		confirmed: 0,
		pending: 0,
		completed: 0
	});

	useEffect(() => {
		const fetchAppointments = async () => {
			const { data, error } = await supabase
				.from("consultation_requests")
				.select("*");
			if (error) {
				// console.error("Error:", error);
				return;
			}

			const appointmentsWithNames = await Promise.all(
				(data || []).map(async (appointment) => {
					// console.log("Processing appointment:", {
					// 	id: appointment.id,
					// 	patient_id: appointment.patient_id,
					// 	professional_id: appointment.professional_id,
					// });

					const [patientResult, professionalAppResult] = await Promise.all([
						supabase
							.from("profiles")
							.select("first_name, last_name")
							.eq("user_id", appointment.patient_id)
							.maybeSingle(),
						supabase
							.from("professional_applications")
							.select("first_name, last_name")
							.eq("id", appointment.professional_id)
							.maybeSingle(),
					]);
					// console.log("Fetched patientResult:", patientResult);
					// console.log("Fetched professionalAppResult:", professionalAppResult);

					return {
						...appointment,
						patient_name: patientResult.data
							? `${patientResult.data.first_name} ${patientResult.data.last_name}`
							: "Unknown Patient",
						professional_name: professionalAppResult.data
							? `${professionalAppResult.data.first_name} ${professionalAppResult.data.last_name}`
							: "Unknown Professional",
					};
				})
			);

			// console.log("Appointments with Names:", appointmentsWithNames);

			setAppointments(appointmentsWithNames);

			setAppointmentCounts({
				total: appointmentsWithNames.length,
				confirmed: appointmentsWithNames.filter(a => a.status === 'confirmed').length,
				pending: appointmentsWithNames.filter(a => a.status === 'pending' || !a.status).length,
				completed: appointmentsWithNames.filter(a => a.status === 'completed').length
			});
		};
		fetchAppointments();
	}, []);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-foreground">
						{t("appointmentPage.header.title")}
					</h1>
					<p className="text-muted-foreground">
						{t("appointmentPage.header.subtitle")}
					</p>
				</div>
				<Button>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{t("appointmentPage.header.button")}
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-4">
				<Card>
					<CardContent className="pt-6">
						<p className="text-sm text-muted-foreground">
							{t("appointmentPage.mainBody.today")}
						</p>
						<p className="mt-1 text-2xl font-bold">{appointmentCounts.total}</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="pt-6">
						<p className="text-sm text-muted-foreground">
							{t("appointmentPage.mainBody.confirmed")}
						</p>
						<p className="mt-1 text-2xl font-bold">{appointmentCounts.confirmed}</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="pt-6">
						<p className="text-sm text-muted-foreground">
							{t("appointmentPage.mainBody.pending")}
						</p>
						<p className="mt-1 text-2xl font-bold">{appointmentCounts.pending}</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="pt-6">
						<p className="text-sm text-muted-foreground">
							{t("appointmentPage.mainBody.completed")}
						</p>
						<p className="mt-1 text-2xl font-bold">{appointmentCounts.completed}</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>{t("appointmentPage.tableHead.header")}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="mb-4 flex gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								placeholder={t("appointmentPage.tableHead.searchPlaceholder")}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10"
							/>
						</div>
						<Select value={statusFilter} onValueChange={setStatusFilter}>
							<SelectTrigger className="w-40">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">
									{t("appointmentPage.tableHead.statusFilter")}
								</SelectItem>
								<SelectItem value="scheduled">
									{t("appointmentPage.tableHead.scheduled")}
								</SelectItem>
								<SelectItem value="confirmed">
									{t("appointmentPage.tableHead.confirmed")}
								</SelectItem>
								<SelectItem value="pending">
									{t("appointmentPage.tableHead.pending")}
								</SelectItem>
								<SelectItem value="completed">
									{t("appointmentPage.tableHead.completed")}
								</SelectItem>
								<SelectItem value="cancelled">
									{t("appointmentPage.tableHead.cancelled")}
								</SelectItem>
							</SelectContent>
						</Select>
						<Button variant="outline">
							<Filter className="mr-2 h-4 w-4" />
							{t("appointmentPage.tableHead.moreFilters")}
						</Button>
					</div>

					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>
										{t("appointmentPage.tableHead.patient")}
									</TableHead>
									<TableHead>{t("appointmentPage.tableHead.doctor")}</TableHead>
									<TableHead>{t("appointmentPage.tableHead.date")}</TableHead>
									<TableHead>{t("appointmentPage.tableHead.time")}</TableHead>
									<TableHead>{t("appointmentPage.tableHead.type")}</TableHead>
									<TableHead>{t("appointmentPage.tableHead.status")}</TableHead>
									<TableHead className="text-right">
										{t("appointmentPage.tableHead.status")}
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{appointments.map((appointment) => (
									<TableRow key={appointment.id}>
										<TableCell className="font-medium">
											{appointment.patient_name || "N/A"}
										</TableCell>
										<TableCell>
											{appointment.professional_name || "N/A"}
										</TableCell>
										<TableCell>
											{new Date(appointment.created_at).toLocaleDateString()}
										</TableCell>
										<TableCell>
											{new Date(appointment.created_at).toLocaleTimeString()}
										</TableCell>
										<TableCell>
											{appointment.consultation_reason || "Consultation"}
										</TableCell>
										<TableCell>
											<Badge
												variant={
													appointment.status === "confirmed" ||
													appointment.status === "completed"
														? "default"
														: "secondary"
												}>
												{appointment.status || "pending"}
											</Badge>
										</TableCell>
										<TableCell className="text-right">
											<Button variant="ghost" size="sm">
												{t("appointmentPage.tableHead.view")}
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
