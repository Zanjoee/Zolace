function intro() {
  let output = "Hello! I'm Zolace, a chatbot here to answer questions about Zanjoe. Feel free to ask me anything about my creator.";
  return output;
}

function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  // Core questions
  if (input.startsWith("hello") || input.startsWith("hi") || input.startsWith("hey")) {
    output = "Hello, nice to meet you!";
  } else if (input.includes("how are you")) {
    output = "I'm doing fine, thank you for asking.";
  } else if (input.includes("what is your name") || input.includes("who are you")) {
    output = "My name is Zolace, I'm a chatbot.";
  } else if (input.includes("what can you do")) {
    output = "I can chat with you and answer some simple questions about Zanjoe.";

  // Zanjoe-specific questions
  } else if (input.includes("what is his favorite food") || input.includes("favorite food") || input.includes("what does he like to eat")) {
    output = "Zanjoe's favorite food is aside from Tokwa't Baboy, he also likes Fried Chicker.";
  } else if (input.includes("what is his favorite drink")) {
    output = "Zanjoe's favorite drink is coffee.";
  } else if (input.includes("what is his favorite movie genre")) {
    output = "Zanjoe likes movies with science fiction genres.";
  } else if (input.includes("what is his favorite tv show")) {
    output = "Zanjoe doesn't really watch TV shows.";
  } else if (input.includes("what is his favorite video game")) {
    output = "Zanjoe enjoys playing Mobile Legends.";
  } else if (input.includes("what is his favorite social media")) {
    output = "Zanjoe doesn't really use social media.";
  } else if (input.includes("what is his favorite animal")) {
    output = "Zanjoe likes cats and dogs.";
  } else if (input.includes("what is his favorite season")) {
    output = "Zanjoe prefers the rainy season.";
  } else if (input.includes("what is his favorite holiday")) {
    output = "Zanjoe doesn't have a particular favorite holiday.";
  } else if (input.includes("describe zanjoe")) {
    output = "Zanjoe is a 13-year-old introverted and nonchalant guy who likes people with good hygiene.";
  } else if (input.includes("what is his favorite food") || input.includes("favorite food") || input.includes("what does he like to eat")) {
    output = "Zanjoe's favorite food is Tokwa't Baboy, a Filipino dish.";
  } else if (input.includes("what are his hobbies") || input.includes("his hobbies") || input.includes("what does he like to do")) {
    output = "Zanjoe enjoys playing mobile games, especially Mobile Legends, learning new things about science, and coding.";
  } else if (input.includes("what is his favorite song") || input.includes("his favorite music") || input.includes("what music does he listen to")) {
    output = "Zanjoe's favorite song is 'Happiness' by Rex Orange County, and he also enjoys nostalgic music.";
  } else if (input.includes("what are his favorite books") || input.includes("his favorite books") || input.includes("what does he read")) {
    output = "Zanjoe likes philosophy books and adventure movies, but he doesn’t have specific favorites.";
  } else if (input.includes("is he introverted") || input.includes("his personality") || input.includes("how would you describe him")) {
    output = "Zanjoe is an introverted person who enjoys being alone.";
  } else if (input.includes("what is his daily routine") || input.includes("his routine")) {
    output = "Zanjoe doesn’t have a specific daily routine.";
  } else if (input.includes("what are his future goals") || input.includes("his career goals") || input.includes("what does he want to be")) {
    output = "Zanjoe aspires to be an IT professional someday because he loves technology.";
  } else if (input.includes("how old is he") || input.includes("zanjoe's age")) {
    output = "Zanjoe is 13 years old.";
  } else if (input.includes("where does he live") || input.includes("zanjoe's address")) {
    output = "Zanjoe lives in Solib Prk. 4, Florida Blanca, Pampanga.";
  } else if (input.includes("what does zanjoe like to do") || input.includes("zanjoe's hobbies")) {
    output = "Zanjoe enjoys playing mobile games and programming.";
  } else if (input.includes("what are zanjoe's values") || input.includes("zanjoe's beliefs")) {
    output = "Zanjoe values education and his faith.";
  } else if (input.includes("what does zanjoe want to be") || input.includes("zanjoe's career")) {
    output = "Zanjoe is considering becoming an IT professional or a doctor.";
  } else if (input.includes("what is zanjoe like") || input.includes("zanjoe's personality")) {
    output = "Zanjoe is an introverted and nonchalant person.";
  } else if (input.includes("what does zanjoe like about school") || input.includes("zanjoe's favorite subject")) {
    output = "Zanjoe enjoys science.";
  } else if (input.includes("does he have crush on me") || input.includes("crush on me")) {
    output = "Assuming.";
  } else if (input.includes("does he have a crush")) {
    output = "Shhh, Zanjoe didn't tell me that :3";
  } else if (input.includes("what is his birthday") || input.includes("birthday")) {
    output = "Zanjoe's birthday is on the 15th of October.";
  } else if (input.includes("what is his favorite color")|| input.includes("favorite color")) {
    output = "Zanjoe's favorite color is black.";
  } else if (input.includes("what is his height")) {
    output = "Zanjoe is 5'3 tall."; // Replace with actual height
  } else if (input.includes("what is his full name") || input.includes("full name")) {
    output = "Zanjoe's full name is Zanjoe M. David"; // Adjust as needed
  } else if (input.includes("girlfriend")) {
      output = "Zanjoe is too focused on his studies and hobbies to think about girlfriends.";
  }  else if (input.includes("what type of girl does he like") || input.includes("what is his ideal girl")) {
      output = "Zanjoe hasn't really talked about his ideal type.";
  } else if (input.includes("is he shy around girls")) {
      output = "Being an introvert, Zanjoe can be a bit shy around new people, including girls.";
  }
  else {
    output = "Sorry, I don't have answer to that; can you paraphrase or ask me something else about Zanjoe?";
  }

  return output;
}

// ... rest of the code ...

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input);
    setTimeout(function() {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    sendMessage();
  }
});

// Initial bot message
displayBotMessage(intro());