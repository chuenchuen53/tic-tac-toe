function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}_${hours}:${minutes}:${seconds}`;
}

function formatDurationToSec(start: Date, end: Date): string {
  const durationMs = end.getTime() - start.getTime();
  const durationSec = durationMs / 1000;
  return durationSec.toFixed(3) + "s";
}

const DateTimeUtil = Object.freeze({ formatDate, formatDurationToSec });
export default DateTimeUtil;
