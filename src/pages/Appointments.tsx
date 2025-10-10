import { useState } from "react";
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
import { useTranslation } from 'react-i18next';




export default function Appointments() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");


  
const appointments = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Smith",
    date: "2024-10-07",
    time: "10:00 AM",
    type: t('appointmentPage.tableHead.consulation'),
    status: t('appointmentPage.tableHead.confirmed'),
  },
  {
    id: 2,
    patient: "Jane Wilson",
    doctor: "Dr. Johnson",
    date: "2024-10-07",
    time: "11:30 AM",
    type: t('appointmentPage.tableHead.followUp'),
    status: t('appointmentPage.tableHead.pending'),
  },
  {
    id: 3,
    patient: "Mike Brown",
    doctor: "Dr. Davis",
    date: "2024-10-07",
    time: "2:00 PM",
    type: t('appointmentPage.tableHead.teleconsultation'),
    status: t('appointmentPage.tableHead.cancelled'),
  },
  {
    id: 4,
    patient: "Sarah Lee",
    doctor: "Dr. Martinez",
    date: "2024-10-07",
    time: "3:30 PM",
    type: t('appointmentPage.tableHead.consulation'),
    status: t('appointmentPage.tableHead.completed'),
  },
  {
    id: 5,
    patient: "Tom Harris",
    doctor: "Dr. Smith",
    date: "2024-10-08",
    time: "9:00 AM",
    type: t('appointmentPage.tableHead.followUp'),
    status: t('appointmentPage.tableHead.scheduled'),
  },
];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('appointmentPage.header.title')}</h1>
          <p className="text-muted-foreground">{t('appointmentPage.header.subtitle')}</p>
        </div>
        <Button>
          <CalendarIcon className="mr-2 h-4 w-4" />
         {t('appointmentPage.header.button')}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('appointmentPage.mainBody.today')}</p>
            <p className="mt-1 text-2xl font-bold">32</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('appointmentPage.mainBody.confirmed')}</p>
            <p className="mt-1 text-2xl font-bold">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('appointmentPage.mainBody.pending')}</p>
            <p className="mt-1 text-2xl font-bold">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">{t('appointmentPage.mainBody.completed')}</p>
            <p className="mt-1 text-2xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('appointmentPage.tableHead.header')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t('appointmentPage.tableHead.searchPlaceholder')}
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
                <SelectItem value="all">{t('appointmentPage.tableHead.statusFilter')}</SelectItem>
                <SelectItem value="scheduled">{t('appointmentPage.tableHead.scheduled')}</SelectItem>
                <SelectItem value="confirmed">{t('appointmentPage.tableHead.confirmed')}</SelectItem>
                <SelectItem value="pending">{t('appointmentPage.tableHead.pending')}</SelectItem>
                <SelectItem value="completed">{t('appointmentPage.tableHead.completed')}</SelectItem>
                <SelectItem value="cancelled">{t('appointmentPage.tableHead.cancelled')}</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              {t('appointmentPage.tableHead.moreFilters')}
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('appointmentPage.tableHead.patient')}</TableHead>
                  <TableHead>{t('appointmentPage.tableHead.doctor')}</TableHead>
                  <TableHead>{t('appointmentPage.tableHead.date')}</TableHead>
                  <TableHead>{t('appointmentPage.tableHead.time')}</TableHead>
                  <TableHead>{t('appointmentPage.tableHead.type')}</TableHead>
                  <TableHead>{t('appointmentPage.tableHead.status')}</TableHead>
                  <TableHead className="text-right">{t('appointmentPage.tableHead.status')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell className="font-medium">{appointment.patient}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          appointment.status === "confirmed" || appointment.status === "completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {appointment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                       {t('appointmentPage.tableHead.view')}
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
