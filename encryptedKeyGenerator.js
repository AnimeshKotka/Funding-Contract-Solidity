const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

main = async () => {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );

  fs.writeFileSync("./.encryptedKey.json", encryptedKey);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
