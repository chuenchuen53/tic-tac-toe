import fs from "fs";

export function saveToCSV<T>(
  data: T[keyof T] extends string | number ? T[] : never,
  headerArr: (keyof T)[],
  fileName: string
) {
  const header = headerArr.join(",") + "\n";
  let csv = header;
  data.forEach((row) => (csv += headerArr.map((x) => row[x]).join(",") + "\n"));
  fs.writeFileSync(fileName, csv);
  console.log(`Result saved to ${fileName}`);
}
