const { guarantee, check, xcheck, end, group } = require("wemtest");
const numberUtils = require("../src/number-utils");

group("numberUtils", () => {
  group("method: isPrime", () => {
    xcheck("returns true for prime numbers", () => {
      guarantee(numberUtils.isPrime(2));
      guarantee(numberUtils.isPrime(3));
      guarantee(numberUtils.isPrime(5));
      guarantee(numberUtils.isPrime(7));
      guarantee(numberUtils.isPrime(23));
    });

    check("this test should fail =)", () => {
      guarantee.same(123, 321);
    });

    check("returns false for non-prime numbers", () => {
      guarantee(!numberUtils.isPrime(4));
      guarantee(!numberUtils.isPrime(8));
      guarantee(!numberUtils.isPrime(10));
      guarantee(!numberUtils.isPrime(20));
    });
  });
});
