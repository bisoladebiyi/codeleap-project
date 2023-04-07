import { DateTime } from "luxon"

export const dhm = (t: number) => {
    let cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor((t - d * cd) / ch),
        m = Math.round((t - d * cd - h * ch) / 60000)

    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    return [
        { type: 'day', value: d },
        { type: 'hour', value: h },
        { type: 'minute', value: m }
    ]
}

export const humanize = (t: DateTime | string) => {
    const parseTime = typeof t === 'string' ? DateTime.fromISO(t) : t
    const now = DateTime.now()
    const times = dhm(now.diff(parseTime).milliseconds)
    const time = times.find(e => e.value !== 0)
    return time ? `${time.value} ${time.type}${time.value > 1 ? 's' : ''} ago` : `0 minutes ago`
}