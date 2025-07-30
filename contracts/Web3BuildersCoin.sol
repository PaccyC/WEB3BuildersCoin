// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Web3Builders is ERC20 {
    constructor(address recipient) ERC20("Web3Builders", "AAP") {
        _mint(recipient, 10000 * 10 ** decimals());
    }
}