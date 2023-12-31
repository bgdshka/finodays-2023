// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract GoldOracle is Ownable {
    uint256 private priceGold;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setPriceGold(uint256 _newPrice) public onlyOwner {
        priceGold = _newPrice;
    }

    function getPriceGold() public view returns (uint256) {
        return priceGold;
    }
}
