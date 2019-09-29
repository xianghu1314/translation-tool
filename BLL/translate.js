var request = require('request-promise');
var crypto = require('crypto');
TXTranslate = async function (from, to, q) {

    var ts = "" + (new Date).getTime();
    var salt = ts + parseInt(10 * Math.random(), 10);

    // var f = ctime + (Number)(Math.random() * 10 + 1);

    var md5 = crypto.createHash('md5');
    var sign = md5.update("fanyideskweb" + q + salt + "n%A-rKaT5fb[Gy?;N5@Tj").digest('hex');
    var res = await request.post({
        url: 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule',
        headers: {
            "Host": "fanyi.youdao.com",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
            "Accept-Encoding": "gzip, deflate",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            "Connection": "keep-alive",
            "Referer": "http://fanyi.youdao.com/",
            "Cookie": "YOUDAO_MOBILE_ACCESS_TYPE=1; OUTFOX_SEARCH_USER_ID=-742290809@10.169.0.84; JSESSIONID=aaansNkgAadf0d1T2361w; ___rl__test__cookies=1569724573776; OUTFOX_SEARCH_USER_ID_NCOO=534271613.4632148",
        },
        gzip: true,
        form: {
            i: q,
            from: from,
            to: to,
            smartresult: "dict",
            client: "fanyideskweb",
            salt: salt,
            sign: sign,
            ts: ts,
            bv: "abf85f8020851128b561472c8a7b924d",
            doctype: "json",
            version: "2.1",
            keyfrom: "fanyi.web",
            action: "FY_BY_CLICKBUTTION",
        }
    })
    return res

}
module.exports = {TXTranslate: TXTranslate}