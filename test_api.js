async function test() {
  const payload = {
    model: "deepseek-v4-flash",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What is this?" },
          { type: "image", image: { url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD" } }
        ]
      }
    ]
  };

  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk-5371381cda4740a699817c71047091c8"
    },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  console.log(text);
}

test();