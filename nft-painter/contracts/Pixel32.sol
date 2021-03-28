pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Pixel32 is ERC721URIStorage {
    // using EnumerableMap for EnumerableMap.Map;
    // EnumerableMap private _pixArts;

    string[] public pixArts;

    mapping(string => bool) _pixArtExists;

    constructor() public ERC721("PixelArt", "PIX") {}

    function mint(string memory _pixArt) public returns (uint256) {
        require(!_pixArtExists[_pixArt]);
        pixArts.push(_pixArt);
        uint256 _artID = pixArts.length - 1;
        _pixArtExists[_pixArt] = true;
        _mint(msg.sender, _artID);
        _setTokenURI(_artID, _pixArt);

        return _artID;
    }

    function totalSupply() public view virtual returns (uint256) {
        return pixArts.length;
    }

    function getPixArts() public view virtual returns (string[] memory) {
        return pixArts;
    }
}
