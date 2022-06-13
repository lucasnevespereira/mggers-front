export interface Position {
  latitude: number,
  longitude: number,
}

export interface Report {
  id: number
  description: string
  position: Position
  reportedAt: Date
}

export interface Contact {
  id: number
  number: string,
  icon: string,
  desc: string,
}

export const defaultPosition: Position = {
  latitude: 0,
  longitude: 0,
}

export const defaultReports: Report[] = [
  {
    id: 1,
    description: "Example Report",
    position: defaultPosition,
    reportedAt: new Date,
  }
];
