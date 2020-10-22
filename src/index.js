const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let ans="";
    let arr=new Array();
    arr= expr.split('**********');
    let arr1=new Array();
    let t="";
    const length = 10; // длина одной части
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let tt="";

    for(let i=0; i<arr.length;i++) //массив слов
    {
       
        arr1 = arr[i].match(pattern).map(item => item.padEnd(length, ".")); //массив букв
        //return arr1.length;
        for(let k=0; k<arr1.length ;k++)// определяем каждую букву
        {
            t="";
            tt="";
            let j=0;

            //return arr1[k].length;
         //смотрим содержимое каждой буквы
        while(j<10)
        {
             if(arr1[k][j]==="1"&& arr1[k][j+1]==="1")
             tt+="-";
             if(arr1[k][j]==="1"&& arr1[k][j+1]==="0")
              tt+=".";

             j+=2;
           
        }
         t=MORSE_TABLE[tt];
         ans+=t;
         }



    
    if (i!=arr.length-1)
    ans+=" ";
    }
    return ans;
    //return MORSE_TABLE[expr[0]];
   // console.log(expr);
    // write your solution here
}

module.exports = {
    decode
}