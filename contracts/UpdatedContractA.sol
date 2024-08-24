// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./ContractB.sol";

contract ContractA is ContractB, ReentrancyGuard {
    uint256 private value;

    constructor() ContractB() {
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function setValue(uint256 _value) public onlyOwner nonReentrant {
        value = _value;
    }
}
