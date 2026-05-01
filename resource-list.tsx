/**
 * templates/resource-list.tsx
 * ============================
 * KumoFedi — Resource List template
 *
 * A filterable, searchable list of resources with actions.
 * Built with Kumo's Table, Input, Badge, Button, and Pagination.
 */

import {
  PageHeader,
  Button,
  Input,
  Table,
  Badge,
  Pagination,
  Empty,
  Text,
} from "@cloudflare/kumo";
import { useState } from "react";

type Resource = {
  id: string;
  name: string;
  status: "active" | "inactive" | "error";
  type: string;
  updated: string;
};

const MOCK_DATA: Resource[] = [
  { id: "r1", name: "Production API",    status: "active",   type: "API",      updated: "2 min ago" },
  { id: "r2", name: "Staging worker",    status: "active",   type: "Worker",   updated: "1 hr ago"  },
  { id: "r3", name: "Analytics DB",      status: "inactive", type: "Database", updated: "3 days ago"},
  { id: "r4", name: "Auth service",      status: "error",    type: "API",      updated: "10 min ago"},
  { id: "r5", name: "Image CDN",         status: "active",   type: "CDN",      updated: "Just now"  },
];

const STATUS_VARIANT: Record<Resource["status"], "success" | "secondary" | "danger"> = {
  active:   "success",
  inactive: "secondary",
  error:    "danger",
};

export function ResourceListTemplate() {
  const [search, setSearch] = useState("");

  const filtered = MOCK_DATA.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-kumo-base">
      <PageHeader
        title="Resources"
        description={`${filtered.length} resources`}
        actions={
          <Button variant="primary" size="sm">Add resource</Button>
        }
      />

      <main className="px-6 py-6 flex flex-col gap-4">

        {/* Search bar */}
        <div className="max-w-sm">
          <Input
            placeholder="Search resources…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <Empty
            title="No resources found"
            description="Try a different search term."
          />
        ) : (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Type</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head>Updated</Table.Head>
                <Table.Head></Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filtered.map((resource) => (
                <Table.Row key={resource.id}>
                  <Table.Cell>
                    <Text size="sm" weight="medium" className="text-kumo-default">
                      {resource.name}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="sm" className="text-kumo-muted">{resource.type}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant={STATUS_VARIANT[resource.status]}>
                      {resource.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="sm" className="text-kumo-subtle">{resource.updated}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}

        {/* Pagination */}
        <div className="flex justify-end">
          <Pagination currentPage={1} totalPages={1} />
        </div>
      </main>
    </div>
  );
}
