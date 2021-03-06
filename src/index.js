module.exports = function toReadable(number) {
    let answer = "";
    let numberArr = Array.from(String(number), Number);
    while (numberArr.length > 0) {
        if (numberArr.length === 1) {
            switch (numberArr[0]) {
                case 0:
                    answer = answer.concat("zero");
                    break;
                case 1:
                    answer = answer.concat("one");
                    break;
                case 2:
                    answer = answer.concat("two");
                    break;
                case 3:
                    answer = answer.concat("three");
                    break;
                case 4:
                    answer = answer.concat("four");
                    break;
                case 5:
                    answer = answer.concat("five");
                    break;
                case 6:
                    answer = answer.concat("six");
                    break;
                case 7:
                    answer = answer.concat("seven");
                    break;
                case 8:
                    answer = answer.concat("eight");
                    break;
                case 9:
                    answer = answer.concat("nine");
                    break;
            }
            numberArr.shift();
        }
        if (numberArr.length === 2) {
            if ((number > 10 && number < 20) || number % 10 === 0) {
                switch (number) {
                    case 10:
                        return answer.concat("ten");
                        break;
                    case 11:
                        return answer.concat("eleven");
                        break;
                    case 12:
                        return answer.concat("twelve");
                        break;
                    case 13:
                        return answer.concat("thirteen");
                        break;
                    case 14:
                        return answer.concat("fourteen");
                        break;
                    case 15:
                        return answer.concat("fifteen");
                        break;
                    case 16:
                        return answer.concat("sixteen");
                        break;
                    case 17:
                        return answer.concat("seventeen");
                        break;
                    case 18:
                        return answer.concat("eighteen");
                        break;
                    case 19:
                        return answer.concat("nineteen");
                        break;
                    case 20:
                        return answer.concat("twenty");
                        break;
                    case 30:
                        return answer.concat("thirty");
                        break;
                    case 40:
                        return answer.concat("forty");
                        break;
                    case 50:
                        return answer.concat("fifty");
                        break;
                    case 60:
                        return answer.concat("sixty");
                        break;
                    case 70:
                        return answer.concat("seventy");
                        break;
                    case 80:
                        return answer.concat("eighty");
                        break;
                    case 90:
                        return answer.concat("ninety");
                        break;
                }
            } else {
                switch (numberArr[0]) {
                    case 2:
                        answer = answer.concat("twenty ");
                        break;
                    case 3:
                        answer = answer.concat("thirty ");
                        break;
                    case 4:
                        answer = answer.concat("forty ");
                        break;
                    case 5:
                        answer = answer.concat("fifty ");
                        break;
                    case 6:
                        answer = answer.concat("sixty ");
                        break;
                    case 7:
                        answer = answer.concat("seventy ");
                        break;
                    case 8:
                        answer = answer.concat("eighty ");
                        break;
                    case 9:
                        answer = answer.concat("ninety ");
                        break;
                }
                numberArr.shift();
            }
        }
        if (numberArr.length === 3) {
            if (number % 100 === 0) {
                switch (number) {
                    case 100:
                        return answer.concat("one hundred");
                        break;
                    case 200:
                        return answer.concat("two hundred");
                        break;
                    case 300:
                        return answer.concat("three hundred");
                        break;
                    case 400:
                        return answer.concat("four hundred");
                        break;
                    case 500:
                        return answer.concat("five hundred");
                        break;
                    case 600:
                        return answer.concat("six hundred");
                        break;
                    case 700:
                        return answer.concat("seven hundred");
                        break;
                    case 800:
                        return answer.concat("eight hundred");
                        break;
                    case 900:
                        return answer.concat("nine hundred");
                        break;
                }
            } else {
                switch (numberArr[0]) {
                    case 1:
                        answer = answer.concat("one hundred ");
                        break;
                    case 2:
                        answer = answer.concat("two hundred ");
                        break;
                    case 3:
                        answer = answer.concat("three hundred ");
                        break;
                    case 4:
                        answer = answer.concat("four hundred ");
                        break;
                    case 5:
                        answer = answer.concat("five hundred ");
                        break;
                    case 6:
                        answer = answer.concat("six hundred ");
                        break;
                    case 7:
                        answer = answer.concat("seven hundred ");
                        break;
                    case 8:
                        answer = answer.concat("eight hundred ");
                        break;
                    case 9:
                        answer = answer.concat("nine hundred ");
                        break;
                }
            }
            numberArr.shift();
        }
    }
    return answer;
};
