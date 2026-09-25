import { describe, expect, it } from "vitest";
import { isValidMeasurementId } from "@/lib/analytics";

describe("isValidMeasurementId", () => {
  it("accepts the real EmployLabs measurement id", () => {
    expect(isValidMeasurementId("G-KEVEJ1JSJK")).toBe(true);
  });

  it("accepts a digits-only id", () => {
    expect(isValidMeasurementId("G-1234567890")).toBe(true);
  });

  it("rejects an unset id", () => {
    expect(isValidMeasurementId(undefined)).toBe(false);
  });

  it("rejects the empty string, which is what an unset Vercel var becomes", () => {
    expect(isValidMeasurementId("")).toBe(false);
  });

  it("rejects the prefix with no body", () => {
    expect(isValidMeasurementId("G-")).toBe(false);
  });

  it("rejects a lower-case body", () => {
    expect(isValidMeasurementId("G-kevej1jsjk")).toBe(false);
  });

  it("rejects a Universal Analytics id", () => {
    expect(isValidMeasurementId("UA-12345-1")).toBe(false);
  });

  it("rejects an id with surrounding whitespace, a common paste error", () => {
    expect(isValidMeasurementId(" G-KEVEJ1JSJK")).toBe(false);
    expect(isValidMeasurementId("G-KEVEJ1JSJK ")).toBe(false);
  });

  it("rejects an id carrying a quote that would break out of the inline snippet", () => {
    expect(isValidMeasurementId("G-ABC');alert(1);//")).toBe(false);
  });

  it("is anchored at both ends, so it rejects an embedded valid id", () => {
    expect(isValidMeasurementId("xG-ABC123")).toBe(false);
    const newline = String.fromCharCode(10);
    expect(isValidMeasurementId("G-ABC123" + newline + "G-DEF456")).toBe(false);
  });
});
