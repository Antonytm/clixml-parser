import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
//read test.xml file from the current directory
// Resolve the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, 'test.xml');
// Read the XML file synchronously
const xmlData = fs.readFileSync(filePath, 'utf-8');
// Create a new instance of the XML parser
const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    parseAttributeValue: true,
    parseTagValue: true,
});
// Parse the XML data
const jsonData = parser.parse(xmlData);
// Log the parsed JSON data to the console
console.log(JSON.stringify(jsonData, null, 2));
// write the jsonData to a file
const outputFilePath = path.resolve(__dirname, 'output.json');
fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2), 'utf-8');
//# sourceMappingURL=index.js.map