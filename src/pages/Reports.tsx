import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Activity, TrendingUp, Users, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const usageData = [
  { date: "Mon", activeUsers: 245, newUsers: 32, sessions: 412 },
  { date: "Tue", activeUsers: 289, newUsers: 28, sessions: 468 },
  { date: "Wed", activeUsers: 312, newUsers: 45, sessions: 523 },
  { date: "Thu", activeUsers: 278, newUsers: 38, sessions: 489 },
  { date: "Fri", activeUsers: 334, newUsers: 52, sessions: 578 },
  { date: "Sat", activeUsers: 198, newUsers: 24, sessions: 312 },
  { date: "Sun", activeUsers: 167, newUsers: 18, sessions: 267 },
];

const doctorPerformanceData = [
  { name: "Dr. Sarah Johnson", consultations: 156, rating: 4.9, cancellations: 3 },
  { name: "Dr. Michael Chen", consultations: 142, rating: 4.8, cancellations: 5 },
  { name: "Dr. Emily Brown", consultations: 138, rating: 4.7, cancellations: 4 },
  { name: "Dr. James Wilson", consultations: 129, rating: 4.6, cancellations: 7 },
  { name: "Dr. Lisa Anderson", consultations: 118, rating: 4.8, cancellations: 2 },
];

const patientMetricsData = [
  { month: "Jan", newPatients: 234, activePatients: 1245, retention: 87 },
  { month: "Feb", newPatients: 289, activePatients: 1456, retention: 89 },
  { month: "Mar", newPatients: 312, activePatients: 1623, retention: 91 },
  { month: "Apr", newPatients: 278, activePatients: 1789, retention: 88 },
  { month: "May", newPatients: 345, activePatients: 1934, retention: 92 },
  { month: "Jun", newPatients: 398, activePatients: 2145, retention: 94 },
];

const systemHealthData = [
  { name: "Uptime", value: 99.8 },
  { name: "Downtime", value: 0.2 },
];

const COLORS = ["hsl(var(--success))", "hsl(var(--destructive))"];

export default function Reports() {

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('reportsPage.header.title')}</h1>
        <p className="text-muted-foreground mt-1">
          {t('reportsPage.header.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('reportsPage.overview.users')}</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('reportsPage.overview.session')}</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4 min</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +2.1% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('reportsPage.overview.update')}</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('reportsPage.overview.retention')}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.2%</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +3.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="usage" className="space-y-4">
        <TabsList>
          <TabsTrigger value="usage">{t('reportsPage.graph.tabs.usage')}</TabsTrigger>
          <TabsTrigger value="doctors">{t('reportsPage.graph.tabs.doctorPerformance')}</TabsTrigger>
          <TabsTrigger value="patients">{t('reportsPage.graph.tabs.patientAnalytics')}s</TabsTrigger>
          <TabsTrigger value="system">{t('reportsPage.graph.tabs.systemHealth')}</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('reportsPage.graph.header.usage')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="activeUsers"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="Active Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="newUsers"
                    stroke="hsl(var(--success))"
                    strokeWidth={2}
                    name="New Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    name="Sessions"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="doctors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('reportsPage.graph.header.topDoctors')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={doctorPerformanceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" width={150} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="consultations" fill="hsl(var(--primary))" name="Consultations" />
                  <Bar dataKey="cancellations" fill="hsl(var(--destructive))" name="Cancellations" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {doctorPerformanceData.slice(0, 3).map((doctor, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{doctor.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Consultations</span>
                    <span className="font-semibold">{doctor.consultations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <span className="font-semibold">⭐ {doctor.rating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cancellations</span>
                    <span className="font-semibold">{doctor.cancellations}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="patients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('reportsPage.graph.header.patientGrowth')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={patientMetricsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="newPatients"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="New Patients"
                  />
                  <Line
                    type="monotone"
                    dataKey="activePatients"
                    stroke="hsl(var(--success))"
                    strokeWidth={2}
                    name="Active Patients"
                  />
                  <Line
                    type="monotone"
                    dataKey="retention"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    name="Retention %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={systemHealthData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {systemHealthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent System Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-success mt-1.5" />
                    <div className="flex-1">
                      <p className="font-medium">Database backup completed</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-warning mt-1.5" />
                    <div className="flex-1">
                      <p className="font-medium">High API response time detected</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-success mt-1.5" />
                    <div className="flex-1">
                      <p className="font-medium">Security patch applied</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-success mt-1.5" />
                    <div className="flex-1">
                      <p className="font-medium">System update completed</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
