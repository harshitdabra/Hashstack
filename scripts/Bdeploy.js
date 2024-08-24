const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const superAdminAddress = "0x4c728AD606d38A7Ce6f4766b47ec7f3949FD63E2"; 

  const ContractB = await ethers.getContractFactory("ContractB");
  const contractB = await ContractB.deploy(superAdminAddress);

  console.log("ContractB deployed to:", contractB.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
