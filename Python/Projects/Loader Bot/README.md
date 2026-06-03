# TikTok Media Downloader Core

The backend engine responsible for handling network requests, bypass mechanisms, and media retrieval from TikTok.

## Core Mechanics
- **User-Agent Rotation:** Implements a dynamic pool of browser-based User-Agents to mimic real user behavior and prevent platform blocking.
- **Automated Registry:** Performs background updates of the User-Agent list from external sources.
- **Log Management:** Automatically purges system logs older than 7 days to maintain disk space.
- **Media Processing:** Leverages `yt-dlp` with customized headers and cookie persistence to ensure secure and efficient stream extraction.

## Technical Implementation
- **Unique Identification:** Generates a randomized `uuid` for every file to prevent filename collisions during concurrent downloads.
- **Error Handling:** Full trace logging of download status (SUCCESS/FAILED/ERROR) into `downloads.log` for debugging and audit purposes.

# Loader Assistant (Telegram Bot)

An automated Telegram bot interface serving as the primary interaction layer for TikTok video retrieval.

## Product Specification

### Access Control & Integrity
- **Rate-Limiting (Cooldown Protocol):** Implements a 10-minute cooldown period per user via `cachetools` to preserve system integrity.
- **Session Persistence:** Tracks active user states to enforce sequential operational constraints.

### Operational Workflow
1. **Input Verification:** Parses messages for valid `tiktok.com` domains.
2. **Execution Layer:** Interfaces with `downloader.py` to retrieve media streams.
3. **Payload Delivery:** Streams video data directly to the user via Telegram `answer_video` and immediately executes local file cleanup to minimize storage footprint.

### Visual Feedback
- **Status Indicators:** Provides real-time processing feedback.
- **Visual Alerting:** Utilizes custom UI visuals for both the "Welcome" screen and "Cooldown" notifications to improve user experience.

## Deployment

### Prerequisites
- Python 3.10+
- `aiogram` (Bot Framework)
- `yt-dlp` (Stream processing)
- `dotenv` (Configuration management)

### File Architecture
- `bot.py` (Orchestration & UI Logic)
- `downloader.py` (Retrieval & I/O Engine)
- `cookies.txt` (Session authentication)