# Documentation: XenonIT Statistics Bot

## 1. Project Overview
**XenonIT Statistics Bot** is an automated Telegram-based tracking system designed to monitor Dota 2 performance metrics. It utilizes an asynchronous framework for real-time interaction and a local JSON-based storage engine for data persistence.

## 2. Technical Architecture
- **Framework:** `aiogram` (Asynchronous Telegram Bot API).
- **Storage Layer:** JSON serialization (`stats_db.json`).
- **Interaction Layer:** `ReplyKeyboardBuilder` for navigation and command parsing for data entry.
- **Logging:** Standard Python `logging` library for operational monitoring.

## 3. Data Schema (`stats_db.json`)
The bot maintains a list of objects representing individual matches.

| Key | Type | Description |
| :--- | :--- | :--- |
| `hero` | string | The character name used in the match. |
| `gpm` | string | Gold Per Minute performance metric. |
| `kda` | string | Kill/Death/Assist ratio. |
| `res` | string | Result ('W' for Win, 'L' for Loss). |

## 4. Command Reference
| Command / Action | Description |
| :--- | :--- |
| `/start` | Initializes the bot and displays the main navigation menu. |
| `/add <Hero> <GPM> <KDA> <W/L>` | Logs a new match entry (e.g., `/add Sven 935 22/5/7 L`). |
| **View report** | Returns the count of total recorded matches. |
| **Help** | Displays project information and support details. |

## 5. Implementation Details
- **Data Persistence:** The `load_data()` function ensures the storage file exists upon startup, preventing file-not-found errors.
- **State Handling:** The bot utilizes `aiogram` filters (`F.text`) to intercept button clicks and `Command` filters for data input, ensuring clean request routing.
- **Error Handling:** The `/add` handler uses a `try-except` block to capture input validation errors and file writing issues, providing immediate feedback to the user.