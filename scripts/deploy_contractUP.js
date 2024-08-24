const { ethers } = require("ethers");
const UpdatedContractA = require("../artifacts/contracts/UpdatedContractA.sol/UpdatedContractA.json");




async function main() {
   
   
    const provider = new ethers.providers.JsonRpcProvider();
    const [owner] = await ethers.getSigners();

    const updatedContractAAddress = "0xf380F4ad7b01D22C1E13da9F4e1DC1a4d9c443C9";
    const updatedContractA = new ethers.Contract(updatedContractAAddress, UpdatedContractA.abi, provider);

    // Fetch initial value
    const initialValue = await updatedContractA.getValue();
    console.log("Initial value:", initialValue.toString());

    // Set value
    const tx1 = await updatedContractA.setValue(10);
    await tx1.wait();
    console.log("Value set to 10");

    // Fetch updated value
    const updatedValue = await updatedContractA.getValue();
    console.log("Updated value:", updatedValue.toString()); 

    // Fetch and update admin address
    const adminAddress = await updatedContractA.owner();
    console.log("Admin address:", adminAddress);



    const newAdminAddress = "0x4c728AD606d38A7Ce6f4766b47ec7f3949FD63E2";
    const tx2 = await updatedContractA.transferOwnership(newAdminAddress);
    await tx2.wait();
    console.log("Ownership transferred to", newAdminAddress);

    const newAdmin = await updatedContractA.owner();
    console.log("New admin address:", newAdmin);



    const tx3 = await updatedContractA.setValue(81);
    await tx3.wait();
    const finalValue = await updatedContractA.getValue();
    console.log("Final value:", finalValue.toString()); 
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
