import { useState, useEffect } from "react";
import { Search, Filter, UserPlus, MoreHorizontal, CheckCircle, XCircle } from "lucide-react";
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



export default function Doctors() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await supabase
        .from('professional_applications')
        .select('*');
      setDoctors(data || []);
      setTotalDoctors(data?.length || 0);
      setPendingApprovals(data?.filter(d => !d.verified).length || 0);
    };
    fetchDoctors();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('doctorPage.header.title')}</h1>
          <p className="text-muted-foreground">{t('doctorPage.header.subtitle')}</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
         {t('doctorPage.header.button')}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('doctorPage.mainBody.totalDoctors')}</p>
                <p className="mt-1 text-2xl font-bold">{totalDoctors}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('doctorPage.mainBody.pendingApprovals')}</p>
                <p className="mt-1 text-2xl font-bold">{pendingApprovals}</p>
              </div>
              <XCircle className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{t('doctorPage.mainBody.avgRating')}</p>
                <p className="mt-1 text-2xl font-bold">4.8</p>
              </div>
              <div className="text-2xl">⭐</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('doctorPage.nextSection.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t('doctorPage.nextSection.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              {t('doctorPage.nextSection.button')}
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('doctorPage.tableHead.name')}</TableHead>
                  <TableHead>{t('doctorPage.tableHead.specialty')}</TableHead>
                  <TableHead>{t('doctorPage.tableHead.email')}</TableHead>
                  <TableHead>{t('doctorPage.tableHead.status')}</TableHead>
                  <TableHead>{t('doctorPage.tableHead.patients')}</TableHead>
                  <TableHead>{t('doctorPage.tableHead.rating')}</TableHead>
                  <TableHead className="text-right">{t('doctorPage.tableHead.actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors.map((doctor) => (
                  <TableRow key={doctor.id}>
                    <TableCell className="font-medium">{`${doctor.first_name} ${doctor.last_name}`}</TableCell>
                    <TableCell>{doctor.specialty || "N/A"}</TableCell>
                    <TableCell>{doctor.email}</TableCell>
                    <TableCell>
                      <Badge variant={doctor.verified ? "default" : "secondary"}>
                        {doctor.verified ? "verified" : "pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>{t('doctorPage.dropDownMenu.viewProfile')}</DropdownMenuItem>
                          <DropdownMenuItem>{t('doctorPage.dropDownMenu.edit')}</DropdownMenuItem>
                          {doctor.status === "pending" && (
                            <>
                              <DropdownMenuItem>{t('doctorPage.dropDownMenu.approve')}</DropdownMenuItem>
                              <DropdownMenuItem>{t('doctorPage.dropDownMenu.reject')}</DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuItem>{t('doctorPage.dropDownMenu.deactivate')}</DropdownMenuItem>
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
