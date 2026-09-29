async function askGemini(prompt) {
  try {
    const API_KEY = "YOUR_API_KEY";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API\_KEY}\`,
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
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    return data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response received.";
  } catch (error) {
    console.error(error);
    return "Beacon encountered an error.";
  }
}
