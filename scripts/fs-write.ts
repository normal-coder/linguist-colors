import fs from 'fs';

/**
 * Write data to a file
 * @param dataName - The summary of the data
 * @param filePath - The path of the file
 * @param data - The data to be written
 */

export default function writeDataToFile(dataName: string, filePath: string, data: string): void {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${dataName} has been written into ${filePath}`);
  });
}
