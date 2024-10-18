const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('deploying contract with the account', deployer.address);

  const TokenContract = await ethers.getContractFactory('YngToken');
  const initialOwner = deployer.address;
  const myToken = await TokenContract.deploy(initialOwner);

  console.log('Token address:', myToken.target);
  // const perc20 = await ethers.deployContract("");
  // await perc20.waitForDeployment();
  
  // console.log(`YngToken was deployed to ${perc20.address}`)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});