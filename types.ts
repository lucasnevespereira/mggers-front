export type Position = {
  latitude: number,
  longitude: number,
}

export type Report = {
  position: Position
  reportedAt: Date
}

export const defaultReports: Report[] = []