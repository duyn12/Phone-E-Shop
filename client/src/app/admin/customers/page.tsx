import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CustomersPage() {
  return (
    <main className="gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            View all customers and their orders.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </main>
  );
}
