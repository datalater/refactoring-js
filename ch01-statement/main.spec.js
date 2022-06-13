import { statement } from "./main";
import plays from "./fixtures/plays.json";
import invoices from "./fixtures/invoices.json";

describe("main", () => {
  it("snapshot", () => {
    invoices.forEach((invoice) => {
      const result = statement(invoice, plays);

      expect(result).toMatchSnapshot();
    });
  });
});
