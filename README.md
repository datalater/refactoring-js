# 리팩터링 2판 실습 예제

## Install

```bash
npm i
```

## Run test

By Jest (when there has `**/*.test.*` or `**/*.spec.*` file):

```bash
# Run test
npm run test

# Run test with watch mode
npm run test:watch

# Run test with only changed files
npm run test:watch:changed
```

## Write test

### 스냅샷 테스트를 이용하여 최초의 테스트 코드 작성하기

> [jest - snapshot testing](https://jestjs.io/docs/snapshot-testing)

실습 예제 코드를 그대로 작성한 후 아래와 같이 Jest에서 제공하는 스냅샷 테스트 매처(`toMatchSnapshot`)를 사용합니다:

```js
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
```

`__snapshots__/` 폴더에 위에서 작성한 테스트 파일 이름으로 직렬화된 값이 자동으로 생성됩니다:

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`main snapshot 1`] = `
"청구 내역 (고객번호: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47
"
`;
```

이제 결과값을 스냅샷으로 저장했으므로 기대값을 보존한 채로 자유롭게 리팩터링할 수 있습니다.
