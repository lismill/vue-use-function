export default (text, type) => {
    switch (type) {
        // 手机号码
        case "phone":
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(text);
        // 座机
        case "tel":
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(text);
        // 身份证
        case "card":
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(text);
        // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        case "pwd":
            return /^[a-zA-Z]\w{5,17}$/.test(text);
        // 邮政编码
        case "postal":
            return /[1-9]\d{5}(?!\d)/.test(text);
        // QQ号
        case "QQ":
            return /^[1-9][0-9]{4,9}$/.test(text);
        // 邮箱
        case "email":
            return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(text);
        // 金额(小数点2位)
        case "money":
            return /^\d*(?:.\d{0,2})?$/.test(text);
        // 银行卡
        case "bank":
            return /^[0-9]{5,25}$/.test(text);
        // IP
        case "IP":
            return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(text);
        // 日期时间
        case "date":
            return (/^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(text) || /^(\d{4})-(\d{2})-(\d{2})$/.test(text));
        // 数字
        case "number":
            return /^[0-9]$/.test(text);
        // 英文
        case "english":
            return /^[a-zA-Z]+$/.test(text);
        // 中文
        case "chinese":
            return /^[\u4E00-\u9FA5]+$/.test(text);
        // 小写
        case "lower":
            return /^[a-z]+$/.test(text);
        // 大写
        case "upper":
            return /^[A-Z]+$/.test(text);
        // HTML标记
        case "HTML":
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(text);
        default:
            return true;
    }
};
