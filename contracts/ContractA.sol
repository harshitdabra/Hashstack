// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract ContractA is ReentrancyGuard, Ownable {

    uint private value;

    constructor(address initialOwner) Ownable(initialOwner) {
    }

    function setValue(uint _value) external onlyOwner nonReentrant {
        value += _value;
    }

    function getValue() external view returns (uint) {
        return value;
    }
}
