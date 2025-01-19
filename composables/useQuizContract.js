import { ethers } from 'ethers';
import QuizTokenABI from '~/abis/QuizToken.json';

const contractAddress = 'YOUR_CONTRACT_ADDRESS';

export function useQuizContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, QuizTokenABI, signer);

  const rewardPlayer = async (playerAddress, amount) => {
    try {
      const tx = await contract.rewardPlayer(playerAddress, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      console.log('Reward sent:', tx.hash);
    } catch (error) {
      console.error('Error rewarding player:', error);
    }
  };

  return { rewardPlayer };
}
