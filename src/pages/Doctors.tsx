import { useState } from "react";
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

const doctors = [
  {
    id: 1,
    name: "Dr. Robert Smith",
    specialty: "Endocrinologist",
    email: "dr.smith@klukoo.com",
    phone: "+1 234-567-8911",
    status: "verified",
    patients: 156,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dr. Emily Johnson",
    specialty: "General Physician",
    email: "dr.johnson@klukoo.com",
    phone: "+1 234-567-8912",
    status: "verified",
    patients: 203,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Dr. Michael Davis",
    specialty: "Diabetologist",
    email: "dr.davis@klukoo.com",
    phone: "+1 234-567-8913",
    status: "pending",
    patients: 0,
    rating: 0,
  },
  {
    id: 4,
    name: "Dr. Sarah Martinez",
    specialty: "Nutritionist",
    email: "dr.martinez@klukoo.com",
    phone: "+1 234-567-8914",
    status: "verified",
    patients: 89,
    rating: 4.7,
  },
];

export default function Doctors() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("");

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
                <p className="mt-1 text-2xl font-bold">47</p>
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
                <p className="mt-1 text-2xl font-bold">8</p>
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
                    <TableCell className="font-medium">{doctor.name}</TableCell>
                    <TableCell>{doctor.specialty}</TableCell>
                    <TableCell>{doctor.email}</TableCell>
                    <TableCell>
                      <Badge variant={doctor.status === "verified" ? "default" : "secondary"}>
                        {doctor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{doctor.patients}</TableCell>
                    <TableCell>{doctor.rating > 0 ? `⭐ ${doctor.rating}` : "N/A"}</TableCell>
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
