import { describe, it, expect } from "vitest";
import { assertPositiveWeightKg } from "./validation";

describe("assertPositiveWeightKg", () => {
  it("accepts positive values", () => {
    expect(() => assertPositiveWeightKg(1)).not.toThrow();
  });

  it("rejects non-positive values", () => {
    expect(() => assertPositiveWeightKg(0)).toThrow();
  });
});
