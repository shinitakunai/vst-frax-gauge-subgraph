// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amountLocked", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("startTimestamp", Value.fromI32(0));
    this.set("lockDuration", Value.fromI32(0));
    this.set("endTimestamp", Value.fromI32(0));
    this.set("withdrawTimestamp", Value.fromI32(0));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Stake entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Stake entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Stake", id.toString(), this);
    }
  }

  static load(id: string): Stake | null {
    return changetype<Stake | null>(store.get("Stake", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountLocked(): BigDecimal {
    let value = this.get("amountLocked");
    return value!.toBigDecimal();
  }

  set amountLocked(value: BigDecimal) {
    this.set("amountLocked", Value.fromBigDecimal(value));
  }

  get startTimestamp(): i32 {
    let value = this.get("startTimestamp");
    return value!.toI32();
  }

  set startTimestamp(value: i32) {
    this.set("startTimestamp", Value.fromI32(value));
  }

  get lockDuration(): i32 {
    let value = this.get("lockDuration");
    return value!.toI32();
  }

  set lockDuration(value: i32) {
    this.set("lockDuration", Value.fromI32(value));
  }

  get endTimestamp(): i32 {
    let value = this.get("endTimestamp");
    return value!.toI32();
  }

  set endTimestamp(value: i32) {
    this.set("endTimestamp", Value.fromI32(value));
  }

  get withdrawTimestamp(): i32 {
    let value = this.get("withdrawTimestamp");
    return value!.toI32();
  }

  set withdrawTimestamp(value: i32) {
    this.set("withdrawTimestamp", Value.fromI32(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stakes(): Array<string> {
    let value = this.get("stakes");
    return value!.toStringArray();
  }

  set stakes(value: Array<string>) {
    this.set("stakes", Value.fromStringArray(value));
  }
}
