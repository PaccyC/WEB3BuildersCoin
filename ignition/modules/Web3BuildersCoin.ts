// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_MINT_AMOUNT = 10_000n * 10n ** 18n;  // Amount of tokens to mint (10000 * 10^18)
const DEFAULT_RECIPIENT = "0xRecipientAddressHere"; // Replace with the actual recipient address

// Define the Web3Builders Ignition module
const Web3BuildersModule = buildModule("Web3BuildersModule", (m) => {
  // Get the recipient address and initial mint amount from parameters
  const recipient = m.getParameter("recipient", DEFAULT_RECIPIENT);
  const initialMintAmount = m.getParameter("initialMintAmount", INITIAL_MINT_AMOUNT);

  // Deploy the Web3Builders contract with the recipient address and initial mint amount
  const web3builders = m.contract("Web3Builders", [recipient], {
    value: initialMintAmount,
  });

  // Return the deployed contract instance
  return { web3builders };
});

export default Web3BuildersModule;
