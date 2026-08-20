ChessForge ♟️

A chess game built from scratch with JavaScript, with a chess bot powered by Minimax and Alpha-Beta Pruning.

Play ChessForge: https://forge-chess.vercel.app

Source Code: https://github.com/NakshGargDev/ChessForge

---

🚀 Current Status

ChessForge is an actively developing project.

The bot currently uses:

- Minimax
- Alpha-Beta Pruning
- Basic material evaluation
- Legal move generation
- A configurable search depth

The current default bot depth is 3, chosen to keep the game responsive while still allowing the bot to search several moves ahead.

---

🤖 Chess Bot

The bot evaluates positions using basic chess piece values:

Piece| Value
Pawn| 1
Knight| 3
Bishop| 3
Rook| 5
Queen| 9
King| 100

White pieces contribute positively and black pieces negatively to the evaluation.

The bot then uses Minimax to search possible positions.

Alpha-Beta Pruning

Alpha-Beta pruning removes branches of the search tree that cannot affect the final decision.

This allows ChessForge to search deeper positions without evaluating every possible continuation.

---

♟️ Chess Rules

ChessForge currently includes logic for:

- Pawn movement
- Knight movement
- Bishop movement
- Rook movement
- Queen movement
- King movement
- Captures
- Check
- Checkmate
- Stalemate
- Castling
- En passant
- Pawn promotion

---

🎨 Interface

The board is designed to work across different screen sizes.

The UI has been tested on:

- 📱 Mobile
- 🖥️ TV / large screens
- 💻 Desktop-sized displays

The board and piece sizes adapt to the available screen space.

---

🧠 How the Bot Works

The simplified search flow is:

Current Position
       ↓
Generate Legal Moves
       ↓
Try Each Move on a Temporary Board
       ↓
Minimax Search
       ↓
Alpha-Beta Pruning
       ↓
Evaluate Position
       ↓
Choose Best Move
       ↓
Make Actual Move

Temporary board positions are simulated separately from the actual game board, so Minimax does not modify the DOM while searching.

Only the final selected move is passed to the actual game move system.

---

🛠️ Tech Stack

- JavaScript
- HTML
- CSS
- Vercel

No chess engine/library is used for the core chess logic.

The movement and rule systems are being developed as part of the project.

---

🔮 Planned Improvements

The bot is still in an early stage.

Planned improvements include:

- Piece-square tables
- Better positional evaluation
- Center control
- Piece development evaluation
- King safety
- Move ordering
- Deeper search
- Further Alpha-Beta optimization
- Better endgame evaluation
- More advanced search techniques

---

📈 Development

ChessForge is being built incrementally, with each stage improving both the chess engine and the bot.

The goal is not just to make a playable chess game, but to build the chess logic and AI understanding step by step from scratch.

---

🔗 Links

Play: https://forge-chess.vercel.app

GitHub: https://github.com/NakshGargDev/ChessForge

---

📜 License

This project is currently a personal development project.
