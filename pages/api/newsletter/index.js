import { buildPath, extractDataFromFile, saveDataToFile, writeToFile } from "../../../utils/data-utils";

const handler = (req, res) => {
    if (req.method == 'POST') {
        const email = req.body.email;

        const newSubscription = {
            id: new Date().toISOString(),
            email: email
        }

        saveDataToFile("newsletter.json", newSubscription);

        res.status(201).json({ message: 'Success!', subscription: newSubscription })
    } else {
        const filePath = buildPath("newsletter.json");
        const data = extractDataFromFile(filePath);

        res.status(200).json({ subscriptions: data })
    }
};

export default handler;
