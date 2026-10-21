export interface MaintenancePayload {
  id?: string;
  areaId: string;
  date: string;
  startTime: string;
  endTime: string;
  reason: string;
  name?: string;
}
 export type Schedule = {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  reason: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  area: {
    id: string;
    name: string;
    description: string;
    district: string;
    division: string;
    isActive: boolean;
  };
};