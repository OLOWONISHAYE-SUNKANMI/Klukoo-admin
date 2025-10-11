import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { DollarSign, TrendingUp, CreditCard, Download, Search, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

const revenueData = [
  { month: "Jan", revenue: 12000, commissions: 3600, refunds: 450 },
  { month: "Feb", revenue: 15000, commissions: 4500, refunds: 320 },
  { month: "Mar", revenue: 18000, commissions: 5400, refunds: 280 },
  { month: "Apr", revenue: 22000, commissions: 6600, refunds: 510 },
  { month: "May", revenue: 25000, commissions: 7500, refunds: 380 },
  { month: "Jun", revenue: 28000, commissions: 8400, refunds: 420 },
];

const transactionsData = [
  {
    id: "TXN-2024-001",
    patient: "John Doe",
    doctor: "Dr. Sarah Johnson",
    amount: 150,
    status: "completed",
    date: "2024-06-15",
    method: "Credit Card",
  },
  {
    id: "TXN-2024-002",
    patient: "Jane Smith",
    doctor: "Dr. Michael Chen",
    amount: 200,
    status: "completed",
    date: "2024-06-14",
    method: "PayPal",
  },
  {
    id: "TXN-2024-003",
    patient: "Bob Johnson",
    doctor: "Dr. Emily Brown",
    amount: 175,
    status: "pending",
    date: "2024-06-14",
    method: "Credit Card",
  },
  {
    id: "TXN-2024-004",
    patient: "Alice Williams",
    doctor: "Dr. James Wilson",
    amount: 180,
    status: "completed",
    date: "2024-06-13",
    method: "Debit Card",
  },
  {
    id: "TXN-2024-005",
    patient: "Charlie Brown",
    doctor: "Dr. Lisa Anderson",
    amount: 160,
    status: "refunded",
    date: "2024-06-13",
    method: "Credit Card",
  },
  {
    id: "TXN-2024-006",
    patient: "Diana Prince",
    doctor: "Dr. Sarah Johnson",
    amount: 220,
    status: "completed",
    date: "2024-06-12",
    method: "PayPal",
  },
];

const doctorPayoutsData = [
  {
    id: "PAY-2024-001",
    doctor: "Dr. Sarah Johnson",
    consultations: 45,
    amount: 4500,
    status: "paid",
    date: "2024-06-01",
  },
  {
    id: "PAY-2024-002",
    doctor: "Dr. Michael Chen",
    consultations: 38,
    amount: 3800,
    status: "paid",
    date: "2024-06-01",
  },
  {
    id: "PAY-2024-003",
    doctor: "Dr. Emily Brown",
    consultations: 42,
    amount: 4200,
    status: "pending",
    date: "2024-06-15",
  },
  {
    id: "PAY-2024-004",
    doctor: "Dr. James Wilson",
    consultations: 35,
    amount: 3500,
    status: "pending",
    date: "2024-06-15",
  },
];

export default function Payments() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      completed: "default",
      pending: "secondary",
      refunded: "destructive",
      paid: "default",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  const filteredTransactions = transactionsData.filter((transaction) => {
    const matchesSearch =
      transaction.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t('paymentPage.header.title')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('paymentPage.header.subtitle')}
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          {t('paymentPage.header.button')}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('paymentPage.mainBody.totalRevenue')}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$28,000</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12% {t('paymentPage.mainBody.lastmonth')}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('paymentPage.mainBody.pendingPayments')}</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,240</div>
            <p className="text-xs text-muted-foreground mt-1">18 {t('paymentPage.mainBody.transactions')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('paymentPage.mainBody.doctorCommissions')}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,400</div>
            <p className="text-xs text-muted-foreground mt-1">30% {t('paymentPage.mainBody.ofrevenue')}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t('paymentPage.mainBody.refundsIssued')}</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$420</div>
            <p className="text-xs text-muted-foreground mt-1">1.5% {t('paymentPage.mainBody.refundRate')}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('paymentPage.mainBody.revenueOverview')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
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
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name= {t('paymentPage.mainBody.graph.graphRevenue')}
              />
              <Line
                type="monotone"
                dataKey="commissions"
                stroke="hsl(var(--success))"
                strokeWidth={2}
                name={t('paymentPage.mainBody.graph.commissions')}
              />
              <Line
                type="monotone"
                dataKey="refunds"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
                name={t('paymentPage.mainBody.graph.refunds')}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">{t('paymentPage.mainBody.tableHead.tabs.transactions')}</TabsTrigger>
          <TabsTrigger value="payouts">{t('paymentPage.mainBody.tableHead.tabs.doctorPayouts')}</TabsTrigger>
          <TabsTrigger value="analytics">{t('paymentPage.mainBody.tableHead.tabs.finance')}</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t('paymentPage.mainBody.tableMain.title')}</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder={t('paymentPage.mainBody.tableMain.placeholder')}
                      className="pl-8 w-64"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('paymentPage.mainBody.tableMain.statusFilter')}</SelectItem>
                      <SelectItem value="completed">{t('paymentPage.mainBody.tableMain.completed')}</SelectItem>
                      <SelectItem value="pending">{t('paymentPage.mainBody.tableMain.pending')}</SelectItem>
                      <SelectItem value="refunded">{t('paymentPage.mainBody.tableMain.refunded')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('paymentPage.mainBody.tableHead.transaction')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.patient')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.doctor')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.amount')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.method')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.date')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.status')}</TableHead>
                    <TableHead>{t('paymentPage.mainBody.tableHead.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.patient}</TableCell>
                      <TableCell>{transaction.doctor}</TableCell>
                      <TableCell>${transaction.amount}</TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                         {t('paymentPage.mainBody.tableHead.button')}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Doctor Payouts</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payout ID</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Consultations</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {doctorPayoutsData.map((payout) => (
                    <TableRow key={payout.id}>
                      <TableCell className="font-medium">{payout.id}</TableCell>
                      <TableCell>{payout.doctor}</TableCell>
                      <TableCell>{payout.consultations}</TableCell>
                      <TableCell>${payout.amount}</TableCell>
                      <TableCell>{payout.date}</TableCell>
                      <TableCell>{getStatusBadge(payout.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={revenueData}>
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
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" />
                  <Bar dataKey="commissions" fill="hsl(var(--success))" name="Commissions" />
                  <Bar dataKey="refunds" fill="hsl(var(--destructive))" name="Refunds" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
