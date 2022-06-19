import printOwing from "./main";
import invoice from "./fixtures/invoice.json";

describe("6.1 extract function", () => {
  it("snapshot", () => {
    const result = printOwing(invoice);

    expect(result).toMatchSnapshot();
  });
});
