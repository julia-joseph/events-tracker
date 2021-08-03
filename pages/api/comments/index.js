import { buildPath, extractDataFromFile, writeToFile } from "../../../utils/data-utils";

const handler = (req, res) => {
    if (req.method === 'GET') {
        const filePath = buildPath("comments.json");

        const data = extractDataFromFile(filePath);

        res.status(200).json({ comments: data });
    }
}

export default handler;