function printOwing(invoice) {
  let result = "\n";
  let outstanding = 0;

  result += "*****************\n";
  result += "**** 고객 채무 ****\n";
  result += "*****************\n";

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)을 기록한다.
  const today = new Date(0);
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 세부 사항을 출력한다.
  result += `고객명: ${invoice.customer}\n`;
  result += `채무액: ${outstanding}\n`;
  result += `마감일: ${invoice.dueDate.toLocaleDateString()}\n`;

  return result;
}

export default printOwing;
