const { ethers, upgrades } = require("hardhat");

async function main() {
    const ContractA = await ethers.getContractFactory("ContractA");
    
    const contractA = await ContractA.deploy("0xf380F4ad7b01D22C1E13da9F4e1DC1a4d9c443C9");
    
    await contractA.deployed();
    console.log("ContractA deployed to:", contractA.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
