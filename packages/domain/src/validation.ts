/** Domain rule: recorded weight must be strictly positive (kg). */
export function assertPositiveWeightKg(value: number): void {
  if (value <= 0) {
    throw new Error("Weight must be positive");
  }
}
