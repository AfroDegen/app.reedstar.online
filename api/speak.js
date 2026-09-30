module.exports = async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { text } = req.body;

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.GOOGLE\_TTS\_API\_KEY}\`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          input: {
            text
          },
          voice: {
            languageCode: "en-US",
            name: "en-US-Neural2-D"
          },
          audioConfig: {
            audioEncoding: "MP3"
          }
        })
      }
    );

    const data = await response.json();

    return res.status(200).json({
      audioContent: data.audioContent
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Text-to-Speech failed"
    });

  }

};
