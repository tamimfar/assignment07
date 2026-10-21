
"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateStatus, useUserId } from "@/hook";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
const items = [
  { label: "ACTIVE", value: "ACTIVE" },
  { label: "INACTIVE", value: "INACTIVE" },
  { label: "BLOCKED", value: "BLOCKED" },
];

export default function Status({ id }: { id: string }) {
  const queryClient = useQueryClient()
  const router = useRouter();


  const [status, setStatus] = useState("");

  const {
    data,
    isLoading,
    isError,
  } = useUserId(id ?? "");

  const {
    mutate: updateStatus,
    isPending,
  } = useUpdateStatus();

  // Redirect when the user ID is missing
  useEffect(() => {
    if (!id) {
      router.replace("/users");
    }
  }, [id, router]);

  // Set the current status from the API
  useEffect(() => {
    if (data?.data?.status) {
      setStatus(data.data.status);
    }
  }, [data]);

  const handleChange = (value: string) => {
    setStatus(value);
  };

  const handleUpdate = () => {
  if (!id || !status) {
    toast.error("User ID and status are required");
    return;
  }

  updateStatus(
    { id, status },
    {
      onSuccess: async () => {
        toast.success("Status updated successfully");

        await queryClient.invalidateQueries({
          queryKey: ["users"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["usersId"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["user"],
        });

        router.refresh();
      },

      onError: () => {
        toast.error("Failed to update status");
      },
    }
  );
};

  if (!id) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.data) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-destructive">
          Failed to load user information.
        </p>
        <Button
          variant="outline"
          onClick={() => router.push("/users")}
        >
          Back to Users
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
     

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Select Status
        </label>

        <Select
          value={status}
          onValueChange={handleChange}
        >
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>User Status</SelectLabel>

              {items.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={handleUpdate}
        disabled={
          !status ||
          status === data?.data?.status ||
          isPending
        }
      >
        {isPending ? "Updating..." : "Submit"}
      </Button>

      <p className="text-sm text-muted-foreground">
        Selected status: {status || "None"}
      </p>
    </div>
  );
}
