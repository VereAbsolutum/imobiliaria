export default (router) => {
  router.use("/", (req, res) => {
    res.render("pages/home");
  });
};
