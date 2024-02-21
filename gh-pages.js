var ghpages = require("gh-pages");

ghpages.publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://https://github.com/IshfatAbrar/Portfolio.git", // Update to point to your repository
    user: {
      name: "Ishfat Abrar Islam", // update to use your name
      email: "ishfat0001abrar@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
