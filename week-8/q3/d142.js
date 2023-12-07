// D142:【キャンペーン問題】イルミネーションの数
reader.on("close", () => {
  const data = lines[0].split(" ");
  const num_tree = data[0];
  const num_margin = data[1];
  const num_light = data[2];

  const val = Math.ceil(num_tree / num_margin);

  console.log(val * num_light);
});