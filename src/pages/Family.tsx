import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { Plus, Search, Users, UserCheck, Clock, Phone } from "lucide-react";

const familyMembers = [
  {
    id: 1,
    familyId: "FAM001",
    primaryMember: "John Smith",
    totalMembers: 4,
    members: ["John Smith", "Jane Smith", "Tommy Smith", "Sarah Smith"],
    phone: "+1 234-567-8900",
    lastVisit: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    familyId: "FAM002",
    primaryMember: "Michael Johnson",
    totalMembers: 3,
    members: ["Michael Johnson", "Emily Johnson", "Lucas Johnson"],
    phone: "+1 234-567-8901",
    lastVisit: "2024-01-10",
    status: "active",
  },
  {
    id: 3,
    familyId: "FAM003",
    primaryMember: "Sarah Williams",
    totalMembers: 5,
    members: ["Sarah Williams", "David Williams", "Emma Williams", "Oliver Williams", "Sophia Williams"],
    phone: "+1 234-567-8902",
    lastVisit: "2024-01-08",
    status: "active",
  },
  {
    id: 4,
    familyId: "FAM004",
    primaryMember: "Robert Davis",
    totalMembers: 2,
    members: ["Robert Davis", "Linda Davis"],
    phone: "+1 234-567-8903",
    lastVisit: "2023-12-28",
    status: "inactive",
  },
];

export default function Family() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredFamilies = familyMembers.filter((family) => {
    const matchesSearch =
      family.primaryMember.toLowerCase().includes(searchTerm.toLowerCase()) ||
      family.familyId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || family.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeCount = familyMembers.filter((f) => f.status === "active").length;
  const totalPatients = familyMembers.reduce((sum, f) => sum + f.totalMembers, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Family Management</h1>
          <p className="text-muted-foreground">Manage family groups and their members</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Family
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Families</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{familyMembers.length}</div>
            <p className="text-xs text-muted-foreground">Registered family groups</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Families</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{activeCount}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalPatients}</div>
            <p className="text-xs text-muted-foreground">Across all families</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Family Size</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {(totalPatients / familyMembers.length).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">Members per family</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Family Groups</CardTitle>
          <CardDescription>View and manage all registered family groups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search families..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Family ID</TableHead>
                  <TableHead>Primary Member</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFamilies.map((family) => (
                  <TableRow key={family.id}>
                    <TableCell className="font-medium">{family.familyId}</TableCell>
                    <TableCell>{family.primaryMember}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{family.totalMembers}</Badge>
                        <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {family.members.join(", ")}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        {family.phone}
                      </div>
                    </TableCell>
                    <TableCell>{family.lastVisit}</TableCell>
                    <TableCell>
                      <Badge variant={family.status === "active" ? "default" : "secondary"}>
                        {family.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Details
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
