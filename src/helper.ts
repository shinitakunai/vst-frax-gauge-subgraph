import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";

export let DECIMAL_SCALING_FACTOR = BigDecimal.fromString(
  "1000000000000000000"
);
export function decimalize(bigInt: BigInt): BigDecimal {
  return bigInt.divDecimal(DECIMAL_SCALING_FACTOR);
}
