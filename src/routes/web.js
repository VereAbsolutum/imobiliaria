export default (router) => {
    router.use('/', (req, res) => { res.render('site/home/home') });
}