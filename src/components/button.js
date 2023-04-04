import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        // eslint-disable-next-line no-unused-vars
        const {change: currentChanges, locale : currentLocale} = this.props;
        // eslint-disable-next-line no-unused-vars
        const {change: nextchanges, locale: nextLocale } = nextProps;
        if(currentChanges === nextchanges && nextLocale === currentLocale){
            return false;
        }
        return true;
    }
    render(){
        console.log('Button component render');
        const {change, locale, show} = this.props;
        return(
            <>
            <button type="button" onClick={() => change(locale)}>
                {
                    locale==='bn-BD'? 'Change' : 'পরিবর্তন করুন'
                }
                </button>
                <>{show && <>Hellow</>}</>
                </>
        )
    }
}

export default Button;