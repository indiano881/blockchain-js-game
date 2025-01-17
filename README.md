# Blockchain Quiz Game

## Overview
A quiz game that integrates blockchain technology to create a fun and educational experience for developers. Players answer JavaScript/Express/Node/Blockchain-related questions, log in with MetaMask, and earn tokens from a custom cryptocurrency as rewards for correct answers. Quiz statistics and token transactions are stored on the blockchain.

---

## Why Build This Project?

### Beginner-Friendly Aspects:
- **Simple Logic**: A quiz game is modular and straightforward, making it easy to develop and debug.
- **Blockchain Focus**: Emphasizes wallet integration (MetaMask) and token rewards without involving sensitive or legally binding data.
- **Smart Contract Learning**: Practice writing and deploying smart contracts using Solidity and Ethereum.
- **Easily Testable**: The project can be tested on test networks without worrying about real-world consequences.

### Skills to Gain:
- Basics of smart contracts (ERC-20 token creation).
- Wallet integration with MetaMask.
- Storing data (quiz statistics and rewards) on the blockchain.
- Frontend and backend integration using Vue/Nuxt and Node/Express.

---

## Suggested Tech Stack

### Frontend:
- Vue.js
- Nuxt.js

### Backend:
- Node.js
- Express.js

### Blockchain:
- Ethereum or Polygon for blockchain development.
- Solidity for smart contracts.
- Hardhat or Truffle for contract deployment.

---

## Step-by-Step Development Plan

### Step 1: Planning and Setup (4-6 hours)
1. **Define Features**:
   - Login with MetaMask.
   - Earn tokens for correct answers.
   - Track and store quiz statistics on the blockchain.
   - (Optional) Leaderboard for top players.
2. **Set Up Development Environment**:
   - Install Node.js, Vue CLI/Nuxt CLI, and required packages.
   - Install MetaMask and create a test wallet.
   - Configure a test network (e.g., Goerli or Polygon Mumbai).

### Step 2: Build the Frontend (10-15 hours)
1. **Scaffold a Nuxt.js Project** (1-2 hours):
   - Generate the project using `npx create-nuxt-app`.
   - Add Vue components for the quiz interface.
2. **Create UI for the Quiz** (5-7 hours):
   - Questions page: Display one question at a time.
   - Scoreboard page: Show user scores and leaderboard.
   - MetaMask login button.
3. **Integrate MetaMask** (4-6 hours):
   - Add wallet connection functionality.
   - Display the connected wallet address.

### Step 3: Build the Smart Contract (12-18 hours)
1. **Learn Smart Contract Basics** (3-5 hours):
   - Understand Solidity syntax and ERC-20 token standards.
2. **Write and Deploy the Contract** (9-13 hours):
   - Implement token creation and reward distribution.
   - Optionally track quiz statistics.
   - Deploy the contract using Hardhat or Truffle.

### Step 4: Backend Development (8-12 hours)
1. **Set Up Express.js** (2-3 hours):
   - Create APIs for serving quiz questions.
   - Use a JSON file or database to store questions.
2. **Connect Backend to Smart Contract** (4-5 hours):
   - Use Web3.js or Ethers.js to interact with the blockchain.
   - Implement APIs for token distribution and data storage.
3. **Integrate with Frontend** (2-4 hours):
   - Fetch questions from the API.
   - Send answers to the backend and update blockchain data.

### Step 5: Testing and Debugging (5-10 hours)
1. **Test the Smart Contract** (2-4 hours):
   - Write unit tests using Hardhat or Truffle.
2. **Test the Full Application** (3-6 hours):
   - Verify MetaMask integration.
   - Test token transactions and APIs.

### Step 6: Optional Features (8-12 hours)
1. **Add a Leaderboard** (4-6 hours):
   - Fetch and display scores from the blockchain.
   - Rank users based on tokens earned.
2. **Enhance UI/UX** (4-6 hours):
   - Add animations, improve responsiveness, and polish the design.

---

## Total Estimated Time
- **Core Features**: ~40-61 hours
- **Optional Features**: ~8-12 hours

---

## Getting Started
1. Clone the repository.
2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Set up your MetaMask wallet and connect it to a test network (e.g., Goerli or Polygon Mumbai).
4. Deploy the smart contract to the test network using Hardhat or Truffle.
5. Start the backend server:
   ```bash
   npm start
   ```
6. Run the frontend application:
   ```bash
   npm run dev
   ```

---

## Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

---

## License
This project is licensed under the MIT License.
