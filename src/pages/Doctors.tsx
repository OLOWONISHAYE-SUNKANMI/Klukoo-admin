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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Doctor Management</h1>
          <p className="text-muted-foreground">Manage doctors and approve applications</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Doctor
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Doctors</p>
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
                <p className="text-sm text-muted-foreground">Pending Approvals</p>
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
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="mt-1 text-2xl font-bold">4.8</p>
              </div>
              <div className="text-2xl">⭐</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search doctors..."
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
                  <TableHead>Name</TableHead>
                  <TableHead>Specialty</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Patients</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
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
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          {doctor.status === "pending" && (
                            <>
                              <DropdownMenuItem>Approve</DropdownMenuItem>
                              <DropdownMenuItem>Reject</DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
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
