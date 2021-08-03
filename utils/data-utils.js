import path from 'path';
import fs from 'fs';

export function buildPath(filename) {
  return path.join(process.cwd(), "data", filename);
}

export function createPath(filePath) {
    if(fs.existsSync(filePath)) return;
    else {
        fs.writeFileSync(filePath,"[]");
    }
}

export function extractDataFromFile(filePath) {
  createPath(filePath);
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export function writeToFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}
