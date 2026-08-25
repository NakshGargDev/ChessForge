ChessForge ♟️

A fully custom chess game and chess engine built from scratch with JavaScript, HTML, and CSS.

ChessForge started as a simple chessboard and gradually evolved into a complete playable chess application with chess rules, move validation, an AI opponent, search algorithms, evaluation improvements, UI polish, sounds, history, undo, and multiple game modes.

---

✨ Features

♟️ Complete Chess Rules

- Standard 8×8 chessboard
- Legal piece movement
- Pawn movement and double moves
- Pawn captures
- Knight movement
- Bishop movement
- Rook movement
- Queen movement
- King movement
- Check detection
- Checkmate detection
- Stalemate detection
- Castling
- Kingside castling
- Queenside castling
- En passant
- Pawn promotion
- Promotion to Queen
- Promotion to Rook
- Promotion to Bishop
- Promotion to Knight

---

🤖 Chess Bot

ChessForge includes a custom chess engine built from scratch.

The engine does not rely on an external chess engine for its move selection.

It uses a search-based approach to evaluate positions and select moves.

Search

The engine uses:

- Minimax
- Alpha-beta pruning
- Move generation
- Legal move filtering
- Move ordering
- Position evaluation
- Piece-Square Tables

Alpha-beta pruning reduces unnecessary branches during the search.

Move ordering helps the engine examine promising moves earlier.

This makes alpha-beta pruning significantly more useful during deeper searches.

---

🧠 Position Evaluation

The engine evaluates chess positions using material and positional information.

Material

The evaluation considers the value of pieces such as:

- Pawn
- Knight
- Bishop
- Rook
- Queen
- King

Piece-Square Tables

ChessForge also uses Piece-Square Tables (PSTs).

PSTs allow the engine to give different values to pieces depending on their position on the board.

This helps the bot understand concepts such as:

- Developing pieces
- Controlling the center
- Improving piece activity
- King safety
- Better piece placement
- Positional advantages

This made the bot noticeably stronger than a purely material-based evaluation.

---

🔎 Move Ordering

ChessForge includes move ordering to improve the search process.

Moves are scored before being searched.

Higher-priority moves are examined first.

This helps alpha-beta pruning eliminate more branches earlier.

The result is a more efficient search without changing the fundamental minimax algorithm.

---

🏆 Bot Testing

The engine was tested against progressively stronger levels of an external chess application.

ChessForge achieved the following during testing:

- Easy level — Win
- Middle level — Win
- Hard level — Win
- Advance level — Draw

The Hard-level win was achieved with a depth-4 search.

The Advance-level game ended in a draw, with ChessForge being down material during the game.

These tests helped identify areas where the engine could still be improved.

---

🎮 Game Modes

ChessForge supports playing chess through its game interface.

The game can handle:

- Human moves
- Computer moves
- Move validation
- Turn management
- Game-over states
- Promotion selection
- Undo
- Move history

The interface updates the board after every move.

---

🎨 User Interface

The UI was built specifically for ChessForge.

It includes:

- Main menu
- Chessboard
- Game controls
- Undo button
- Move history
- Promotion interface
- Game messages
- Check indicator
- Last-move highlighting
- Selected-square highlighting
- Valid-move highlighting
- Captured-piece display
- Board coordinates
- Game reset controls

The last move is visually highlighted so it is easy to see where a piece came from and where it moved.

---

🔊 Sound Effects

ChessForge includes custom chess sound effects.

Different game events have their own sounds.

Sounds include:

- Piece movement
- Captures
- Check
- Castling
- Promotion
- UI buttons

The sounds make the game feel more responsive and polished.

---

↩️ Undo System

ChessForge includes an undo system.

Game states can be stored and restored when undoing moves.

The state system keeps track of important information such as:

- Board position
- Turn
- Game state
- Move history
- Promotion state
- Castling state
- Last-move information

This allows the player to safely return to previous positions.

---

📜 Move History

ChessForge keeps track of played moves.

The history system records:

- Moving piece
- Starting square
- Destination square

A dedicated history interface allows players to review moves made during the game.

---

👑 Check & Checkmate

ChessForge contains its own check detection system.

The engine can:

1. Find the king
2. Generate opponent moves
3. Determine whether the king is attacked
4. Filter illegal moves
5. Determine whether legal moves remain

If a king is in check and no legal moves remain, ChessForge recognizes checkmate.

---

🟰 Stalemate

ChessForge also detects stalemate.

A position is considered stalemate when:

- The player is not in check
- The player has no legal moves

The game then ends as a draw.

---

🏰 Castling

Castling is implemented for both sides.

ChessForge checks:

- Whether the king has moved
- Whether the relevant rook has moved
- Whether the required squares are empty
- Whether the king is currently in check
- Whether the king crosses an attacked square

Both castling directions are supported.

---

🐇 En Passant

En passant is implemented through last-move information.

The engine checks the previous pawn movement to determine whether an en passant capture is legal.

This is important because en passant depends not only on the current board position, but also on the immediately preceding move.

---

👸 Promotion

When a pawn reaches the opposite end of the board, ChessForge opens a promotion interface.

The player can select:

- Queen
- Rook
- Bishop
- Knight

The selected piece replaces the pawn on the promotion square.

---

🛠️ Technologies

ChessForge was built using:

- JavaScript
- HTML
- CSS
- ES Modules
- Web APIs

No external chess engine is required for the custom bot.

---

🚀 Running the Project

Clone the repository:

git clone https://github.com/NakshGargDev/ChessForge.git

Enter the project:

cd ChessForge

Then run it using a local development server such as Vite.

Open the local address provided by the development server in your browser.

---

🎯 Goals of the Project

ChessForge was created to explore how a chess engine actually works.

The project focuses on understanding:

- Board representation
- Move generation
- Legal move validation
- Chess rules
- Search algorithms
- Minimax
- Alpha-beta pruning
- Evaluation functions
- Piece-Square Tables
- Move ordering
- Game-state management
- UI architecture
- JavaScript modules

Instead of simply using an existing chess engine, the goal was to build the important parts from scratch.

---

📈 Development Journey

ChessForge started with a basic chessboard.

Piece movement was implemented first.

Then legal move validation was added.

After that, special chess rules were introduced.

The project gradually gained:

- Castling
- En passant
- Promotion
- Check detection
- Checkmate
- Stalemate
- Undo
- Move history
- Main menu
- Game UI
- Sound effects

The next major step was the chess bot.

The bot initially used basic move selection.

Minimax was then added.

Alpha-beta pruning made deeper searches more practical.

Piece-Square Tables improved positional understanding.

Move ordering improved search efficiency.

The bot was then tested against progressively stronger opponents.

---

🧪 Testing

ChessForge was tested manually through actual games.

Testing focused on:

- Legal moves
- Special moves
- Check situations
- Checkmate
- Stalemate
- Promotion
- Castling
- En passant
- Undo
- Move history
- Bot decisions
- Search depth
- Position evaluation
- UI behavior

Bot testing was especially useful for finding weaknesses in evaluation and search.

---

💡 What I Learned

Building ChessForge helped develop a deeper understanding of chess programming and software development.

Some of the most important lessons were:

- How chess positions can be represented with arrays
- How legal moves differ from pseudo-legal moves
- Why every move must be tested for king safety
- How minimax searches game trees
- Why alpha-beta pruning matters
- Why move ordering improves search performance
- Why material evaluation alone is not enough
- How Piece-Square Tables improve positional play
- How different modules can share game state
- How UI and engine logic should remain separated
- How debugging dependency problems works
- How Git can be used to safely experiment with large changes

---

🔮 Possible Future Improvements

Although ChessForge is considered finished, possible future experiments include:

- Deeper search
- More advanced evaluation
- Better endgame evaluation
- Opening principles
- Transposition tables
- Quiescence search
- Killer-move heuristics
- History heuristics
- Improved move ordering
- Better king-safety evaluation
- Pawn-structure evaluation
- Mobility evaluation
- Opening book support
- More advanced engine testing

These are potential future experiments rather than requirements for the current project.

---

🏁 Final Status

ChessForge is complete.

It started as a basic chess project and evolved into a complete custom chess application with a custom chess engine.

The project combines:

Chess rules + UI + sound + game state + search + evaluation + AI

all built into one project.

---

👨‍💻 Author

Built by Naksh Garg.

Built from scratch with:

JavaScript • HTML • CSS • Chess Programming

---

⭐ If You Like The Project

Feel free to explore the code, experiment with the engine, and try to beat ChessForge.

♟️ Build it. Test it. Improve it.

ChessForge — a chess engine built from scratch.
