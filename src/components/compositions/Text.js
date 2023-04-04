export default function Text({addemoji, addbrackets}){
    let text = 'I am hemel'
    if(addemoji){
        text = addemoji(text, ":)");
    }if(addbrackets){
        text = addbrackets(text)
    }
    return <div>{text}</div>
}