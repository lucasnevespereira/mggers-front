export type Position = {
  latitude: number,
  longitude: number,
}

export type Report = {
  position: Position
  reportedAt: Date
}

export const defaultReports: Report[] = [
  {
    position: {
      latitude: 48.92944647877044,
      longitude: 2.048076657335187,
    },
    reportedAt: new Date,
  },
  {
    position: {
      latitude: 48.93095405947195,
      longitude: 2.0506704835423673,
    },
    reportedAt: new Date,
  },
];