import { useQuery } from 'react-query'

import http from '../utils/http'
import dayjs from '../utils/dayjs'

import { Summary } from '../types/Summary'
import { SummaryFilter, AvailableDate } from '../types/SummaryFilter'

const formatToHours = (duration: number) => {
  if (duration === 0) {
    return '0m'
  }

  const d = dayjs.duration(duration, 'seconds')
  const h = d.hours()
  const m = d.minutes()
  const result = `${h > 0 ? `${h}h ` : ''}${m}m`

  return result
}

const getSummary = async (
  key: string,
  filter: SummaryFilter
): Promise<Summary> => {
  let dateRangeStart: string
  let dateRangeEnd: string

  switch (filter.date) {
    case AvailableDate.Today:
      dateRangeStart = dayjs().startOf('day').toISOString()
      dateRangeEnd = dayjs().endOf('day').toISOString()
      break
    case AvailableDate.Yesterday:
      dateRangeStart = dayjs().startOf('day').subtract(1, 'day').toISOString()
      dateRangeEnd = dayjs().endOf('day').subtract(1, 'day').toISOString()
      break
    case AvailableDate.ThisWeek:
      dateRangeStart = dayjs().startOf('week').toISOString()
      dateRangeEnd = dayjs().endOf('week').toISOString()
      break
    case AvailableDate.LastWeek:
      dateRangeStart = dayjs().startOf('week').subtract(1, 'week').toISOString()
      dateRangeEnd = dayjs().endOf('week').subtract(1, 'week').toISOString()
      break
    default:
      throw Error('Invalid date range.')
  }

  const {
    data: { totals, groupOne },
  } = await http.post(
    '/workspaces/5eba7650b068fd4ae875af40/reports/summary',
    {
      dateRangeStart,
      dateRangeEnd,
      summaryFilter: {
        groups: ['PROJECT', 'TIMEENTRY'],
      },
    },
    {
      baseURL: process.env.REACT_APP_API_REPORTS_URL,
    }
  )

  const summary = {
    timeSpent: formatToHours(totals[0] ? totals[0].totalTime : 0),
    // TODO: define API response types
    entries: groupOne.reduce((entries: any[], project: any) => {
      entries.push({
        id: project._id,
        projectName: project.name || 'Without project',
        items: project.children.map((child: any) => {
          return {
            id: child._id,
            name: child.name,
            duration: formatToHours(child.duration),
          }
        }),
      })
      return entries
    }, []),
  }

  return summary
}

export default function useSummary(filter: SummaryFilter) {
  return useQuery(['summary', filter], getSummary)
}
