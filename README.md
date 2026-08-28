# ChessForge ♟️

ChessForge is a fully custom chess game and chess engine built from scratch with **JavaScript, HTML, and CSS**.

What started as a simple chessboard evolved into a complete playable chess application with chess rules, move validation, a custom AI opponent, search algorithms, positional evaluation, UI features, sounds, move history, undo, and multiple game modes.

## 🎮 Live Demo

**Play ChessForge:** https://forge-chess.vercel.app/

## ✨ Features

### ♟️ Complete Chess Rules
- Standard 8×8 chessboard
- Legal piece movement
- Pawn movement and double moves
- Pawn captures
- Knight, Bishop, Rook, Queen, and King movement
- Check detection
- Checkmate detection
- Stalemate detection
- Kingside and queenside castling
- En passant
- Pawn promotion to Queen, Rook, Bishop, or Knight

### 🤖 Custom Chess Engine

ChessForge includes a custom chess engine built from scratch.

The engine does **not** rely on an external chess engine for move selection.

It uses:
- Minimax
- Alpha-beta pruning
- Move generation
- Legal move filtering
- Move ordering
- Position evaluation
- Piece-Square Tables

### 🧠 Position Evaluation

The engine evaluates positions using material and positional information.

Piece-Square Tables (PSTs) help the engine evaluate:
- Developing pieces
- Controlling the center
- Piece activity
- King safety
- Better piece placement
- Positional advantages

### 🏆 Bot Testing

ChessForge was tested against progressively stronger levels of an external chess application.

| Level | Result |
|---|---|
| Easy | Win |
| Middle | Win |
| Hard | Win |
| Advance | Draw |

The Hard-level win was achieved with a depth-4 search.

### 🎮 Game Features
- Human moves
- Computer moves
- Move validation
- Turn management
- Game-over states
- Promotion selection
- Undo
- Move history
- Game reset

### 🎨 User Interface
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

### 🔊 Sound Effects
- Piece movement
- Captures
- Check
- Castling
- Promotion
- UI buttons

## 🛠️ Technologies

- JavaScript
- HTML
- CSS
- ES Modules
- Web APIs

No external chess engine is required for the custom bot.

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/NakshGargDev/ChessForge.git
```

Enter the project:

```bash
cd ChessForge
```

Then run the project using a local development server such as Vite and open the local address provided by the development server.

## 🎯 Project Goals

ChessForge was created to explore how a chess engine actually works.

The project focuses on:
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

The goal was to build the important parts from scratch instead of simply using an existing chess engine.

## 📈 Development Journey

ChessForge started with a basic chessboard.

Piece movement was implemented first, followed by legal move validation and special chess rules such as castling, en passant, and promotion.

The project then gained check detection, checkmate, stalemate, undo, move history, the main menu, game UI, and sound effects.

The next major step was the chess bot. Minimax was added, followed by alpha-beta pruning, Piece-Square Tables, and move ordering.

## 🧪 Testing

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

## 💡 What I Learned

Building ChessForge helped develop a deeper understanding of chess programming and software development.

Key lessons included:
- Representing chess positions with arrays
- Understanding pseudo-legal vs. legal moves
- Testing moves for king safety
- How minimax searches game trees
- Why alpha-beta pruning matters
- How move ordering improves search performance
- Why material evaluation alone is not enough
- How Piece-Square Tables improve positional play
- Separating UI and engine logic
- Managing shared game state across modules
- Using Git to safely experiment with large changes

## 🔮 Possible Future Experiments

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

## 🏁 Final Status

ChessForge is a complete custom chess application combining:

**Chess rules + UI + sound + game state + search + evaluation + AI**

The project was built from scratch to understand the core ideas behind chess programming and chess-engine development.

## 👨‍💻 Author

**Naksh Garg**

- GitHub: https://github.com/NakshGargDev
- LinkedIn: https://www.linkedin.com/in/naksh-garg-52a639430/

**JavaScript • HTML • CSS • Chess Programming**

---

⭐ Explore the code, experiment with the engine, and try to beat ChessForge.

**♟️ Build it. Test it. Improve it.**
