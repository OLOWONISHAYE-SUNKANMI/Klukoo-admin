import { useState } from "react";
import { Search, Filter, UserPlus, MoreHorizontal } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const patients = [


  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 234-567-8901",
    status: "active",
    lastVisit: "2024-10-05",
    appointments: 12,
  },
  {
    id: 2,
    name: "Jane Wilson",
    email: "jane.wilson@email.com",
    phone: "+1 234-567-8902",
    status: "active",
    lastVisit: "2024-10-06",
    appointments: 8,
  },
  {
    id: 3,
    name: "Mike Brown",
    email: "mike.brown@email.com",
    phone: "+1 234-567-8903",
    status: "inactive",
    lastVisit: "2024-09-15",
    appointments: 5,
  },
  {
    id: 4,
    name: "Sarah Lee",
    email: "sarah.lee@email.com",
    phone: "+1 234-567-8904",
    status: "active",
    lastVisit: "2024-10-07",
    appointments: 15,
  },
];



export default function Patients() {

   const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("");

 

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('patientPage.header.title')}</h1>
          <p className="text-muted-foreground">{t('patientPage.header.subtitle')}</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          {t('patientPage.header.button')}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('patientPage.mainBody.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t('patientPage.mainBody.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('patientPage.tableHead.name')}</TableHead>
                  <TableHead>{t('patientPage.tableHead.email')}</TableHead>
                  <TableHead>{t('patientPage.tableHead.phone')}</TableHead>
                  <TableHead>{t('patientPage.tableHead.status')}</TableHead>
                  <TableHead>{t('patientPage.tableHead.lastVisit')}</TableHead>
                  <TableHead>{t('patientPage.tableHead.lastVisit')}</TableHead>
                  <TableHead className="text-right">{t('patientPage.tableHead.actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.email}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>
                      <Badge variant={patient.status === "active" ? "default" : "secondary"}>
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>{patient.appointments}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Block</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
