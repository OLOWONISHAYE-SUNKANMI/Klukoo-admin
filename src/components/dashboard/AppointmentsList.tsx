import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

const recentAppointments = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Smith",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: 2,
    patient: "Jane Wilson",
    doctor: "Dr. Johnson",
    time: "11:30 AM",
    status: "pending",
  },
  {
    id: 3,
    patient: "Mike Brown",
    doctor: "Dr. Davis",
    time: "2:00 PM",
    status: "confirmed",
  },
  {
    id: 4,
    patient: "Sarah Lee",
    doctor: "Dr. Martinez",
    time: "3:30 PM",
    status: "completed",
  },
];

export function AppointmentsList() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      case "completed":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {appointment.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{appointment.patient}</p>
                  <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {appointment.time}
                </div>
                <Badge variant={getStatusVariant(appointment.status)}>
                  {appointment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
