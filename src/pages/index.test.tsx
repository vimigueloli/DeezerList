const sum = (x: number, y: number) => {
  return x + y;
};

describe("index", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });
});

export default {};
