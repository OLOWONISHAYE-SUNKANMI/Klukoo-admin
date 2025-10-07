import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000, appointments: 45 },
  { month: "Feb", revenue: 15000, appointments: 52 },
  { month: "Mar", revenue: 18000, appointments: 61 },
  { month: "Apr", revenue: 22000, appointments: 70 },
  { month: "May", revenue: 25000, appointments: 78 },
  { month: "Jun", revenue: 28000, appointments: 85 },
];

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Appointments Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
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
              name="Revenue ($)"
            />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="hsl(var(--success))"
              strokeWidth={2}
              name="Appointments"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
