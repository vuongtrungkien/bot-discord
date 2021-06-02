
export const showTime = (time, msg) => {
    return msg.channel.send(`Còn ${time} s`)
}

export const randomResult = () => {
    let i = 0;
    let arrayRandom = [];
    for (i; i < 3; i++) {
        arrayRandom.push( Math.floor(Math.random() * 6) + 1);
    }
    return arrayRandom;
}

export const checkResult = (result, guess) => {
    let arrayText = (result.map((item) => guess[item])).filter((item) => !!item);
    return  Array.from(new Set(arrayText.map((item) => Array.from(new Set(item)).join(', '))))

}

export const removeAccents = (str, character) => {
    str = str.replace(character, '')
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i=0; i<AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str.replace(' ', '').toLowerCase();
}

