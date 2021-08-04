import {
  buildPath,
  extractDataFromFile,
  saveDataToFile,
} from "../../../../utils/data-utils";

const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email: email,
      name: name,
      text: text,
    };

    saveDataToFile("comments" + eventId + ".json", newComment);
    saveDataToFile("comments.json", newComment);

    res.status(201).json({ message: "Success! Comment Added!", comments: newComment });
  }

  if (req.method === "GET") {
    const filePath = buildPath("comments" + eventId + ".json");
    const data = extractDataFromFile(filePath);

    res.status(200).json({ comments: data });
  }
};

export default handler;
