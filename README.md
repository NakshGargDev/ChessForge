♟️ ChessForge

ChessForge is a browser-based chess game built from scratch with JavaScript, featuring a playable chess engine, an AI opponent powered by Minimax with Alpha-Beta pruning, and a responsive game interface.

«Built as a long-term project to learn game development, chess programming, algorithms, UI design, and AI.»

🎮 Features

Game Modes

- 👥 Play with Friends — two-player local chess
- 🤖 Play with Computer — play against the chess bot
- 🔄 New Game — instantly start a fresh game
- 🏠 Main Menu — return to the mode-selection screen
- 🚪 Exit — exit to a blank screen

Chess Features

- ♟️ Complete chess board
- ✅ Legal move generation
- 👑 Check detection
- ♛ Checkmate detection
- 🤝 Stalemate detection
- ♜ Castling
- 🐴 En passant
- 👸 Pawn promotion
- ↩️ Undo
- 📜 Move history
- 🔴 King-in-check highlighting
- 🟢 Legal-move highlighting

🤖 Chess AI

ChessForge includes a chess bot based on:

- Minimax
- Alpha-Beta pruning
- Board evaluation
- Legal move generation
- Temporary board states

The current default search depth is 3, chosen as a balance between playing strength and browser performance.

Higher depths were tested during development, but deeper searches can become expensive because the number of positions grows rapidly.

🎨 UI

The interface uses a dark theme with gold accents.

The game includes:

- Main menu
- Game mode selection
- Home button
- New Game button
- Scrollable move history
- Mobile-friendly touch interaction
- Button press/hover feedback
- Responsive chess board

🧠 How the Bot Works

When playing against the computer, the bot:

1. Generates all legal black moves.
2. Simulates each possible move.
3. Uses Minimax to explore future positions.
4. Uses Alpha-Beta pruning to skip branches that cannot improve the result.
5. Evaluates the resulting positions.
6. Selects the move with the best score.
7. Executes the selected move on the real board.

Temporary simulations are performed separately from the actual game board, so the AI can search positions without directly moving pieces in the UI.

🛠️ Tech Stack

- JavaScript
- HTML
- CSS
- Vite
- Vercel

No external chess engine is used for the chess logic.

🚀 Running Locally

Clone the repository:

git clone https://github.com/NakshGargDev/ChessForge.git
cd ChessForge

Install dependencies:

npm install

Start the development server:

npm run dev

Then open the local URL provided by Vite.

🌐 Live Demo

Play ChessForge online:

https://forge-chess.vercel.app

📦 Releases

v2.1.0 — UI & Gameplay Experience

Added:

- Main Menu
- Friends mode
- Computer mode
- New Game
- Return to Main Menu
- Exit screen
- Scrollable Move History
- Improved Computer-mode Undo
- Mobile touch improvements
- UI/UX refinements

v2.0.0 — Chess Bot

Introduced the first playable chess AI using Minimax and board evaluation, followed by Alpha-Beta pruning improvements.

📁 Project

GitHub repository:

https://github.com/NakshGargDev/ChessForge

📈 Development

ChessForge is continuously being improved.

Planned areas include:

- Better positional evaluation
- Piece-square tables
- Improved move ordering
- Stronger chess AI
- Further UI improvements
- More gameplay features

👨‍💻 Developer

Built by Naksh Garg as a from-scratch chess programming project.

---

ChessForge — Build. Play. Improve. ♟️
