module.exports = async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { message } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}\`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Beacon, a Business Discovery Intelligence assistant.

Question:
${message}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(JSON.stringify(data));

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "No response generated.";

    return res.status(200).json({
      answer
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      answer: "Gemini Error",
      details: error.message
    });

  }

};
