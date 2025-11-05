import { useState, useEffect } from "react";
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
import { supabase } from "@/lib/SupabaseClient";





export default function Patients() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'user');
      setPatients(data || []);
    };
    fetchPatients();
  }, []);

 

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
             {t('patientPage.mainBody.button')}
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
                    <TableCell className="font-medium">{`${patient.first_name} ${patient.last_name}`}</TableCell>
                    <TableCell>{patient.email}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>
                      <Badge variant={patient.verified ? "default" : "secondary"}>
                        {patient.verified ? "verified" : "pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(patient.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>{patient.diabetes_type || "N/A"}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>{t('patientPage.dropdownMenu.viewProfile')}</DropdownMenuItem>
                          <DropdownMenuItem>{t('patientPage.dropdownMenu.editDetails')}</DropdownMenuItem>
                          <DropdownMenuItem>{t('patientPage.dropdownMenu.deactivate')}</DropdownMenuItem>
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
