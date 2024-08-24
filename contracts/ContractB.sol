// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ContractB is AccessControl, Ownable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor() Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    function addAdmin(address account) public onlyOwner {
        _grantRole(ADMIN_ROLE, account);
    }

    function removeAdmin(address account) public onlyOwner {
        _revokeRole(ADMIN_ROLE, account);
    }

    function transferAdminRole(address oldAdmin, address newAdmin) public onlyOwner {
        _revokeRole(ADMIN_ROLE, oldAdmin);
        _grantRole(ADMIN_ROLE, newAdmin);
    }

    function renounceAdminRole() public {
        require(hasRole(ADMIN_ROLE, msg.sender), "Caller is not an admin");
        _revokeRole(ADMIN_ROLE, msg.sender);
    }
}
