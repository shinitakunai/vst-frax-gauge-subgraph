import {
  StakeLocked,
  WithdrawLocked,
} from "../generated/VSTFRAX_GAUGE/VSTFRAX_GAUGE";

import { Stake, User } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleStakeLocked(event: StakeLocked): void {
  let stake = Stake.load(event.params.kek_id.toString());
  if (!stake) {
    let stakeId = event.params.kek_id;
    let startTimestamp = event.block.timestamp;
    let lockDuration = event.params.secs;
    stake = new Stake(stakeId.toString());
    stake.amountLocked = event.params.amount;
    stake.startTimestamp = startTimestamp.toI32();
    stake.lockDuration = lockDuration.toI32();
    stake.endTimestamp = startTimestamp.plus(lockDuration).toI32();
  }
  let userParam = event.params.user.toHexString();
  stake.owner = userParam;

  let user = User.load(userParam);
  if (!user) {
    user = new User(userParam);
    user.save();
  }
}

export function handleStakeWithdrawn(event: WithdrawLocked): void {
  let stake = Stake.load(event.params.kek_id.toString());
  if (!stake) {
    stake = new Stake(event.params.kek_id.toString());
  }
  stake.withdrawTimestamp = event.block.timestamp.toI32();
  stake.amountLocked = new BigInt(0);
}
