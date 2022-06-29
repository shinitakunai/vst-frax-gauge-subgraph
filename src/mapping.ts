import {
  // TokenIPFSPathUpdated as TokenIPFSPathUpdatedEvent,
  Transfer as TransferEvent,
  Token as TokenContract,
} from "../generated/Token/Token";

import { Token, User } from "../generated/schema";

export function handleStakeLocked(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    let tokenId = event.params.tokenId;
    token = new Token(tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.tokenID = tokenId;

    let tokenContract = TokenContract.bind(event.address);
    token.contentURI = tokenContract.tokenURI(tokenId);
    // token.tokenIPFSPath = tokenContract.getTokenIPFSPath(tokenId);
    token.name = tokenContract.name();
    token.createdAtTimestamp = event.block.timestamp;
    if (tokenId.toU64() < 1000000) {
      token.tier = "Bronze";
    } else if (tokenId.toU64() < 2000000) {
      token.tier = "Silver";
    } else if (tokenId.toU64() < 3000000) {
      token.tier = "Gold";
    }
  }
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}

export function handleStakeWithdrawn(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    let tokenId = event.params.tokenId;
    token = new Token(tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.tokenID = tokenId;

    let tokenContract = TokenContract.bind(event.address);
    token.contentURI = tokenContract.tokenURI(tokenId);
    // token.tokenIPFSPath = tokenContract.getTokenIPFSPath(tokenId);
    token.name = tokenContract.name();
    token.createdAtTimestamp = event.block.timestamp;
    if (tokenId.toU64() < 1000000) {
      token.tier = "Bronze";
    } else if (tokenId.toU64() < 2000000) {
      token.tier = "Silver";
    } else if (tokenId.toU64() < 3000000) {
      token.tier = "Gold";
    }
  }
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}
