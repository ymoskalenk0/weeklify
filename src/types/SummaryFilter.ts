export enum AvailableDate {
  Today,
  Yesterday,
  ThisWeek,
  LastWeek,
}

export interface SummaryFilter {
  date: AvailableDate
}
