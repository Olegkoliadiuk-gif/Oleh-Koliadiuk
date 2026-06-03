# OfficeLock System

A terminal-based access management system designed for internal office security.

## Features
- **Secure Authentication:** Implements masked input for credential protection.
- **Admin Control Panel:** Allows authorized administrators to manage user accounts and review system activity.
- **Identity Generator:** Creates a web-based portal (`identity.html`) displaying randomized shadow credentials.
- **Stealth Mode:** Provides an encrypted terminal screen for session masking.

## Data Structure
- `admins.json`: Stores administrative credentials.
- `users.json`: Stores standard user profiles.
- `logs.txt`: Maintains a chronological audit trail of all logins and administrative actions.

# Security & Audit Policy

The system maintains a comprehensive audit log for security monitoring.

## Critical Parameters
1. **Rate Limiting:** A 10-second lockout penalty is enforced after 3 failed authentication attempts.
2. **Data Integrity:** `admins.json` and `users.json` are used for instructional purposes; avoid storing sensitive real-world passwords.
3. **Event Logging:** All system access and administrative modifications are recorded in `logs.txt` with precise timestamps.