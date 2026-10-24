export interface AssignmentPayload {
 complaintId: string,
technicianId: string
}

export type AssignmentsType = {
    id: string;
    complaintId: string;
    technicianId: string;
    createdAt: string;
    updatedAt: string;
}