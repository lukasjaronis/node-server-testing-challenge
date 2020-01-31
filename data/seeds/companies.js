exports.seed = function(knex) {
  return knex("companies")
    .truncate()
    .then(function() {
      return knex("companies").insert([
        { companyName: "ICBC", founder: "Jiang Jianqing" },
        { companyName: "JPMorgan Chase", founder: "J. P. Morgan" },
        { companyName: "China Construction Bank", founder: "Wang Zuji" },
        { companyName: "Agrigcultural Bank of China", founder: "Zhao Huan" },
        { companyName: "Bank of America", founder: "Amadeo Giannini" },
        { companyName: "Apple", founder: "Steve Jobs" }
      ]);
    });
};