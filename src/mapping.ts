import {
  StakeLocked,
  WithdrawLocked,
} from "../generated/VSTFRAX_GAUGE/VSTFRAX_GAUGE";

import { Stake, User } from "../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { decimalize } from "./helper";

export function handleStakeLocked(event: StakeLocked): void {
  let stake = Stake.load(event.params.kek_id.toHexString());
  if (!stake) {
    let stakeId = event.params.kek_id;
    let startTimestamp = event.block.timestamp;
    let lockDuration = event.params.secs;
    stake = new Stake(stakeId.toHexString());
    stake.amountLocked = decimalize(event.params.amount);
    stake.startTimestamp = startTimestamp.toI32();
    stake.lockDuration = lockDuration.toI32();
    stake.endTimestamp = startTimestamp.plus(lockDuration).toI32();
  }
  let userParam = event.params.user.toHexString();
  stake.owner = userParam;
  stake.save();
  let user = User.load(userParam);
  if (!user) {
    user = new User(userParam);
    user.save();
  }
}

export function handleStakeWithdrawn(event: WithdrawLocked): void {
  let stake = Stake.load(event.params.kek_id.toHexString());
  if (!stake) {
    stake = new Stake(event.params.kek_id.toHexString());
  }
  stake.withdrawTimestamp = event.block.timestamp.toI32();
  stake.amountLocked = new BigDecimal(new BigInt(0));
  stake.save();
}
